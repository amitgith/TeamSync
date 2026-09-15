import { ChartArea, LayoutDashboard, List, Presentation } from "lucide-react";

const employeeNavigation = [
  {
    path: "/home",
    title: "Dashboard",
    icon: <LayoutDashboard />,
  },
  {
    path: "/home/myTask",
    title: "My-Task",
    icon: <List />,
  },
  {
    path: "/home/chart",
    title: "Charts",
    icon: <ChartArea />,
  },
  {
    path: "/home/attendance",
    title: "Attendance",
    icon: <Presentation />,
  },
];
