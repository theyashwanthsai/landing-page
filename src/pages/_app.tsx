// pages/_app.tsx
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Adjust path as needed

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    // Debug navigation
    const handleRouteChange = (url: string) => {
      console.log('Route changing to:', url);
    };
    
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeError', (err) => console.error('Navigation error:', err));
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('routeChangeError', handleRouteChange);
    };
  }, [router]);
  
  return <Component {...pageProps} />;
}