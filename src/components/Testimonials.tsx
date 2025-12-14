import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I worked closely with Mohamed on AI project where he effectively deployed and compared multiple LLMs, offering clear insights into each. He also optimized AI service response times, even under limited hardware, showing strong technical skill and problem-solving ability.",
      name: "Hani Ali, PMP®, MBA",
      title: "Director of Software Engineering",
      initials: "HA"
    },
    {
      quote: "Strongly recommend Mohamed for his exceptional expertise in Robotics and Artificial Intelligence. His knack for developing impactful ML models, coupled with a collaborative spirit and a passion for innovation, consistently elevates project outcomes. A true asset to any team.",
      name: "Amr Shaarawy",
      title: "Data Scientist @ Palm | Researcher | Youngest Certified AI Professional in History",
      initials: "AS"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-2 sm:px-0">
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
