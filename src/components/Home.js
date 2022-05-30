import React from "react";
import Bear from "../assets/bear-piano.jpg";
import Cat from "../assets/featured-cat.jpg";

export default function Home(){
    return(
        <div className = "Home">
            {/* <h2 className="title">Breaking News</h2>
            <p className="content">A Bear was found breaking into the home of a famous pianist and flawlessly playing the piano.</p>
            <img src = "/bear-piano.jpg"/> */}
            <div className="card">
                <img src={Bear} alt="Avatar" className="cardPic"/>
                <div className="container">
                    <h2 className="title">Breaking News</h2>
                    <p className="content">A Bear was found breaking into the home of a famous pianist and flawlessly playing the piano.</p>
                </div>
            </div>
            <div className="card">
                <img src={Cat} alt="Avatar" className="cardPic"/>
                <div className="container">
                    <h2 className="title">Featured Cat</h2>
                    <p className="content">This cat now owns my house, help.</p>
                </div>
            </div>
        </div>
        
    )
}