import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "@/features/dashboard/Dashboard";
import Teachers from "@/features/dashboard/Teachers";
import LoginPage from "@/features/authentication/LoginPage";
 
const AppRoutes = () => {
  return (

<Routes>
  <Route path="/login" element={<LoginPage/>} />
<Route path="/" element={<DashboardLayout />}>
<Route path="/dashboard" index element={<Dashboard />} />
<Route path="/dashboard/teachers" element={<Teachers />} />
</Route>
</Routes>
  );
};
 
export default AppRoutes;