import { Fragment } from 'react';
import HeroSection from './HeroSection';
import HighlightsSection from './HighlightsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';

const HomePage = () =>  {
  return (
    <Fragment>
        <HeroSection />
        <HighlightsSection />
        <TestimonialsSection />
        <AboutSection />
    </Fragment>
  );
}

export default HomePage;
