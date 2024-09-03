import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login-page/login";
import List from "../pages/list-page/list";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/list",
        element: <List/>
    },
])