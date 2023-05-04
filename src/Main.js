import { Fragment, useState, useReducer, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import OrderOnlinePage from './components/OrderOnlinePage';
import LoginPage from './components/LoginPage';

import './App.css';

function Main() {

  const [availableTimesFromAPI, setAvailableTimesFromAPI] = useState({ availableTimes: [] });

  function seededRandom(seed) {
      var m = 2**35 - 31;
      var a = 185852;
      var s = seed % m;
      return function () {
          return (s = s * a % m) / m;
      };
  }

  function fetchAPI(date) {
      console.log("fetchAPI called with date " + date);
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }

      return result;
  };

  function submitAPI(formData) {
      return true;
  };

  function initializeTimes () {
    const newTimesObject = availableTimesFromAPI;
    newTimesObject.availableTimes = fetchAPI(new Date());
    setAvailableTimesFromAPI(newTimesObject);
  }

  useEffect(() => {
    initializeTimes();
  }, []); 

  const updateTimes = (availableTimes, selectedDate) => {
    const newTimesObject = availableTimesFromAPI;
    newTimesObject.availableTimes = fetchAPI(selectedDate.date);
    setAvailableTimesFromAPI(newTimesObject);
    return newTimesObject;
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, availableTimesFromAPI);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const successfulSubmission = submitAPI(formData);

    if (successfulSubmission) {
      navigate("/confirmed-booking");
    }
  }

  return (
    <Fragment>
      <header>
        <Header />
      </header>

      <main>        
          <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} updateAvailableTimes={dispatch} submitForm={submitForm}  />}></Route>
            <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
            <Route path="/order-online" element={<OrderOnlinePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
      </main>

      <footer>
      <Footer />
      </footer>
    </Fragment>
  );
}

export default Main;
