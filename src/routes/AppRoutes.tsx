import { createBrowserRouter } from "react-router-dom";

import Calendar from "@/pages/calendar/Calendar";
import Chat from "@/pages/chat/Chat";
import Alert from "@/pages/components-pages/alert/Alert";
import Buttons from "@/pages/components-pages/buttons/Buttons";
import Colors from "@/pages/components-pages/colors/Colors";
import Dropdown from "@/pages/components-pages/dropdown/Dropdown";
import Analytics from "@/pages/dashboards/analytics/Analytics";
import Cryptocurrency from "@/pages/dashboards/cryptocurrency/Cryptocurrency";
import Inventory from "@/pages/dashboards/inventory/Inventory";
import Investment from "@/pages/dashboards/investment/Investment";
import Lms from "@/pages/dashboards/lms/Lms";
import Medical from "@/pages/dashboards/medical/Medical";
import Nft from "@/pages/dashboards/nft/Nft";
import EmailDetails from "@/pages/emails/email-details/EmailDetails";
import Email from "@/pages/emails/email/Email";
import NotFound from '../error/404';
import ErrorBoundary from "../error/ErrorBoundary";
import MainLayout from "../layouts/MainLayout";
import Crm from "../pages/dashboards/crm/Crm";
import AiDashboard from "../pages/dashboards/dashboard/AiDashboard";
import Ecommerce from "../pages/dashboards/ecommerce/Ecommerce";
import Typography from './../pages/components-pages/typography/Typography';

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
      {
        path: "analytics", element: <Analytics />
      },
      {
        path: "inventory", element: <Inventory />
      },
      {
        path: "email", element: <Email />
      },
      {
        path: "email-details", element: <EmailDetails />
      },
      {
        path: "chat", element: <Chat />
      },
      {
        path: "calendar", element: <Calendar />
      },
      {
        path: "typography", element: <Typography />
      },
      {
        path: "colors", element: <Colors />
      },
      {
        path: "buttons", element: <Buttons />
      },
      {
        path: "dropdown", element: <Dropdown />
      },
      {
        path: "alert", element: <Alert />
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);