import { Fragment, React } from "react"; 
import { Routes, Route, Link } from 'react-router-dom';

import footerLogo from "./../images/little-lemon-logo-mono.jpg"

const Footer = () => { 
 
    return ( 
        <Fragment>
            <div className="greenBlock">
                <div className="sectionContainer">
                    <div id="footerSection">
                        <div id="footerLogoContainer">
                            <img src={footerLogo} height="70%" alt="Footer logo"/>
                        </div>

                        <div className="footerLinkContainer">
                            <p className="heading">Navigation</p>
                            <ul>
                                <Link to="/" className="footerLink">Home</Link>
                                <Link to="/about" className="footerLink">About</Link>
                                <Link to="/menu" className="footerLink">Menu</Link>
                                <Link to="/reservations" className="footerLink">Reservations</Link>
                                <Link to="/order-online" className="footerLink">Order Online</Link>
                                <Link to="/login" className="footerLink">Login</Link>
                            </ul>
                        </div>

                        <div className="footerLinkContainer">
                            <p className="heading">Contact</p>
                            <ul>
                                <li className="footerLink">25 High Street, Little Italy, Chicago, Illinois</li>
                                <li className="footerLink">773.878.1234</li>
                                <li className="footerLink">contact@little-lemon-chicago.com</li>
                            </ul>
                        </div>

                        <div className="footerLinkContainer">
                            <p className="heading">Social Media Links</p>
                            <ul>
                                <li className="footerLink"><a className="footerLink" href="https://www.facebook.com/" target="_blank">Facebook</a></li>
                                <li className="footerLink"><a className="footerLink" href="https://www.instagram.com/" target="_blank">Instagram</a></li>
                                <li className="footerLink"><a className="footerLink" href="https://www.youtube.com/hashtag/foodtube" target="_blank">#foodtube on YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ); 
}; 

export default Footer; 