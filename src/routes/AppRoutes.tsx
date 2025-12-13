import { createBrowserRouter } from "react-router-dom";

import Cryptocurrency from "@/pages/dashboards/cryptocurrency/Cryptocurrency";
import Investment from "@/pages/dashboards/investment/Investment";
import Nft from "@/pages/dashboards/nft/Nft";
import NotFound from '../error/404';
import ErrorBoundary from "../error/ErrorBoundary";
import MainLayout from "../layouts/MainLayout";
import Crm from "../pages/dashboards/crm/Crm";
import AiDashboard from "../pages/dashboards/dashboard/AiDashboard";
import Ecommerce from "../pages/dashboards/ecommerce/Ecommerce";
import Lms from "@/pages/dashboards/lms/Lms";
import Medical from "@/pages/dashboards/medical/Medical";

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
      {
        path: "investment", element: <Investment />
      },
      {
        path: "lms", element: <Lms />
      },
      {
        path: "nft", element: <Nft />
      },
      {
        path: "medical", element: <Medical />
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);