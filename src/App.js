import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import ReservationsPage from './components/ReservationsPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import LoginPage from './components/LoginPage';

import './App.css';

function App() {
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
            <Route path="/reservations" element={<ReservationsPage />}></Route>
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

export default App;
