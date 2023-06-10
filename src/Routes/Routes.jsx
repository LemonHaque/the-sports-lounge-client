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
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'mycart',
                element:<MyCart></MyCart>
            }
        ]
    }
]);