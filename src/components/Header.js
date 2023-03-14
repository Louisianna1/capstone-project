import React from "react"; 
import logo from "./../images/Logo.svg";

const Header = () => { 
 
    return ( 
        <div class="sectionContainer">
            <div id="header">
                <img src={logo} alt="Little Lemon Logo"/>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    ); 
}; 

export default Header; 