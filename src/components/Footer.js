import React from "react"; 
import footerLogo from "./../images/little-lemon-logo-mono.jpg"

const Footer = () => { 
 
    return ( 
        <div class="greenBlock">
            <div class="sectionContainer">
                <div id="footer">
                    <div id="footerLogoContainer">
                        <img src={footerLogo} height="70%" alt="Footer logo"/>
                    </div>

                    <div class="footerLinkContainer">
                        <p class="heading">Doormat Navigation</p>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                            <li><a>Reservations</a></li>
                            <li><a>Order Online</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>

                    <div class="footerLinkContainer">
                        <p class="heading">Contact</p>
                        <ul>
                            <li><a>[Address]</a></li>
                            <li><a>[Phone number]</a></li>
                            <li><a>[Email]</a></li>
                        </ul>
                    </div>

                    <div class="footerLinkContainer">
                        <p class="heading">Social Media Links</p>
                        <ul>
                            <li><a>Facebook</a></li>
                            <li><a>Instagram</a></li>
                            <li><a>FoodTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ); 
}; 

export default Footer; 