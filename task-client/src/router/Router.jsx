/** @format */

import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/root/Root";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../components/form/login/Login";
import Register from "../components/form/register/Register";
import Dashboard from "../layouts/dashboard/Dashboard";
import ManageTask from "../pages/dashboards/manageTask/ManageTask";
import UpdateTask from "../pages/dashboards/updateTask/UpdateTask";
import About from "../pages/about/About";
import Error from "../pages/errorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/manageTask",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateTask></UpdateTask>
      },
   
    ],
  },
]);

export default router;
