import React, { createContext, useContext, useEffect, useState } from 'react';
import posthog from 'posthog-js';
import { supabase } from '../lib/supabase';
import { AppUser, UserProfile, getCurrentProfile, mapSupabaseUser } from '../lib/lmsApi';

interface AuthContextType {
  user: AppUser | null;
  profile: UserProfile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  refreshProfile: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const loadProfile = async (userId: string) => {
    const currentProfile = await getCurrentProfile(userId);
    setProfile(currentProfile);
  };

  const refreshProfile = async () => {
    if (!user) return;
    await loadProfile(user.id);
  };

  useEffect(() => {
    let isMounted = true;

    const syncSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;

        const supabaseUser = data.session?.user || null;
        if (!isMounted) return;

        if (!supabaseUser) {
          setUser(null);
          setProfile(null);
          if (import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN) {
            posthog.reset();
          }
          return;
        }

        const mappedUser = mapSupabaseUser(supabaseUser);
        setUser(mappedUser);

        if (import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN) {
          posthog.identify(mappedUser.id, {
            email: mappedUser.email,
            displayName: mappedUser.displayName,
          });
        }

        await loadProfile(mappedUser.id);
      } catch (error) {
        console.error('Failed to initialize Supabase auth', error);
        if (isMounted) {
          setUser(null);
          setProfile(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    syncSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      const supabaseUser = session?.user || null;

      if (!supabaseUser) {
        setUser(null);
        setProfile(null);
        if (import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN) {
          posthog.reset();
        }
        return;
      }

      const mappedUser = mapSupabaseUser(supabaseUser);
      setUser(mappedUser);

      if (import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN) {
        posthog.identify(mappedUser.id, {
          email: mappedUser.email,
          displayName: mappedUser.displayName,
        });
      }

      loadProfile(mappedUser.id).catch(error => {
        console.error('Failed to refresh profile after auth change', error);
      });
    });

    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
