
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const About = () => {
  const skills = [
    "Machine Learning", 
    "Deep Learning",
    "Natural Language Processing",
    "Python", 
    "TensorFlow/PyTorch", 
    "Data Analysis",
    "Big Data Processing", 
    "Neural Networks", 
    "Computer Vision",
    "Statistical Modeling"
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <User className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-heading font-medium mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I am a passionate Data Scientist and AI Engineer with extensive experience
              in developing machine learning models and AI solutions that drive business value.
            </p>
            <p className="text-gray-700 mb-4">
              My journey in the field of artificial intelligence began with a fascination
              for how data can be leveraged to solve complex problems and make intelligent
              predictions. Since then, I've worked on various projects ranging from natural
              language processing to computer vision applications.
            </p>
            <p className="text-gray-700">
              I'm constantly learning and experimenting with new technologies
              to stay at the forefront of the rapidly evolving field of AI.
            </p>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-6">
                  <h3 className="text-2xl font-heading font-medium mb-4">My Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white text-primary rounded-full text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">M.S. in Artificial Intelligence</h4>
                      <p className="text-sm text-gray-600">Stanford University, 2020-2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium">B.S. in Computer Science</h4>
                      <p className="text-sm text-gray-600">MIT, 2016-2020</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
