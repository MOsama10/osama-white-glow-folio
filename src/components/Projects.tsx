
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'XScene: Automated Radiology Report Generation',
      description: 'Graduation project generating clinically accurate radiology reports from chest X-rays using scene graph-enhanced LLMs. Developed 3-stage AI pipeline: object detection (Deformable DETR), relationship extraction (EGTR), and report generation (Mistral-7B-Instruct). Built a web interface with visual scene graphs for radiologist workflow integration.',
      image: '/placeholder.svg',
      tags: ['Deformable DETR', 'EGTR', 'Mistral-7B', 'PyTorch', 'CUDA', 'FastAPI', 'LoRA'],
      github: 'https://github.com/MOsama10/radiology-report-generation'
    },
    {
      title: 'Katana NLP-to-SQL Platform',
      description: 'Built fully offline NLP-to-SQL system for Katana telecom analytics, enabling natural language database queries. Implemented domain-aware logic and dynamic schema handling for complex telecom data structures, processing daily queries with sub-second response times.',
      image: '/placeholder.svg',
      tags: ['FastAPI', 'PostgreSQL', 'SQLCoder', 'llama.cpp'],
      github: 'https://github.com/MOsama10/katana-nlp-to-sql'
    },
    {
      title: 'Enterprise RAG System',
      description: 'Developed local Retrieval-Augmented Generation system for enterprise-grade question answering with schema-aware logic. Built scalable vector database indexing for documents with semantic search capabilities. Implemented context-aware response generation with source attribution and confidence scoring.',
      image: '/placeholder.svg',
      tags: ['RAG', 'PyTorch', 'Hugging Face', 'FastAPI'],
      github: 'https://github.com/MOsama10/RAG_Project'
    },
    {
      title: 'PRISMA-Based MARL Review Paper Companion',
      description: 'Developed companion codebase for systematic review paper on Multi-Agent Reinforcement Learning (MARL) based on PRISMA guidelines. Includes data extraction, visual analysis, and reproducible insights for MARL literature trends. Created automated data extraction and visualization tools for research trend analysis.',
      image: '/placeholder.svg',
      tags: ['Python', 'Jupyter', 'SciPy', 'Matplotlib', 'Pandas', 'Zotero'],
      github: 'https://github.com/MOsama10/prisma-marl-review'
    },
    {
      title: 'Speech-to-Speech Translation System',
      description: 'Built end-to-end speech-to-speech translation pipeline using Whisper for ASR and XTTS for TTS. Integrated with FastAPI for local deployment, enabling seamless voice translation across multiple languages. Achieved real-time processing with 2-second average latency for voice translation tasks.',
      image: '/placeholder.svg',
      tags: ['XTTS', 'PyTorch', 'Whisper', 'FastAPI', 'Hugging Face'],
      github: 'https://github.com/MOsama10/Speech-to-Speech'
    },
    {
      title: 'Hieroglyphic Translation to English',
      description: 'Designed CV-NLP pipeline that detects and translates ancient Egyptian hieroglyphics into English using transformer-based models. Combined computer vision for hieroglyph detection with transformer-based sequence-to-sequence translation.',
      image: '/placeholder.svg',
      tags: ['Python', 'Transformers', 'Vision Models', 'Hugging Face'],
      github: 'https://github.com/MOsama10/Hieroglyphic-translation-to-English'
    },
    {
      title: 'Production to Instruction & AgriCash Avatar',
      description: 'Transformed raw production logs into human-readable instructions using large language models and prompt engineering for enhanced operational clarity. Built interactive avatar guiding users through AgriCash app using XTTS, CUDA, and advanced RAG.',
      image: '/placeholder.svg',
      tags: ['PyTorch', 'LLMs', 'CUDA', 'Advanced RAG', 'FastAPI', 'XTTS'],
      github: 'https://github.com/MOsama10/production-to-instruction'
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <Briefcase className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">My Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden card-shadow animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-32 overflow-hidden bg-primary/5">
                <div className="flex items-center justify-center h-full">
                  <h3 className="text-2xl font-bold text-primary/30">{project.title.split(' ')[0]}</h3>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
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
