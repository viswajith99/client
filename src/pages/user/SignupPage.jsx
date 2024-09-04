import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { userSignup } from "../../services/userApi"; // Replace with your actual signup API function

export const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            const response = await userSignup(data); // Replace with your actual API function
            if (response.data.success) {
                toast.success("Signup Successful");
                navigate("/login");
            } else {
                toast.error("Signup Failed: " + response.data.message);
            }
        } catch (error) {
            if (error.response) {
                toast.error("Error: " + error.response.data.message);
            } else if (error.request) {
                toast.error("No response from server. Please try again later.");
            } else {
                toast.error("Error: " + error.message);
            }
            console.error(error);
        }
    };

    return (
        <div className="hero bg-base-200 py-12 px-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                <div className="text-center lg:text-left lg:w-8/12">
                    <h1 className="text-5xl font-bold">Sign-up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-4/12">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                placeholder="name"
                                className="input input-bordered"
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="email"
                                className="input input-bordered"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })}
                                placeholder="password"
                                className="input input-bordered"
                            />
                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: value =>
                                        value === watch("password") || "Passwords do not match"
                                })}
                                placeholder="confirm password"
                                className="input input-bordered"
                            />
                            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">
                                    Existing User?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
