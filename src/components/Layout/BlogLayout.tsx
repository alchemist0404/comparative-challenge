import React from "react";
import { Outlet } from "react-router-dom";
import BlogHeader from "components/BlogHeader";
import Footer from "components/Footer";

export default function BlogLayout() {
    return (
        <React.Fragment>
            <BlogHeader />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
}
