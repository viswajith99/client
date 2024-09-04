import React from "react";
import { Link } from "react-router-dom";
import { BriefcaseBusiness, CircleUserRound } from "lucide-react";
import { DarkMode } from "../ui/Darkmode";

export const UserHeader = () => {
    return (
        <div className="flex items-center justify-between w-full h-32 px-20 shadow-xl">
            <div>
                <Link to={"/"}>
                    <h1 className="text-4xl font-bold">Logo</h1>
                </Link>
            </div>

            <nav className="flex gap-20 font-semibold">
               
                <Link to={"/user/course"}>AddFeedback</Link>
                <Link to={"/user/my-learnings"}>AddCourse</Link>
                <Link to={"/user/courses/course/:id /assignment&quiz"}>UpdateCoursee</Link>
            </nav>

            <div className="flex items-center gap-8">
                <DarkMode  />
                <Link to={"/instructor/profile"}>
                    <CircleUserRound  width={30} height={30}/>
                </Link>
            </div>
        </div>
    );
};

