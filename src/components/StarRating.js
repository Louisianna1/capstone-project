import { React, Fragment } from "react"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './../App.css';

const StarRating = ({ totalStars, starRating }) => { 

    let starsFragmentArray = [];

    for (let i = 1; i <= totalStars; i++) { 
         if (i <= starRating) 
            starsFragmentArray.push(<FontAwesomeIcon key={i} icon={faStar} className="starAwarded" />);
        else 
            starsFragmentArray.push(<FontAwesomeIcon key={i} icon={faStar} className="starShadow" />);
    }

    return (
        <Fragment>
            {starsFragmentArray}
        </Fragment>
    ); 
}; 

export default StarRating;