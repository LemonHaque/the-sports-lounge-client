import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Instructor from "../pages/instructor/Instructor";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import ClassesPage from "../pages/classesPage/ClassesPage";
import Dashboard from "../layout/dashboard/Dashboard";
import MyCart from "../layout/dashboard/mycart/Mycart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../providers/allUsers/Allusers";
import AdminRoute from "./AdminRoutes";
import AddAClass from "../layout/dashboard/addAClass/AddAClass";
import ManageClasses from "../layout/dashboard/manageClasses/ManageClasses";
import Payment from "../layout/dashboard/payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "instructor",
                element: <Instructor></Instructor>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "classes",
                element: <ClassesPage></ClassesPage>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addaclass',
                element: <AdminRoute><AddAClass></AddAClass></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
        ]
    }
]);