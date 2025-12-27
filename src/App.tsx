import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';
import { PageLoader } from './loading/PageLoader';
import { router } from './routes/AppRoutes';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App