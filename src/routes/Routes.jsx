import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import LoginPage from "../pages/user/LoginPage";
import SignUpPage from "../pages/user/SignUpPage";
import Homepages from "../pages/user/Homepages";
import { UserLayout } from "../layouts/UserLayout";
import CoursePage from "../pages/user/CoursePage";
import ProfilePage from "../pages/user/ProfilePage";
import CourseDetailsPage from "../pages/user/CourseDetailsPage";
import LearningDashboard from "../pages/user/LearningDashboard";
import AboutPage from "../pages/user/AboutPage";
import { ErrorPage } from "../pages/user/ErrorPage";
// import { UserAuth } from "./protectedRoutes/userAuth";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "",
                element: <Homepages />,
            },
            {
                path: "about",
                element: <AboutPage/>,
            },
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignUpPage />,
            },
           
        ],
    },
    {
        path: "user",
        element:  <UserLayout />  ,
        children: [
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "my-learnings",
                element: <LearningDashboard/>,
            },
            {
                path: "course-details/:id",
                element: <CourseDetailsPage />,
            },
        ],
    },
    // {
    //     path: "instructor",
    //     element:  <UserLayout />  ,
    //     children: [
    //         {
    //             path: "course",
    //             element: <CreateCoursePage />,
    //         },
    //         {
    //             path: "profile",
    //             element: <createAssignment/>,
    //         },
    //         {
    //             path: "my-learnings",
    //             element: <CreateQuiz/>,
    //         },
    //         {
    //             path: "",
    //             element: <AddFeedback />,
    //         },
    //     ],
    // },
    // {
    //     path: "admin",
    //     element:  <AdminLayout />  ,
    //     children: [
    //         {
    //             path: "course",
    //             element: <CreateCoursePage />,
    //         },
    //         {
    //             path: "profile",
    //             element: <createAssignment/>,
    //         },
    //         {
    //             path: "my-learnings",
    //             element: <CreateQuiz/>,
    //         },
    //         {
    //             path: "",
    //             element: <AddFeedback />,
    //         },
    //     ],
    // },
]);
