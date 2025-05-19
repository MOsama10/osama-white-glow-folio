
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'RAG Project',
      description: 'Developed a local Retrieval-Augmented Generation system for enterprise-grade QA with schema-aware logic and local deployment using FastAPI.',
      image: '/placeholder.svg',
      tags: ['RAG', 'PyTorch', 'Hugging Face', 'FastAPI'],
      github: 'https://github.com/MOsama10/RAG_Project'
    },
    {
      title: 'Katana NLP-to-SQL Platform',
      description: 'Built a fully offline NLP-to-SQL system for Katana telecom analytics. Converts English queries into SQL using domain-aware logic and dynamic schema handling.',
      image: '/placeholder.svg',
      tags: ['FastAPI', 'PostgreSQL', 'SQLCoder', 'llama.cpp'],
      github: 'https://github.com/MOsama10/katana-nlp-to-sql'
    },
    {
      title: 'Hieroglyphic Translation',
      description: 'Designed a CV-NLP pipeline that detects and translates ancient Egyptian hieroglyphics into English using transformer-based models.',
      image: '/placeholder.svg',
      tags: ['Python', 'Transformers', 'Vision Models', 'Hugging Face'],
      github: 'https://github.com/MOsama10/Hieroglyphic-translation-to-English'
    },
    {
      title: 'Production to Instruction',
      description: 'Transformed raw production logs into human-readable instructions using large language models and prompt engineering for enhanced operational clarity.',
      image: '/placeholder.svg',
      tags: ['PyTorch', 'LLMs', 'NLP', 'Prompt Engineering'],
      github: 'https://github.com/MOsama10/production-to-instruction'
    },
    {
      title: 'Speech-to-Speech Translation',
      description: 'Built an end-to-end speech-to-speech translation pipeline using Whisper for ASR and XTTS for TTS with FastAPI for local deployment.',
      image: '/placeholder.svg',
      tags: ['XTTS', 'PyTorch', 'Whisper', 'FastAPI'],
      github: 'https://github.com/MOsama10/Speech-to-Speech'
    },
    {
      title: 'AgriCash Avatar Guide',
      description: 'Built an interactive avatar guiding users through the AgriCash app using XTTS, CUDA, and advanced RAG technologies.',
      image: '/placeholder.svg',
      tags: ['PyTorch', 'CUDA', 'Advanced RAG', 'XTTS'],
      github: 'https://github.com/MOsama10'
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
              <div className="h-48 overflow-hidden bg-primary/5">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-3xl font-bold text-primary/30">{project.title.split(' ')[0]}</h3>
                </div>
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
