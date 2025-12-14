import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (DeepLearning.AI)",
      date: "2023",
    },
    {
      title: "Machine Learning",
      issuer: "Stanford Online (Coursera)",
      date: "2022",
    },
    {
      title: "Natural Language Processing",
      issuer: "Hugging Face",
      date: "2024",
    },
    {
      title: "CUDA Programming",
      issuer: "NVIDIA",
      date: "2024",
    },
  ];

  return (
    <section id="certifications" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <Award className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="font-heading font-medium text-sm mb-1">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
