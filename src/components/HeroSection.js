import React from "react"; 
import { Link } from 'react-router-dom';

import heroImage from "../images/restaurantfood2.jpg";

import './../App.css';

const HeroSection = () => { 
 
    return ( 
        <div className="greenBlock">
            <div className="sectionContainer">
                <div id="heroSection">
                    <div id="heroText">
                        <h1 className="yellow">Little Lemon</h1>
                        <h2 className="white">Chicago</h2>
                        <p className="white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <Link className="hyperinkForButton" to="/reservations"><p className="button primaryButton">Reserve a table</p></Link>
                    </div>
                    <div id="heroImageContainer">
                        <img src={heroImage} alt="Bruschettas" className="heroImage" />
                    </div>
                </div>                
            </div>
        </div>
    ); 
}; 

export default HeroSection; 