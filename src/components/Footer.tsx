import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          {/* Logo & Title */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">MO</span>
              </div>
              <h3 className="text-xl font-heading font-bold">Mohamed Osama</h3>
            </div>
            <p className="text-primary-foreground/70 text-sm">AI & Data Scientist</p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/MOsama10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/-mohamedosama/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:m.osaammaa@gmail.com"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {year} Mohamed Osama. All rights reserved.
          </p>
          
          <nav className="flex items-center gap-6">
            <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Projects</a>
            <a href="#resume" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Resume</a>
            <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</a>
          </nav>
          
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
