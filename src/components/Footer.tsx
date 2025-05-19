
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/mohamed-osama' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/mohamed-osama' },
    { name: 'Twitter', url: 'https://twitter.com/mohamed_osama' }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-heading font-bold">Mohamed Osama</h3>
            <p className="text-primary-foreground/70 mt-1">Data Scientist & AI Engineer</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Button 
                key={link.name} 
                variant="ghost" 
                size="sm"
                className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-white/10" 
                asChild
              >
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {year} Mohamed Osama. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">About</a>
              <a href="#projects" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Projects</a>
              <a href="#resume" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Resume</a>
              <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
