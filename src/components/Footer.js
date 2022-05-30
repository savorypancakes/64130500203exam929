import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import {NavLink} from "react-router-dom"
function Footer(props) {
    return (
        <footer className="footer">
            <nav className= "foot">
                <nav className="nav">
                    <NavLink className="nav-link active" to = "/">Home</NavLink>
                    <NavLink className="nav-link inactive" to = "/aboutMe">About Me</NavLink>
                    <NavLink className="nav-link inactive" to = "/photoGallery">Photo Gallery</NavLink>
                </nav>
            </nav>
            {/* <div className='social'>
                <a class="btn btn-social-icon btn-twitter">
                    <span class="fa fa-twitter"></span>
                </a>
                <a class="btn btn-social-icon btn-facebook">
                    <span class="fa fa-facebook"></span>
                </a>
                <a class="btn btn-social-icon btn-instagram">
                    <span class="fa fa-instagram"></span>
                </a>
                <a class="btn btn-social-icon btn-github">
                    <span class="fa fa-github"></span>
                </a>
            </div> */}
        </footer>
    )
}

export default Footer;
