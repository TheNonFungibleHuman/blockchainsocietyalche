import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { PostHogProvider } from '@posthog/react';

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

const PostHogWrapper = ({ children }: { children: React.ReactNode }) => {
  if (!POSTHOG_KEY) {
    return <>{children}</>;
  }

  return (
    <PostHogProvider 
      apiKey={POSTHOG_KEY} 
      options={{
        api_host: POSTHOG_HOST,
        defaults: '2026-01-30',
      }}
    >
      {children}
    </PostHogProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogWrapper>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PostHogWrapper>
  </StrictMode>,
);
