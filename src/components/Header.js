import React from "react"

export default function Header(){
    return(
        <nav className= "NavBar">
            <img src = "/logo.png" alt = "logo" className = "logo"/>
            <a>Home</a>
            <a href = "../../public/aboutMe.html">About Me</a>
            <a href = "../../public/photoGallery.html">Photo Gallery</a>
        </nav>
    )
}