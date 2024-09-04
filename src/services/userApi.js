import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";

export const userSignup = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/user/signup",
            method: "POST",
            data,
        });
        if (response?.data?.success) {
            toast.success("Signup Successful");
        } else {
            toast.error(response?.data?.message || "Signup Failed");
        }
        return response?.data;
    } catch (error) {
        toast.error("Signup Failed");
        console.log(error);
        throw error; // Re-throwing the error to let the caller handle it if needed
    }
};

export const userLogin = async (data) => {
    try {
        const response = await axiosInstance({
            url: "/user/login",
            method: "POST",
            data,
        });
        if (response?.data?.success) {
            toast.success("Login Successful");
        } else {
            toast.error(response?.data?.message || "Login Failed");
        }
        return response?.data;
    } catch (error) {
        toast.error("Login Failed");
        console.log(error);
        throw error; // Re-throwing the error to let the caller handle it if needed
    }
};

export const userLogout = async () => {
    try {
        const response = await axiosInstance({
            url: "/user/logout",
            method: "POST",
        });
        if (response?.data?.success) {
            toast.success("Logout Successful");
        } else {
            toast.error(response?.data?.message || "Logout Failed");
        }
        return response?.data;
    } catch (error) {
        toast.error("Logout Failed");
        console.log(error);
        throw error; // Re-throwing the error to let the caller handle it if needed
    }
};

export const userCheck = async () => {
    try {
        const response = await axiosInstance({
            url: "/user/user-check",
            method: "GET",
        });
        return response?.data;
    } catch (error) {
        toast.error("Error Checking User Status");
        console.log(error);
        throw error; // Re-throwing the error to let the caller handle it if needed
    }
};
