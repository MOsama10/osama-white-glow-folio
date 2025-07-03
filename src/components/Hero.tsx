
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-[90vh] flex items-center pt-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Hi, I'm <span className="text-primary">Mohamed Osama</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Data Scientist & AI Engineer
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              A passionate and results-driven Data Scientist and AI Engineer with a strong foundation 
              in machine learning, AI, and data analysis. Graduated with a Bachelor's degree in 
              Computer Science and Artificial Intelligence from Nile University.
            </p>
            <div className="flex space-x-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full"></div>
              <img 
                src="/lovable-uploads/98c8f288-1970-47e8-a342-32cecc38e7d8.png"
                alt="Mohamed Osama" 
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
