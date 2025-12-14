import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mohamed demonstrated exceptional skills in AI and Machine Learning during our collaboration. His dedication to understanding complex concepts and applying them to real-world problems is remarkable. His work on LLM solutions showed technical depth and practical application skills.",
      name: "Dr. Ghada Khoriba",
      title: "Associate Professor, Nile University",
      initials: "GK"
    },
    {
      quote: "Working with Mohamed on AI projects was a great experience. He has a strong grasp of NLP and computer vision concepts, and his ability to deliver production-ready solutions under tight deadlines is impressive. A dedicated professional who always goes the extra mile.",
      name: "Team Lead",
      title: "Singularity AI Team",
      initials: "ST"
    },
    {
      quote: "Mohamed's teaching abilities are outstanding. He has a unique talent for breaking down complex AI concepts into understandable lessons. His students consistently show improvement and develop a genuine interest in the field.",
      name: "NTI Supervisor",
      title: "National Telecommunications Institute",
      initials: "NS"
    }
  ];

  return (
    <section id="testimonials" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from colleagues and mentors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
