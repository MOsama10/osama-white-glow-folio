
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'TechCorp AI',
      period: '2022 - Present',
      description: 'Lead the development of machine learning solutions for forecasting and anomaly detection. Improved prediction accuracy by 35%.'
    },
    {
      title: 'AI Engineer',
      company: 'DataSolutions Inc.',
      period: '2020 - 2022',
      description: 'Implemented NLP models for text classification and sentiment analysis. Deployed models in production environment using Docker and Kubernetes.'
    },
    {
      title: 'Machine Learning Intern',
      company: 'InnovateAI',
      period: '2019 - 2020',
      description: 'Assisted in developing computer vision algorithms for object detection. Conducted data preprocessing and feature engineering.'
    }
  ];

  const certifications = [
    {
      title: 'TensorFlow Developer Certification',
      issuer: 'Google',
      year: '2022'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'Coursera (Andrew Ng)',
      year: '2021'
    },
    {
      title: 'AWS Machine Learning Specialty',
      issuer: 'Amazon Web Services',
      year: '2021'
    },
    {
      title: 'Data Science Professional Certificate',
      issuer: 'IBM',
      year: '2020'
    }
  ];

  return (
    <section id="resume" className="bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <Download className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">Resume</h2>
        </div>
        
        <div className="flex justify-center mb-8 animate-slide-up">
          <Button size="lg" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </Button>
        </div>
        
        <Tabs defaultValue="experience" className="w-full animate-slide-up">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="experience">
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-medium">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-gray-700">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certifications">
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="card-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-heading font-medium mb-2">{cert.title}</h3>
                    <p className="text-gray-700">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
