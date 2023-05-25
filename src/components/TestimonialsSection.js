import React from 'react';
import $ from 'jquery';
import { Carousel } from 'bootstrap';

import Review from './Review';


class TestimonialsSection extends React.Component {

    jQueryCode = () => {
        
        var multipleCardCarousel = document.querySelector(
            "#carouselExampleControls"
          );

        var cardsOnDisplay = 1; // Default for mobile

        if (window.matchMedia("(min-width: 768px)").matches)
            cardsOnDisplay = 2;
        if (window.matchMedia("(min-width: 1025px)").matches)
            cardsOnDisplay = 4;

        // Logic for multiple cards on display where scroll behaviour is required
        if (window.matchMedia("(min-width: 768px)").matches) {

            var carousel = new Carousel(multipleCardCarousel, {
              interval: false,
            });

            var carouselWidth = $(".carousel-inner")[0].scrollWidth;
            var cardWidth = $(".carousel-item").width();
            var scrollPosition = 0;
            $("#carouselExampleControls .carousel-control-next").on("click", function () {
              if (scrollPosition < (carouselWidth - (cardWidth * (cardsOnDisplay + 1)))) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                  { scrollLeft: scrollPosition },
                  10
                );
              }
            });
            $("#carouselExampleControls .carousel-control-prev").on("click", function () {
              if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                  { scrollLeft: scrollPosition },
                  10
                );
              }
            });
          } else {
            /* Commenting out sliding (automatic rotation of cards)
            $(multipleCardCarousel).addClass('slide');
            */
          }

    }

    componentDidUpdate() {
        this.jQueryCode();
    }

    render() {

        return ( 
            <div className="greyBlock">
                <div className="sectionContainer">
                    <div id="testimonialsSection">
                        <div>
                            <h1>Reviews</h1>
                        </div>

                        <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
                            <div className="carousel-inner">        
                                { this.props.reviewsFromAPI.map(review => <Review key={review.id} {...review} />) }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>                       
                </div>
            </div>
        ); 
    }

}; 

export default TestimonialsSection; 