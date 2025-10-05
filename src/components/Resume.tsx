import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Co-Founder & CTO',
      company: 'Vionex Digital Solutions',
      location: 'Cairo, Egypt (Hybrid)',
      period: 'Jul 2025 - Present',
      description: [
        'Spearheaded AI, ML, and computer vision initiatives at Vionex Digital Solutions, enhancing technology solutions for various sectors.',
        'Led a dynamic tech team to develop scalable solutions tailored for e-commerce, healthcare, and education industries.',
        'Aligned technology strategies with business objectives to drive digital transformation across Egypt, Africa, and the Middle East.'
      ]
    },
    {
      title: 'Technical Lead, AI Department',
      company: 'Retailo',
      location: 'Cairo, Egypt (Hybrid)',
      period: 'Jul 2025 - Present',
      description: [
        'Led AI initiatives to address real-world challenges in Egypt and MENA through innovative PoC development.',
        'Managed cross-functional AI teams, ensuring alignment of strategy with business objectives.',
        'Drove advancements in Natural Language Processing (NLP), Computer Vision (CV), and Large Language Model (LLM) solutions in retail and logistics.'
      ]
    },
    {
      title: 'AI Instructor',
      company: 'National Telecommunications Institute (NTI)',
      location: 'Cairo, Egypt',
      period: 'Aug 2025 - Present',
      description: [
        'Deliver specialized training in Artificial Intelligence, including Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Large Language Models (LLMs).',
        'Design and conduct practical, hands-on sessions to equip learners with both theoretical understanding and applied AI skills.'
      ]
    },
    {
      title: 'LLM Freelancer',
      company: 'Digis Squared',
      location: 'Remote',
      period: 'Apr 2025 - Jul 2025',
      description: [
        'Deployed LLMs in production achieving 40% faster inference using CPU/GPU optimization; reduced costs by 60%.',
        'Fine-tuned Mistral and LLaMA models for document summarization, classification, and conversational AI applications.',
        'Built lightweight, locally deployable AI pipelines for resource-constrained environments.'
      ]
    },
    {
      title: 'AI Engineer',
      company: 'Singularity',
      location: 'Cairo, Egypt',
      period: 'Jul 2024 - May 2025',
      description: [
        'Led LLM team, overseeing task delegation, sprint planning, and successful delivery of NLP pipelines.',
        'Fine-tuned large language models for summarization, classification, conversational AI, and chatbot development.',
        'Designed and deployed RAG-based systems and task-specific chatbots for real-time document retrieval in production.',
        'Applied LoRA and quantization techniques to optimize inference for limited-resource environments.'
      ]
    },
    {
      title: 'DEMI Coding Instructor',
      company: 'iSchool',
      location: 'Cairo & Giza, Egypt (Remote & On-site)',
      period: 'Jun 2024 - Aug 2025',
      description: [
        'Taught programming and AI fundamentals to children using Pictoblox and Python.',
        'Developed age-appropriate curriculum covering robotics, computer vision, and machine learning principles.'
      ]
    },
    {
      title: 'Junior Teaching Assistant',
      company: 'Nile University ITCS School',
      location: 'Giza, Egypt',
      period: 'Oct 2022 - Jun 2023',
      description: [
        'Assisted in Discrete Mathematics and AI courses for 180+ students; improved performance by 20% through tutoring.',
        'Conducted weekly office hours and supported grading with 24-hour response time for academic inquiries.'
      ]
    }
  ];

  const achievements = [
    "1st Place – Graduation Project Showcase (Spring 2025), Nile University (XScene Radiology AI)",
    "3rd Place – IEEE Helwan RAS Auxillio 6.0 (Robotics Manufacturing 2023)",
    "2nd Place – IEEE Helwan RAS Auxillio 5.0 (Robotics Manufacturing 2022)",
    "Full Scholarship – Nile University ITCS School (2021)"
  ];

  const publications = [
    {
      title: "Osama, M., Mamdouh, D., Attia, M., Mohamed, N., Lotfy, A., Arafa, T., Rashed, E.A., & Khoriba, G. (2025). XScene: Automated Radiology Report Generation Using Scene Graphs. Bioengineering, 12(7), Article 693.",
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
            href="https://raw.githubusercontent.com/MOsama10/osama-white-glow-folio/main/public/Mohamed_Osama_CV.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            <Download className="h-4 w-4" />
            Download Resume (PDF)
          </a>
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
