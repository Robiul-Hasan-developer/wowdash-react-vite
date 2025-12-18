import { router } from './routes/AppRoutes';

import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from 'react-router-dom';
import { LoadingProvider } from './context/LoadingContext';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LoadingProvider>
        <RouterProvider router={router} />
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default App