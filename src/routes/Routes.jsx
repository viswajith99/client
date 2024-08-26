import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import LoginPage from "../pages/user/LoginPage";
import SignUpPage from "../pages/user/SignUpPage";
import Homepages from "../pages/user/Homepages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
       
        children: [
            {
                path: "",
                element: <Homepages />,
            },
            {
                path: "about",
                element: <h1>About page</h1>,
            },
            {
                path: "login",
                element: <LoginPage/>,
            },
            {
                path: "signup",
                element: <SignUpPage />,
            },
        ],
    },
]);
