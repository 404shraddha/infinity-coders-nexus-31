import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import CodeAnimation from './CodeAnimation';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroBg,
      title: "Infinity Coders Club",
      subtitle: "Playground for your developer ambitions"
    },
    {
      image: heroBg, // For now using same image, can be replaced with community photos
      title: "Join Our Community",
      subtitle: "Connect with passionate developers and innovators"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {index === 0 ? (
              // First slide: Code animation background
              <div className="w-full h-full bg-gradient-hero">
                <CodeAnimation />
              </div>
            ) : (
              // Second slide: Community photo
              <img
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 animate-slide-up">
          <span className="glow-text">
            {slides[currentSlide].title}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          {slides[currentSlide].subtitle}
        </p>
        <button className="btn-hero animate-pulse-glow hover:bg-gradient-accent">
          Join Us
        </button>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-secondary/50 hover:bg-secondary rounded-full transition-all duration-300 hover:shadow-[var(--shadow-neon)]"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-secondary/50 hover:bg-secondary rounded-full transition-all duration-300 hover:shadow-[var(--shadow-neon)]"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary shadow-[var(--shadow-neon)]'
                : 'bg-muted hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;