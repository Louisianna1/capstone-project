import { Fragment } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <main>
        <Header />
        <HeroSection />
        <HighlightsSection />
        <TestimonialsSection />
        <AboutSection />
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
