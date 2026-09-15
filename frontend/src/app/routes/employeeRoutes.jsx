import MyTask from "../../features/employee module/MyTask/ui/pages/MyTask";
import Profile from "../../features/employee module/profile/ui/pages/Profile";
import Attendance from "../../features/employee module/Attendance/ui/pages/Attendance";
export const employeeRoutes = [
  {
    path: "/home/myTask",
    element: <MyTask />,
  },
  {
    path: "/home/profile",
    element: <Profile />,
  },
  {
    path: "/home/attendance",
    element: <Attendance />,
  },
];
