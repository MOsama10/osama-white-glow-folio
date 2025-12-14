import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'XScene: Automated Radiology Report Generation',
      description: 'Generating clinically accurate radiology reports from chest X-rays using scene graph-enhanced LLMs. Built a 3-stage AI pipeline with object detection, relationship extraction, and report generation.',
      tags: ['Deformable DETR', 'Mistral-7B', 'PyTorch', 'FastAPI'],
      github: 'https://github.com/MOsama10/radiology-report-generation',
      featured: true
    },
    {
      title: 'Katana NLP-to-SQL Platform',
      description: 'Fully offline NLP-to-SQL system for telecom analytics, enabling natural language database queries with sub-second response times.',
      tags: ['FastAPI', 'PostgreSQL', 'SQLCoder', 'llama.cpp'],
      github: 'https://github.com/MOsama10/katana-nlp-to-sql'
    },
    {
      title: 'Enterprise RAG System',
      description: 'Local Retrieval-Augmented Generation system for enterprise-grade question answering with semantic search and confidence scoring.',
      tags: ['RAG', 'PyTorch', 'Hugging Face', 'FastAPI'],
      github: 'https://github.com/MOsama10/RAG_Project'
    },
    {
      title: 'Speech-to-Speech Translation',
      description: 'End-to-end speech translation pipeline using Whisper for ASR and XTTS for TTS with real-time processing.',
      tags: ['XTTS', 'Whisper', 'FastAPI', 'Hugging Face'],
      github: 'https://github.com/MOsama10/Speech-to-Speech'
    },
    {
      title: 'Hieroglyphic Translation',
      description: 'CV-NLP pipeline that detects and translates ancient Egyptian hieroglyphics into English using transformer-based models.',
      tags: ['Transformers', 'Vision Models', 'Hugging Face'],
      github: 'https://github.com/MOsama10/Hieroglyphic-translation-to-English'
    },
    {
      title: 'AgriCash Avatar System',
      description: 'Interactive avatar guiding users through the AgriCash app using XTTS, CUDA, and advanced RAG for production logs.',
      tags: ['LLMs', 'CUDA', 'Advanced RAG', 'XTTS'],
      github: 'https://github.com/MOsama10/production-to-instruction'
    }
  ];

  return (
    <section id="projects" className="bg-muted/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-4">
          <Briefcase className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title mb-0">Featured Projects</h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent AI and Data Science work
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
