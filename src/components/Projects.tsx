
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sentiment Analysis Model',
      description: 'Built a deep learning model to analyze customer feedback sentiment with 95% accuracy using BERT and PyTorch.',
      image: '/placeholder.svg',
      tags: ['NLP', 'PyTorch', 'BERT'],
      github: 'https://github.com/mohamed-osama/sentiment-analysis'
    },
    {
      title: 'Object Detection System',
      description: 'Developed a real-time object detection system using YOLOv5 for surveillance applications.',
      image: '/placeholder.svg',
      tags: ['Computer Vision', 'Python', 'YOLOv5'],
      github: 'https://github.com/mohamed-osama/object-detection'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard using React and D3.js to visualize complex datasets for business insights.',
      image: '/placeholder.svg',
      tags: ['React', 'D3.js', 'Data Visualization'],
      github: 'https://github.com/mohamed-osama/data-dashboard'
    },
    {
      title: 'Recommendation Engine',
      description: 'Built a content-based recommendation system for a streaming platform using collaborative filtering.',
      image: '/placeholder.svg',
      tags: ['Machine Learning', 'Python', 'Recommender Systems'],
      github: 'https://github.com/mohamed-osama/recommender'
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <Briefcase className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">My Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-shadow animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
