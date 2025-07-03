import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'LLM Freelancer',
      company: 'Digis Squared',
      location: 'Remote',
      period: 'Apr 2025 - Present',
      description: [
        'Deployed large language models in production using CPU-optimized techniques and GPU acceleration via CUDA.',
        'Fine-tuned open-source LLMs for tasks such as summarization, classification, and conversational AI.',
        'Built lightweight, locally deployable pipelines for environments with limited compute resources.'
      ]
    },
    {
      title: 'DEMI Coding Instructor',
      company: 'iSchool',
      location: 'Cairo & Giza, Egypt (Remote & On-site)',
      period: 'Jun 2024 - Present',
      description: [
        'Specialized in teaching programming and AI basics to children in both remote and on-site settings.',
        'Conducted engaging tutoring sessions and adapted teaching styles based on age and skill level.',
        'Focused on interactive learning using Pictoblox and real-world AI examples for young learners.'
      ]
    },
    {
      title: 'AI Engineer, Team Lead – LLM Team',
      company: 'Singularity',
      location: 'Cairo, Egypt',
      period: 'Jul 2024 - May 2025',
      description: [
        'Lead the LLM team, managing task delegation, tracking progress, and ensuring project timelines.',
        'Applied computer vision for object detection and segmentation in steel factory environments.',
        'Fine-tuned LLMs and implemented Retrieval-Augmented Generation (RAG) for advanced information retrieval.',
        'Built a digital twin using NVIDIA Omniverse for real-time production monitoring.'
      ]
    },
    {
      title: 'Junior Teaching Assistant',
      company: 'Nile University ITCS School',
      location: 'Giza, Egypt',
      period: 'Oct 2022 - Jun 2023',
      description: [
        'Assisted in Discrete Mathematics instruction for over 180 students.',
        'Led tutoring sessions and supported grading and academic inquiries.'
      ]
    }
  ];

  const achievements = [
    "3rd Place – IEEE Helwan RAS Auxillio 6.0 (Robotics Manufacturing 2023)",
    "2nd Place – IEEE Helwan RAS Auxillio 5.0 (Robotics Manufacturing 2022)",
    "Full Scholarship – Nile University ITCS School (2021)"
  ];

  const publications = [
    {
      title: "Osama, M., Mamdouh, D., Attia, M., Mohamed, N., Lotfy, A., Arafa, T., Rashed, E.A., & Khoriba, G. (2025). Advancements in Radiology Report Generation: A Comprehensive Analysis. Bioengineering, 12(7), Article 693.",
      url: "https://www.mdpi.com/2306-5354/12/7/693"
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
          <a
            href="https://raw.githubusercontent.com/MOsama10/osama-white-glow-folio/main/public/Mohamed_Osama_CV%20.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </a>
          {/* Note: If the raw URL still returns 404, verify the file name and path in the repository. If the issue persists, consider hosting the file elsewhere (e.g., Google Drive) and update the href with the new direct download link. */}
        </div>
        
        <Tabs defaultValue="experience" className="w-full animate-slide-up">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
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
                        <p className="text-gray-500">{exp.location}</p>
                      </div>
                      <span className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-medium mb-4">Achievements & Recognition</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-lg">{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-medium mb-4">Publications</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-3">
                  {publications.map((publication, index) => (
                    <li key={index} className="text-lg leading-relaxed">
                      <a 
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                      >
                        {publication.title}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
