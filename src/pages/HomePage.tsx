import React from 'react';
import Hero from '../components/Hero';
import ResearchAreas from '../components/ResearchAreas';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <ResearchAreas />
    </main>
  );
};

export default HomePage;