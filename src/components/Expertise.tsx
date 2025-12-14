import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BarChart3, Database, Cpu, MessageSquare, Cog } from 'lucide-react';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Insights & Visualization',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Statistical Analysis & Mining',
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Predictive Models & Algorithms',
    },
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Neural Networks & TF/PyTorch',
    },
    {
      icon: MessageSquare,
      title: 'NLP & LLMs',
      description: 'Text Analysis & Large Language Models',
    },
    {
      icon: Cog,
      title: 'AI Systems',
      description: 'End-to-End AI Solutions',
    },
  ];

  return (
    <section id="expertise" className="bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">My Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technical skills and areas of specialization
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{area.title}</h3>
                <p className="text-xs text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
