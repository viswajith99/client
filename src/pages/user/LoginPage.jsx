

import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services/userApi";

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await userLogin(data);
            if (response.data.success) {
                toast.success("Login Successful");
                navigate("/"); 
            } else {
                toast.error("Login Failed: " + response.data.message);
            }
        } catch (error) {
       
            if (error.response) {
               
                toast.error("Error: " + error.response.data.message);
            } else if (error.request) {
               
                toast.error("No response from server. Please try again later.");
            } else {
            
                toast.error("Error: " + error.message);
            }
           console.log(error)
        }
    };

    return (
        <div className="hero bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row lg:w-8/12">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque
                        aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-6/12">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                {...register("email", { required: true })} 
                                placeholder="email" 
                                className="input input-bordered" 
                            />
                            {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                placeholder="password"
                                className="input input-bordered"
                            />
                            {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
                            <label className="label">
                                <Link to={"/signup"}>New User?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
