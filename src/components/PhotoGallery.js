import React from 'react';
import coolCat from  "../assets/cool-cat.jpg"
import fierceCat from "../assets/fierce-cat.jpg"
import romanticCat from "../assets/romantic-cat.jpg"
import relaxedCat from "../assets/relaxed-cat.jpg"
import ClickablePhoto from './ClickablePhoto';
import Login from "./ControlledForm";
export default function PhotoGallery(){


    return(
        <div className = "PhotoGallery">
            <div className = "card cat" >
                <ClickablePhoto img={coolCat} id="0" title = "Cool Cat" description= "He is a cool cat that will steal your girl with his cuteness."/>
            </div>
            <div className = "card cat">
                <ClickablePhoto img = {fierceCat} id = "1" title = "Fierce Cat" description= "Becareful, she might scratch you. Just look at those fierce eyes"/>
            </div>
            <div className = "card cat">
                <ClickablePhoto img = {romanticCat} id = "2" title = "Romantic Cat" description= "She get lots of kisses because she is cute and romantic."/>
            </div>
            <div className = "card cat">
                <ClickablePhoto img = {relaxedCat} id = "3" title = "Relaxed Cat" description= "Everyone wish they are as relaxed as this cat"/>
            </div>
            
        </div>
    )
}

