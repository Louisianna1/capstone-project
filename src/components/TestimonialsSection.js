import React from "react"; 
import $ from 'jquery';
import { Carousel } from 'bootstrap';

import Review from './Review';

const reviewsData = [
    {
        id: 1,
        rating: 5,
        title: "Authentic Italian!",
        profileImage: require('./../images/profile-male-1.jpg'),
        reviewerName: "Billy Lockwood",
        reviewText: "The best Italian restaurant in Chicago.",
    },
    {
        id: 2,
        rating: 4,
        title: "A must visit",
        profileImage: require('./../images/profile-female-1.jpg'),
        reviewerName: "Hayley Heart",
        reviewText: "We stumbled on this restaurant by lucky chance and have visited many times since.",
    },
    {
        id: 3,
        rating: 4,
        title: "Fab 50th",
        profileImage: require('./../images/profile-female-2.jpg'),
        reviewerName: "Coral Singh",
        reviewText: "We booked the function room for my mum's 50th birthday and everything was superb.",
    },
    {
        id: 4,
        rating: 5,
        title: "Hidden gem!",
        profileImage: require('./../images/profile-male-2.jpg'),
        reviewerName: "Peter Ross",
        reviewText: "A small, unimposing building on a side street but undoubtedly the finest restaurant in Chicago!",
    },
    {
        id: 5,
        rating: 5,
        title: "Nonna's best secret!",
        profileImage: require('./../images/profile-female-3.jpg'),
        reviewerName: "Sofia Coppola",
        reviewText: "Having lived in Italy most of my life, this place reminds me of my nonna's best dishes! Love this place!",
    },
    {
        id: 6,
        rating: 4,
        title: "Superba!",
        profileImage: require('./../images/profile-male-3.jpg'),
        reviewerName: "George Fonti",
        reviewText: "This place is perfect in every way - excellent food, ambience and service!",
    },
    {
        id: 7,
        rating: 5,
        title: "The best tiramisu in town",
        profileImage: require('./../images/profile-female-4.jpg'),
        reviewerName: "Louise Yufit",
        reviewText: "Simply the tastiest Italian food, especially the tiramisu! Yum.",
    },
    {
        id: 8,
        rating: 5,
        title: "Buon appetito!",
        profileImage: require('./../images/profile-male-4.jpg'),
        reviewerName: "Cedric Domique",
        reviewText: "Perfection with every visit, enjoy!",
    },
  ];


class TestimonialsSection extends React.Component {

    constructor(props) {
        super(props);
    }

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

    componentDidMount() {
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
                                { reviewsData.map(review => <Review key={review.id} {...review} />) }
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