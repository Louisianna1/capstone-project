import { Fragment, React } from "react"; 
import Dish from './Dish';

import './../App.css';

const dishesData = [
    {
        name: "Greek Salad",
        image: require('./../images/greek-salad.jpg'),
        price: "$8.99",
        description: "A beautifully authentic Greek salad with bold flavours and super-fresh ingredients. Made the classic way with juicy tomatoes, olives and crumbly feta.",
    },
    {
        name: "Lasagne al forno",
        image: require('./../images/lasagne_al_forno.jpg'),
        price: "$12.99",
        description: "The perfect comfort food, this baked lasagne is made with tasty beef ragu, fresh lasagne sheets and the creamiest béchamel sauce, accompanied with seasonal vegetables. Buon appetito!",
    },
    {
        name: "Bruschetta",
        image: require('./../images/bruschetta.jpg'),
        price: "$5.99",
        description: "Traditional Italian toasted bread made with freshly baked sourdough, you won’t find a tastier way to start your meal. Choose from our range of tastebud-tingling toppings; tomato, mushroom, eggplant, broad bean or pumpkin.",
    },
    {
        name: "Orange polenta cake",
        image: require('./../images/polenta-cake.jpg'),
        price: "$6.99",
        description: "A delicious cake full of zingy flavours of orange, almond, vanilla and cardomom and finished with a generous drizzle of syrup. Finish your special dessert with your choice of vanilla bean ice cream, clotted cream or tangy lemon sorbet -  enjoy!",
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
                            <p className="primaryButton">Online menu</p>
                        </div>
                    </div>
                    <div id="highlightsCards">
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                            { dishesData.map(dish => <Dish key={dish.name} {...dish} />) }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    ); 
}; 

export default HighlightsSection; 