import { Fragment, React } from "react"; 
import { Link } from 'react-router-dom';
import Dish from './Dish';

import './../App.css';

const dishesData = [
    {
        Name: "Greek Salad",
        Image: "greek-salad.jpg",
        Price: "$8.99",
        Description: "A beautifully authentic Greek salad with bold flavours and super-fresh ingredients. Made the classic way with juicy tomatoes, olives and crumbly feta.",
    },
    {
        Name: "Lasagne al forno",
        Image: "lasagne_al_forno.jpg",
        Price: "$12.99",
        Description: "The perfect comfort food, this baked lasagne is made with tasty beef ragu, fresh lasagne sheets and the creamiest béchamel sauce, accompanied with seasonal vegetables. Buon appetito!",
    },
    {
        Name: "Bruschetta",
        Image: "bruschetta.jpg",
        Price: "$5.99",
        Description: "Traditional Italian toasted bread made with freshly baked sourdough, you won’t find a tastier way to start your meal. Choose from our range of tastebud-tingling toppings; tomato, mushroom, eggplant, broad bean or pumpkin.",
    },
    {
        Name: "Orange polenta cake",
        Image: "polenta-cake.jpg",
        Price: "$6.99",
        Description: "A delicious cake full of zingy flavours of orange, almond, vanilla and cardomom and finished with a generous drizzle of syrup. Finish your special dessert with your choice of vanilla bean ice cream, clotted cream or tangy lemon sorbet -  enjoy!",
    },
  ];

const HighlightsSection = () => { 
     
    return ( 
        <Fragment>
            <div className="sectionContainer">
                <div id="highlightsSection">
                    <div id="highlightsHeader">
                        <div>
                            <h1>Specials</h1>
                        </div>
                        <div>
                            <p className="button primaryButton"><Link to="/order-online">Online menu</Link></p>
                        </div>
                    </div>
                    <div id="highlightsCards">
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                            { dishesData.map(dish => <Dish key={dish.Name} {...dish} />) }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ); 
}; 

export default HighlightsSection; 