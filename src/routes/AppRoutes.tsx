import { createBrowserRouter } from "react-router-dom";

import Cryptocurrency from "@/pages/dashboards/cryptocurrency/Cryptocurrency";
import NotFound from '../error/404';
import ErrorBoundary from "../error/ErrorBoundary";
import MainLayout from "../layouts/MainLayout";
import Crm from "../pages/dashboards/crm/Crm";
import AiDashboard from "../pages/dashboards/dashboard/AiDashboard";
import Ecommerce from "../pages/dashboards/ecommerce/Ecommerce";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />, 
    children: [
      {
        index: true, element: <AiDashboard />
      },
      {
        path: "crm", element: <Crm />
      },
      {
        path: "ecommerce", element: <Ecommerce />
      },
      {
        path: "cryptocurrency", element: <Cryptocurrency />
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);