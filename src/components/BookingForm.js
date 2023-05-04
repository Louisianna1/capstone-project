import { Fragment, useEffect, useState } from 'react';

const BookingForm = (props) =>  {
    const [bookingDate, setBookingDate] = useState(new Date().toString());
    const [bookingTime, setBookingTime] = useState("");
    const [bookingTotalGuests, setBookingTotalGuests] = useState("");
    const [bookingOccasion, setBookingOccasion] = useState("");

    
    const handleDateSelection = (dateStringValue) => {
      setBookingDate(dateStringValue);
      let selectedDate = new Date(dateStringValue);
      props.updateAvailableTimes({ date: selectedDate });
    }

    const handleSubmit = (event) => {
      let formData = 
        { bookingDate: {bookingDate}, bookingTime: {bookingTime}, bookingGuests: {bookingTotalGuests}, bookingOccasion: {bookingOccasion} };

      props.submitForm(formData);
    };



    return (
      <Fragment>
    
      <div className="sectionContainer">
  
          <fieldset>
            <form id="tableBookingForm" onSubmit={handleSubmit}>
              <div className="formFields">
                <div className="Field">
                  <label htmlFor="res-date">Choose date</label>
                  <input type="date" id="res-date" name="res-date" value={bookingDate} onChange={e => handleDateSelection(e.target.value) } />
                </div>
                
                <div className="Field">
                  <label htmlFor="res-time">Choose time</label>
                  <select id="res-time" name="res-time" value={bookingTime} onChange={e => setBookingTime(e.target.value) }>
                    {props.availableTimes.availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
                  </select>
                </div>
              </div>
  
              <div className="formFields">
                <div className="Field">
                  <label htmlFor="guests">Number of guests</label>
                  <input type="number" id="guests" name="guests" placeholder="1" min="1" max="10" value={bookingTotalGuests} onChange={e => setBookingTotalGuests(e.target.value) } />
                </div>  
                
                <div className="Field">
                  <label htmlFor="occasion">Occasion</label>
                  <select id="occasion" name="occasion" value={bookingOccasion} onChange={e => setBookingOccasion(e.target.value) }>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                  </select>
                </div>
  
                <div id="formSubmissionDiv">
                  <input type="submit" className="primaryButton" value="Book table" />
                </div>
              </div>            
            </form>
          </fieldset>
      </div>
  
      </Fragment>
    );
  }
  
  export default BookingForm;
  