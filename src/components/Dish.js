import { React } from "react"; 

import bikeIcon from "../images/bike2.jpg";

import './../App.css';

const Dish = ({ Name, Image, Price, Description }) => { 

    let relativeImage = require("./../images/" + Image);
    return (
        <div className="card">
            <img className="card-img-top" src={relativeImage} alt={Name} />
            <div className="card-body">
                <h5 className="card-title">{Name}</h5>
                <span className="card-subtitle">{Price}</span>
                <p className="card-text">{Description}</p>
            </div>
            <div className="card-footer">
                <h6 className="card-footer-text">Order delivery</h6>
                <img src={bikeIcon} alt="delivery bike" className="deliveryIcon" />
            </div>
        </div> 
    ); 
}; 

export default Dish;
