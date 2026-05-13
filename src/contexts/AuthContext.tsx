import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../firebase';
import posthog from 'posthog-js';

interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  xp: number;
  xpUpdatedAt?: number;
  completedPages: string[];
  completedModules: string[];
  quizStates: string;
  createdAt: string;
  country?: string;
  welcomeWatched?: boolean;
}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        console.warn("Auth initialization timed out, forcing loading false");
        setLoading(false);
      }
    }, 8000);

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      clearTimeout(timeoutId);
      setUser(firebaseUser);
      
      if (firebaseUser) {
        // Identify in PostHog
        if (import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN) {
          posthog.identify(firebaseUser.uid, {
            email: firebaseUser.email,
            displayName: firebaseUser.displayName
          });
        }

        // Check if user profile exists in Firestore, if not create it
        const userRef = doc(db, 'users', firebaseUser.uid);
        const publicRef = doc(db, 'public_profiles', firebaseUser.uid);
        
        try {
          const [docSnap, publicSnap] = await Promise.all([
            getDoc(userRef),
            getDoc(publicRef)
          ]);
          
          const displayName = firebaseUser.displayName || 'Blocknaut';
          const photoURL = firebaseUser.photoURL || '';
          const email = firebaseUser.email || '';

          // CORE REPAIR: If user document is missing, CREATE it.
          // This fixes users who have Auth but failed initialization.
          if (!docSnap.exists()) {
            console.log("Profile missing, initializing for UID:", firebaseUser.uid);
            const newProfile: UserProfile = {
              uid: firebaseUser.uid,
              displayName,
              email,
              photoURL,
              xp: 0,
              completedPages: [],
              completedModules: [],
              quizStates: '{}',
              createdAt: new Date().toISOString(),
              country: 'Global',
              welcomeWatched: false,
              xpUpdatedAt: Date.now()
            };
            
            // Use setDoc to ensure creation. Catch errors to prevent "black screen" but alert.
            try {
              await setDoc(userRef, newProfile);
              await setDoc(publicRef, {
                displayName,
                photoURL,
                xp: 0,
                country: 'Global',
                xpUpdatedAt: Date.now()
              });
              setProfile(newProfile);
            } catch (writeErr) {
              console.error("Critical error creating initial profile:", writeErr);
              // We set profile locally anyway so they can at least use the app, 
              // but the persist layer (Course.tsx) will try to fix this later with setDoc merge.
              setProfile(newProfile);
            }
          } else {
            const existingProfile = docSnap.data() as UserProfile;
            
            // Migration: Ensure older users have all required fields
            const hasRequiredFields = existingProfile.uid && 
                                     existingProfile.email && 
                                     existingProfile.xp !== undefined &&
                                     existingProfile.createdAt;
            
            if (!hasRequiredFields) {
              console.log("Migration required for UID:", firebaseUser.uid);
              const migratedProfile: UserProfile = {
                ...existingProfile,
                uid: existingProfile.uid || firebaseUser.uid,
                email: existingProfile.email || email,
                xp: existingProfile.xp ?? 0,
                createdAt: existingProfile.createdAt || new Date().toISOString(),
                xpUpdatedAt: existingProfile.xpUpdatedAt || Date.now(),
                completedPages: Array.isArray(existingProfile.completedPages) ? existingProfile.completedPages : [],
                completedModules: Array.isArray(existingProfile.completedModules) ? existingProfile.completedModules : [],
                quizStates: typeof existingProfile.quizStates === 'string' ? existingProfile.quizStates : JSON.stringify(existingProfile.quizStates || {}),
                displayName: existingProfile.displayName || displayName,
                photoURL: existingProfile.photoURL || photoURL,
                country: existingProfile.country || 'Global',
                welcomeWatched: existingProfile.welcomeWatched ?? false
              };
              
              try {
                await setDoc(userRef, migratedProfile, { merge: true });
                setProfile(migratedProfile);
              } catch (err) {
                console.error("Migration write failed:", err);
                setProfile(migratedProfile);
              }
            } else {
              setProfile(existingProfile);
            }
            
            // PUBLIC PROFILE REPAIR: If public record is missing or outdated, SYNC it.
            // This specifically fixes the reporter's issue: "Uid missing from public profiles page"
            const publicData = publicSnap.exists() ? publicSnap.data() : null;
            if (!publicSnap.exists() || 
                publicData?.displayName !== existingProfile.displayName || 
                publicData?.photoURL !== existingProfile.photoURL ||
                publicData?.xp !== existingProfile.xp) {
              
              console.log("Syncing public profile for UID:", firebaseUser.uid);
              try {
                await setDoc(publicRef, {
                  displayName: existingProfile.displayName || displayName,
                  photoURL: existingProfile.photoURL || photoURL,
                  xp: existingProfile.xp || 0,
                  country: existingProfile.country || 'Global',
                  xpUpdatedAt: existingProfile.xpUpdatedAt || Date.now()
                }, { merge: true });
              } catch (publicErr) {
                console.error("Failed to sync public profile:", publicErr);
              }
            }
          }
        } catch (error) {
          try {
            handleFirestoreError(error, OperationType.GET, `users/${firebaseUser.uid}`);
          } catch (e) {
            console.error("Handled firestore error during auth", e);
          }
        } finally {
          setLoading(false);
        }
      } else {
        if (import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN) {
          posthog.reset();
        }
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      clearTimeout(timeoutId);
      unsubscribe();
    };
  }, []);

  // Listen for profile changes
  useEffect(() => {
    if (!user) return;
    
    const userRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        // Ensure critical arrays and strings exist to prevent component crashes
        const safeData = {
          ...data,
          completedPages: data.completedPages || [],
          completedModules: data.completedModules || [],
          quizStates: data.quizStates || '{}'
        };
        setProfile(safeData as UserProfile);
      }
    }, (error) => {
      // Log the error but don't re-throw to prevent crashing the subscription loop
      // and causing a "black screen" for the user.
      console.error("Firestore onSnapshot Error:", error);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
