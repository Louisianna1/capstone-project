import React from "react"; 
import footerLogo from "./../images/little-lemon-logo-mono.jpg"

const Footer = () => { 
 
    return ( 
        <div class="greenBlock">
            <div class="sectionContainer">
                <div id="footer">
                    <img src={footerLogo} height="70%" alt="Footer logo"/>

                    <p class="heading">Doormat Navigation</p>
                    <p class="link"><a>Home</a></p>
                    <p class="link"><a>About</a></p>
                    <p class="link"><a>Menu</a></p>
                    <p class="link"><a>Reservations</a></p>
                    <p class="link"><a>Order Online</a></p>
                    <p class="link"><a>Login</a></p>

                    <p class="heading">Contact</p>
                    <p class="link"><a>[Address]</a></p>
                    <p class="link"><a>[Phone number]</a></p>
                    <p class="link"><a>[Email]</a></p>

                    <p class="heading">Social Media Links</p>
                    <p class="link"><a>Facebook</a></p>
                    <p class="link"><a>Instagram</a></p>
                    <p class="link"><a>FoodTube</a></p>
                </div>
            </div>
        </div>
    ); 
}; 

export default Footer; 