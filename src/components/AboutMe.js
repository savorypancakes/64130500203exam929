import React from "react";
import Micko from "../assets/micko.jpg";

export default function AboutMe(){
    return(
        <div className = "AboutMe">
            <div className="card fMe">
                <img src = {Micko} alt="Avatar" className="cardPic"/>
                <div className="container">
                    <h1>Name: Micko Kok</h1>
                    <h2>Motto</h2>
                    <p>Don't slack off again</p>
                </div>
            </div>

            <div className="card education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <h4>Kindergarten to High School:</h4>
                        <p>CIA First</p> 
                    </li>
                    <li>
                        <h4>{`University (Undergraduate)`}</h4>
                        <p>KMUTT</p>
                    </li>
                </ul>
            </div>

            <div className="card fSubjects">
                <h2>Favourite Subjects</h2>
                <ul>
                    <li>
                        <h4>Data Structure</h4>
                        <p>I love writing the code in the lab. Furthermore, the course is not too hard for me.</p>
                    </li>
                    <li>
                        <h4>Discrete Maths</h4>
                        <p>I just loved the maths problems given by the Ajarn every week.</p>
                    </li>
                    <li>
                        <h4>Programming Paradigm</h4>
                        <p>We get to learn about Prolog and Racket</p>
                    </li>
                </ul>
            </div>

            <div className="card fMovies">
                <h2>Favourite Movies</h2>
                <ul>
                    <li>
                        <h4>A Silent Voice</h4>
                        <p>
                            It's a simple movie that focuses on the redemption of bully. Despite it being a simple movie, the storytelling can bring anyone to tears. 
                        </p>
                    </li>
                    <li>
                        <h4>Your Name</h4>
                        <p>
                            It's a romance movie that touches on long distance relationship, time travel, and fate. This is one of those feel-good movies that can make you cry and warms your heart at the same time.
                        </p>
                    </li>
                    <li>
                        <h4>Ju-On: The Grudge</h4>
                        <p>
                            {`The horror of Onryou (Japanese Vengeful Spirit) is portrayed very well. The iconic creaking sound of the ghost can send chills down anyone's spine. It's one of the horror movies that makes me afraid of my own bathroom for several weeks`}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}