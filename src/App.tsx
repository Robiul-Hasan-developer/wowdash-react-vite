import { router } from './routes/AppRoutes';

import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App