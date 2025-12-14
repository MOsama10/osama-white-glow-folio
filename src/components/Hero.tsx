import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail, Brain, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-10 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-primary font-medium mb-2">Hi, I'm Mohamed Osama</p>
            
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              AI & Data Scientist
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Turning Data into{' '}
              <span className="text-primary">Intelligent Solutions</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              I build advanced AI systems, from predictive models to LLM-powered applications, 
              helping businesses unlock the true potential of their data.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://raw.githubusercontent.com/MOsama10/osama-white-glow-folio/main/public/Mohamed_Osama_CV.pdf"
                  download
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/MOsama10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Github className="h-5 w-5 text-muted-foreground" />
              </a>
              <a 
                href="https://www.linkedin.com/in/-mohamedosama/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground" />
              </a>
              <a 
                href="mailto:m.osaammaa@gmail.com"
                className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Mail className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Image with floating badges */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in relative" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Main image container */}
              <div className="w-72 h-72 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-full"></div>
                <img 
                  src="/lovable-uploads/98c8f288-1970-47e8-a342-32cecc38e7d8.png"
                  alt="Mohamed Osama - AI & Data Scientist" 
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl relative z-10"
                />
              </div>
              
              {/* Floating Badge - Top Left */}
              <div className="absolute -left-4 top-8 md:left-0 md:top-12 bg-card border border-border rounded-xl p-3 shadow-lg animate-float z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">AI Solutions</p>
                    <p className="text-[10px] text-muted-foreground">Certified Expert</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge - Bottom Right */}
              <div className="absolute -right-4 bottom-16 md:right-0 md:bottom-20 bg-card border border-border rounded-xl p-3 shadow-lg animate-float-delayed z-20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Data Driven</p>
                    <p className="text-[10px] text-muted-foreground">Detailed Analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
