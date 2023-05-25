import { Fragment, React } from "react"; 
import { Link } from 'react-router-dom';

import logo from "./../images/Logo.svg";

import './../App.css';

const Header = () => { 
 
    return ( 
        <div className="sectionContainer">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <Link to="/"><img src={logo} alt="Little Lemon Logo"/></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
                            <li className="nav-item"><Link to="/reservations" className="nav-link">Reservations</Link></li>
                            <li className="nav-item"><Link to="/order-online" className="nav-link">Order Online</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Logins</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    ); 
}; 

export default Header; 