import { React } from "react"; 

import bikeIcon from "../images/bike2.jpg";

import './../App.css';

const Dish = ({ name, image, price, description }) => { 
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <span className="card-subtitle">{price}</span>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <h6 className="card-footer-text">Order delivery</h6>
                <img src={bikeIcon} alt="delivery bike" className="deliveryIcon" />
            </div>
        </div> 
    ); 
}; 

export default Dish;
