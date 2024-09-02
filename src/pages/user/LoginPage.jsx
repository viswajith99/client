import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200 py-20">
            <div className="hero-content flex-col lg:flex-row lg:w-8/12 mx-auto">
                <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-5xl font-bold text-primary">Login Now</h1>
                    <p className="py-6 text-lg text-gray-600">
                        Welcome back! Please login to your account. If you don't have an account, you can <Link to="/signup" className="text-primary font-semibold">sign up here</Link>.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-md mx-auto lg:w-1/2 shadow-2xl rounded-lg border border-gray-200">
                    <form className="card-body p-8">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                                required
                            />
                        </div>
                        <div className="form-control mb-6">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className="input input-bordered w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                                required
                            />
                            <label className="label mt-2">
                                <Link to="/signup" className="text-primary font-semibold">New User? Sign Up</Link>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary w-full text-white py-2 rounded-md hover:bg-primary-focus transition-colors duration-300">
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
