import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhatWeDo />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
