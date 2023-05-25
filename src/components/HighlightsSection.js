import { Fragment, React, useEffect, useState } from "react"; 
import { Link } from 'react-router-dom';
import Dish from './Dish';

import './../App.css';

const HighlightsSection = () => { 

    const [specialsFromAPI, setSpecialsFromAPI] = useState([]);

    function fetchSpecials() {
        fetch("https://hrnrel7ri5llv3thvyy7sn24sa0myyzw.lambda-url.eu-west-2.on.aws/api/Specials/get")
        .then((response) => response.json())
        .then((data) => { setSpecialsFromAPI(data); });
      };
    
      useEffect(() => {
        fetchSpecials();
      }, []); 
     
    return ( 
        <Fragment>
            <div className="sectionContainer">
                <div id="highlightsSection">
                    <div id="highlightsHeader">
                        <div>
                            <h1>Specials</h1>
                        </div>
                        <div>
                            <Link className="hyperinkForButton" to="/order-online"><p className="button primaryButton">Online menu</p></Link>
                        </div>
                    </div>
                    <div id="highlightsCards">
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                            { specialsFromAPI.map(dish => <Dish key={dish.name} {...dish} />) }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ); 
}; 

export default HighlightsSection; 