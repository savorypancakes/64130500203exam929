import React from "react"
import {NavLink} from "react-router-dom"
import Logo from "../assets/logo.png"

export default function Header(){
    return(
        <nav className= "NavBar">
            <img src = {Logo} alt = "logo" className ="logo"/>
            <nav className="nav">
                <NavLink className="nav-link active" to = "/">Home</NavLink>
                <NavLink className="nav-link inactive" to = "/aboutMe">About Me</NavLink>
                <NavLink className="nav-link inactive" to = "/photoGallery">Photo Gallery</NavLink>
                {/* <a className="nav-link active">Home</a>
                <a className="nav-link inactive"href = "../../public/aboutMe.html">About Me</a>
                <a className="nav-link inactive"href = "../../public/photoGallery.html">Photo Gallery</a> */}
            </nav>
        </nav>
    )
}