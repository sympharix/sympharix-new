import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ServicesSection from '../section/ServicesSection';
import IndustriesSection from '../section/IndustriesSection';
import InsightsSection from '../section/InsightsSection';
import GlobalPresenceSection from '../section/GlobalPresenceSection';

const Homepage = () => {
  return (
    <div className="bg-white">
      <HeroSlider />
      <ServicesSection />
      <IndustriesSection />
      <GlobalPresenceSection />
      <InsightsSection />
    </div>
  );
};

export default Homepage;