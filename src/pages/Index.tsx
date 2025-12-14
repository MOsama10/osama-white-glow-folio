import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Stats from '@/components/Stats';
import Resume from '@/components/Resume';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Expertise />
      <Projects />
      <Stats />
      <Resume />
      <Certifications />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
