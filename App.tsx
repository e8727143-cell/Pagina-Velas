
import React from 'react';
import StickyTimer from './components/StickyTimer.tsx';
import Hero from './components/Hero.tsx';
import Stats from './components/Stats.tsx';
import Benefits from './components/Benefits.tsx';
import Gallery from './components/Gallery.tsx';
import Curriculum from './components/Curriculum.tsx';
import Testimonials from './components/Testimonials.tsx';
import Bonuses from './components/Bonuses.tsx';
import FreeServices from './components/FreeServices.tsx';
import Pricing from './components/Pricing.tsx';
import Guarantee from './components/Guarantee.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-pink-200 bg-[#FAF7F2]">
      <StickyTimer />
      <main className="flex-grow pt-[50px]">
        <Hero />
        <Stats />
        <Benefits />
        <Gallery />
        <Curriculum />
        <Testimonials />
        <Bonuses />
        <FreeServices />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
};

export default App;
