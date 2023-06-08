import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Instructor from "../pages/instructor/Instructor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/instructor",
                element: <Instructor></Instructor>
            }
        ]
    },
]);