import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, handleFirestoreError, OperationType } from '../firebase';

interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  xp: number;
  completedPages: string[];
  completedModules: string[];
  quizStates: string;
  role: string;
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
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        // Check if user profile exists in Firestore, if not create it
        const userRef = doc(db, 'users', firebaseUser.uid);
        const publicRef = doc(db, 'public_profiles', firebaseUser.uid);
        
        try {
          const docSnap = await getDoc(userRef);
          const publicSnap = await getDoc(publicRef);
          
          const displayName = firebaseUser.displayName || 'Blocknaut';
          const photoURL = firebaseUser.photoURL || '';
          const email = firebaseUser.email || '';

          if (!docSnap.exists()) {
            const newProfile: UserProfile = {
              uid: firebaseUser.uid,
              displayName,
              email,
              photoURL,
              xp: 0,
              completedPages: [],
              completedModules: [],
              quizStates: '{}',
              role: 'user',
              createdAt: new Date().toISOString(),
              country: 'Global',
              welcomeWatched: false
            };
            await setDoc(userRef, newProfile);
            await setDoc(publicRef, {
              displayName,
              photoURL,
              xp: 0,
              country: 'Global'
            });
            setProfile(newProfile);
          } else {
            const existingProfile = docSnap.data() as UserProfile;
            setProfile(existingProfile);
            
            // Sync public profile if missing or outdated
            if (!publicSnap.exists() || 
                publicSnap.data().displayName !== displayName || 
                publicSnap.data().photoURL !== photoURL ||
                publicSnap.data().country !== (existingProfile.country || 'Global')) {
              await setDoc(publicRef, {
                displayName,
                photoURL,
                xp: existingProfile.xp || 0,
                country: existingProfile.country || 'Global'
              }, { merge: true });
            }
          }
        } catch (error) {
          try {
            handleFirestoreError(error, OperationType.GET, `users/${firebaseUser.uid}`);
          } catch (e) {
            console.error("Handled firestore error during auth", e);
          }
        }
      } else {
        setProfile(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen for profile changes
  useEffect(() => {
    if (!user) return;
    
    const userRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userRef, (doc) => {
      if (doc.exists()) {
        setProfile(doc.data() as UserProfile);
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, profile, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
