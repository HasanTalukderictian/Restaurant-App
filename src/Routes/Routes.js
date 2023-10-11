import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ContactUs from "../pages/Contact/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Shared/secret/Secret";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import MyCart from "../pages/DashBoardPages/MyCart";
import AllUsers from "../Layouts/DashBoard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      }
    ]

  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
    children: [
      {
        path:'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'allusers',
        element:<AllUsers></AllUsers>
      }
    ]

  }
]);
