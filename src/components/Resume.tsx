
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download } from 'lucide-react';

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
      title: 'AI Engineer, Team Lead – LLM Team',
      company: 'Singularity',
      location: 'Cairo, Egypt',
      period: 'Jul 2024 - Jun 2025',
      description: [
        'Lead the LLM team, managing task delegation, tracking progress, and ensuring project timelines.',
        'Applied computer vision for object detection and segmentation in steel factory environments.',
        'Fine-tuned LLMs and implemented Retrieval-Augmented Generation (RAG) for advanced information retrieval.',
        'Built a digital twin using NVIDIA Omniverse for real-time production monitoring.'
      ]
    },
    {
      title: 'DEMI Coding Instructor',
      company: 'iSchool, Instructors Department',
      location: 'Remote, Egypt',
      period: 'Jun 2024 - Oct 2024',
      description: [
        'Taught programming fundamentals and AI concepts to young learners.',
        'Provided support with grading, student queries, and project guidance using Pictoblox.'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Misr El-Kheir Foundation',
      location: 'Cairo, Egypt',
      period: 'Sep 2023 - Dec 2023',
      description: [
        'Conducted data validation, cleaning, and exploratory analysis.',
        'Visualized statistical trends and supported data-driven decision-making.'
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
    "Participated in GenZeurs Hackathon 2023",
    "Student Union Readiness Program 2023",
    "3rd Place – IEEE Helwan RAS Auxillio 6.0 (Robotics Manufacturing 2023)",
    "2nd Place – IEEE Helwan RAS Auxillio 5.0 (Robotics Manufacturing 2022)",
    "Full Scholarship – Nile University ITCS School (2021)",
    "1st Place – 'Abakera TV Show' Season 10 (General Information, 2020)"
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
            href="/Mohamed_Osama_CV.pdf"
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
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
