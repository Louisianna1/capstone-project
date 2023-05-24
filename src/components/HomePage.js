import { Fragment } from 'react';
import HeroSection from './HeroSection';
import HighlightsSection from './HighlightsSection';
import TestimonialsSection from './TestimonialsSection';
import AboutSection from './AboutSection';

const HomePage = (props) =>  {
  return (
    <Fragment>
        <HeroSection />
        <HighlightsSection />
        <TestimonialsSection reviewsFromAPI={props.reviewsFromAPI} />
        <AboutSection />
    </Fragment>
  );
}

export default HomePage;
