import React from "react"
import Home from "./Home"
import AboutMe from "./AboutMe"
import PhotoGallery from "./PhotoGallery"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeComp(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/photoGallery" element={<PhotoGallery />} />
            </Routes>
            <Footer />
        </Router>
    )
}