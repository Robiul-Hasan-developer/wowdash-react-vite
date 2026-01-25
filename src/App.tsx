// import { ThemeProvider } from "@/components/theme-provider";
// import { useEffect, useState } from 'react';
// import { RouterProvider } from 'react-router-dom';
// import { IsSubmittingContextProvider } from './context/isSubmittingContext';
// import { LoadingProvider } from './context/LoadingContext';
// import { PageLoader } from './loading/PageLoader';
// import { router } from './routes/AppRoutes';

// function App() {

//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false));
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <PageLoader />;

//   return (
//     <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
//       <LoadingProvider>
//         <IsSubmittingContextProvider>
//           <RouterProvider router={router} />
//         </IsSubmittingContextProvider>
//       </LoadingProvider>
//     </ThemeProvider>
//   )
// }

// export default App







import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider } from "react-router-dom";
import { EmailSidebarProvider } from "./context/EmailSidebarContext";
import { LoadingProvider } from "./context/LoadingContext";
import { IsSubmittingContextProvider } from "./context/isSubmittingContext";
import { router } from "./routes/AppRoutes";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LoadingProvider>
        <IsSubmittingContextProvider>
          <EmailSidebarProvider>
            <RouterProvider router={router} />
          </EmailSidebarProvider>
        </IsSubmittingContextProvider>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
