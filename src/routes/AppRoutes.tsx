import { createBrowserRouter } from "react-router-dom";

import BasicTable from "@/pages/basic-table/BasicTable";
import Calendar from "@/pages/calendar/Calendar";
import ColumnChartPage from "@/pages/chart/column-chart/ColumnChartPage";
import LineChartPage from "@/pages/chart/line-chart/LineChartPage";
import PieChartPage from "@/pages/chart/PieChartPage";
import Chat from "@/pages/chat/Chat";
import Alert from "@/pages/components-pages/alert/Alert";
import Avatar from "@/pages/components-pages/avatar/Avatart";
import Badges from "@/pages/components-pages/badges/Badges";
import Buttons from "@/pages/components-pages/buttons/Buttons";
import CardPage from "@/pages/components-pages/card/CardPage";
import Colors from "@/pages/components-pages/colors/Colors";
import Dropdown from "@/pages/components-pages/dropdown/Dropdown";
import List from "@/pages/components-pages/list/List";
import Pagination from "@/pages/components-pages/pagination/Pagination";
import ProgressBar from "@/pages/components-pages/progress-bar/ProgressBar";
import Radio from "@/pages/components-pages/radio/Radio";
import StarRatings from "@/pages/components-pages/star-ratings/StarRatings";
import SwitchPage from "@/pages/components-pages/switch/SwitchPage";
import TabAccordion from "@/pages/components-pages/tab-accordion/TabAccordion";
import Tags from "@/pages/components-pages/tags/Tags";
import TooltipPopover from "@/pages/components-pages/tooltip-popover/TooltipPopover";
import Analytics from "@/pages/dashboards/analytics/Analytics";
import Cryptocurrency from "@/pages/dashboards/cryptocurrency/Cryptocurrency";
import Inventory from "@/pages/dashboards/inventory/Inventory";
import Investment from "@/pages/dashboards/investment/Investment";
import Lms from "@/pages/dashboards/lms/Lms";
import Medical from "@/pages/dashboards/medical/Medical";
import Nft from "@/pages/dashboards/nft/Nft";
import EmailDetails from "@/pages/emails/email-details/EmailDetails";
import Email from "@/pages/emails/email/Email";
import FormValidation from "@/pages/forms/form-validation/FormValidation";
import InputForms from "@/pages/forms/input-forms/InputForms";
import InputLayout from "@/pages/forms/input-layout/InputLayout";
import Company from "@/pages/setting/company/Company";
import UsersGrid from "@/pages/users/users-grid/UsersGrid";
import UsersList from "@/pages/users/UsersList";
import ViewProfile from "@/pages/users/view-profile/ViewProfile";
import Widgets from "@/pages/widgets/Widgets";
import NotFound from '../error/404';
import ErrorBoundary from "../error/ErrorBoundary";
import MainLayout from "../layouts/MainLayout";
import Crm from "../pages/dashboards/crm/Crm";
import AiDashboard from "../pages/dashboards/dashboard/AiDashboard";
import Ecommerce from "../pages/dashboards/ecommerce/Ecommerce";
import Typography from './../pages/components-pages/typography/Typography';
import SettingsNotification from "@/pages/setting/settings-notification/SettingsNotification";

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
      {
        path: "card", element: <CardPage />
      },
      {
        path: "avatar", element: <Avatar />
      },
      {
        path: "progress-bar", element: <ProgressBar />
      },
      {
        path: "tab-accordion", element: <TabAccordion />
      },
      {
        path: "pagination", element: <Pagination />
      },
      {
        path: "pagination", element: <Pagination />
      },
      {
        path: "badges", element: <Badges />
      },
      {
        path: "tooltip", element: <TooltipPopover />
      },
      {
        path: "star-rating", element: <StarRatings />
      },
      {
        path: "tags", element: <Tags />
      },
      {
        path: "list", element: <List />
      },
      {
        path: "radio", element: <Radio />
      },
      {
        path: "switch", element: <SwitchPage />
      },
      {
        path: "input-forms", element: <InputForms />
      },
      {
        path: "input-layout", element: <InputLayout />
      },
      {
        path: "form-validation", element: <FormValidation />
      },
      {
        path: "line-chart", element: <LineChartPage />
      },
      {
        path: "column-chart", element: <ColumnChartPage />
      },
      {
        path: "pie-chart", element: <PieChartPage />
      },
      {
        path: "widgets", element: <Widgets />
      },
      {
        path: "basic-table", element: <BasicTable />
      },
      {
        path: "users-list", element: <UsersList />
      },
      {
        path: "users-grid", element: <UsersGrid />
      },
      {
        path: "view-profile", element: <ViewProfile />
      },
      {
        path: "company", element: <Company />
      },
      {
        path: "settings-notification", element: <SettingsNotification />
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);