import { Fragment } from 'react';

import spaghettiBannerImage from "../images/Spaghetti.png";

import BookingForm from './BookingForm';


const BookingPage = (props) =>  {

  return (
    <Fragment>

    <div className="greenBlock">
      <div className="sectionContainer">
        <div id="reservationsBanner">
          <div id="reservationsBannerText">
              <h1 className="yellow">Reservations</h1>
              <h2 className="white">Come dine with us!</h2>
              <p className="white">Fill in your details below to make your reservation.</p>
          </div>
          <div id="reservationsBannerImageContainer">
              <img src={spaghettiBannerImage} alt="Italian dishes collage" className="reservationsBannerImage" />
          </div>
        </div>    
      </div>
    </div>

    <BookingForm availableTimes={props.availableTimes} updateAvailableTimes={props.updateAvailableTimes} submitForm={props.submitForm} />

    </Fragment>
  );
}

export default BookingPage;
