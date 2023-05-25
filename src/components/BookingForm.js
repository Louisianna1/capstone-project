import { Fragment, useEffect, useState } from 'react';

const BookingForm = (props) =>  {

    const selectPlaceholder = "- Select -";

    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState(selectPlaceholder);
    const [bookingTotalGuests, setBookingTotalGuests] = useState(1);
    const [bookingOccasion, setBookingOccasion] = useState(selectPlaceholder);

    
    const handleDateSelection = (dateStringValue) => {
      let selectedDate = new Date(dateStringValue);
      props.updateAvailableTimes({ date: selectedDate });
    }

    const validateFormFields = () => {
      return (bookingDate && 
              bookingTime != selectPlaceholder && 
              bookingTotalGuests && 
              bookingOccasion != selectPlaceholder);
    }

    const handleSubmit = (event) => {
      let formData = 
        { bookingDate: {bookingDate}, bookingTime: {bookingTime}, bookingGuests: {bookingTotalGuests}, bookingOccasion: {bookingOccasion} };

      props.submitForm(formData);
    };

    const handleTotalGuestsKeyDown = (event) => {
      // Do not respond to any keyboard button clicks other than up and down
      event.preventDefault();
    }

    const tomorrow = () => {
      // Get today's date
      let today = new Date();
      // Change the date by adding 1 to it (today + 1 = tomorrow)
      today.setDate(today.getDate() + 1);
      // return yyyy-mm-dd format
      let tomorrow = today.toISOString().split('T')[0];

      return tomorrow;
    };  


    return (
      <Fragment>
    
      <div className="sectionContainer">
  
          <fieldset>
            <form id="tableBookingForm" onSubmit={handleSubmit}>
              <div className="formFields">
                <div className="Field">
                  <label htmlFor="res-date">Choose date</label>
                  <input type="date" id="res-date" name="res-date" aria-label="Booking date" required min={tomorrow()} value={bookingDate} 
                    onChange={e => { setBookingDate(e.target.value); handleDateSelection(e.target.value); } } />
                </div>
                
                <div className="Field">
                  <label htmlFor="res-time">Choose time</label>
                  <select id="res-time" name="res-time" aria-label="Booking time" required value={bookingTime} onChange={e => setBookingTime(e.target.value) }>
                    <option key="placeholder" value={selectPlaceholder}>{selectPlaceholder}</option>
                    {props.availableTimes.availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                  </select>
                </div>
              </div>
  
              <div className="formFields">
                <div className="Field">
                  <label htmlFor="guests">Number of guests</label>
                  <input type="number" id="guests" name="guests" aria-label="Number of guests" required placeholder="1" min="1" max="10" value={bookingTotalGuests} onKeyDown={(e) => handleTotalGuestsKeyDown(e)} onChange={e => setBookingTotalGuests(e.target.value) } />
                </div>  
                
                <div className="Field">
                  <label htmlFor="occasion">Occasion</label>
                  <select id="occasion" name="occasion" aria-label="Occasion" required value={bookingOccasion} onChange={e => setBookingOccasion(e.target.value) }>
                    <option key="placeholder" value={selectPlaceholder}>{selectPlaceholder}</option>                    
                    <option>Birthday</option>
                    <option>Anniversary</option>
                  </select>
                </div>
  
                <div id="formSubmissionDiv">
                  <input id="submissionButton" data-testid="submissionButton" name="submissionButton" aria-label="submission button" type="submit" disabled={!validateFormFields()} className={!validateFormFields() ? "button disabledButton" : "button primaryButton"} value="Book table" />
                </div>
              </div>            
            </form>
          </fieldset>
      </div>
  
      </Fragment>
    );
  }
  
  export default BookingForm;
  