import React from 'react';

import StarRating from "./StarRating";

import './../App.css';


const Review = (props) => {

    let carouselItemClass = (props.id === 1 ? "carousel-item active" : "carousel-item");

    let relativeProfileImage = require("./../images/" + props.profileImage);

    return (
        <div className={carouselItemClass}>
            <div className="card">
                <div className="card-header">                
                    <StarRating totalStars={5} starRating={props.rating} />
                    <h5 className="card-title block">{props.title}</h5>
                </div>
                <div className="card-body">
                    <img src={relativeProfileImage} alt="profile" className="profileImage" />
                    <span className="card-profile-name">{props.reviewerName}</span>
                    <p className="card-text">{props.reviewText}</p>
                </div>
            </div> 
        </div>
    ); 
}

export default Review;
