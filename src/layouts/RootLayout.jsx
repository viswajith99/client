import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";



export const RootLayout = () => {
    return (
        <div>
            <Header />
            <div className="min-h-96">
               
            </div>
            <Footer />
        </div>
    );
};