import { Fragment, React } from "react"; 

import ownersImg1 from "../images/Mario and Adrian A.jpg";
import ownersImg2 from "../images/Mario and Adrian B.jpg";

const AboutSection = () => { 
 
    return ( 
        <Fragment>
            <div className="sectionContainer">
                <div id="aboutSection">
                    <h1 className="yellow">Little Lemon</h1>
                    <h2>Chicago</h2>
                    <div id="aboutMainContent">
                        <div>
                            <p>The Little Lemon restaurant first opened its doors in 1995. It is owned and run by Adrian and Mario Taremi, who are both brothers and were born and grew up in Sicily before moving with their family to Chicago in 1992. Both brothers have a passion for authentic Italian food made from only the freshest, tastiest Mediterranean ingredients, inspired by their grandmothers family recipes.</p>
                            <p>Today Little Lemon is a renowned Italian restaurant in Chicago, frequented by celebrities and has won many awards for their Michelin star dishes. Despite their huge success, the restaurant remains a family-friendly, warm eatery that pays homage to Adrian and Mario’s Italian roots.</p>
                            <p>We welcome you to visit with your family and friends for a warm welcome, a cosy ambience and delicious food!</p>
                        </div>
                        <div className="ownersImagesDiv">
                            <img src={ownersImg1} alt="Restaurant owners 1" className="ownersImage1" />
                            <img src={ownersImg2} alt="Restaurant owners 2" className="ownersImage2" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ); 
}; 

export default AboutSection; 