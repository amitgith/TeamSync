import Home from "../../features/dashboard/ui/pages/Home";
import Chart from "../../features/chats/ui/pages/Chart";
import Setting from "../../features/settings/ui/pages/Setting";
export const commonRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "chart",
    element: <Chart />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
];
