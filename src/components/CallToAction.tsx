import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          Whether you need a custom AI model, data analysis, or a full-stack automated solution, I'm here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="group"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
