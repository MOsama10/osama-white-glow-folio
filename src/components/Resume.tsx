import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink, Briefcase, Trophy, BookOpen } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Co-Founder & CTO',
      company: 'Vionex Digital Solutions',
      location: 'Cairo, Egypt',
      period: 'Jul 2025 - Present',
      description: [
        'Spearheaded AI, ML, and computer vision initiatives for e-commerce, healthcare, and education.',
        'Led tech team to develop scalable solutions across Egypt, Africa, and the Middle East.',
        'Aligned technology strategies with business objectives to drive digital transformation.'
      ]
    },
    {
      title: 'Technical Lead, AI Department',
      company: 'Retailo',
      location: 'Cairo, Egypt',
      period: 'Jul 2025 - Present',
      description: [
        'Led AI initiatives to address real-world challenges in MENA through innovative PoC development.',
        'Managed cross-functional AI teams for NLP, CV, and LLM solutions in retail and logistics.'
      ]
    },
    {
      title: 'AI Instructor',
      company: 'National Telecommunications Institute (NTI)',
      location: 'Cairo, Egypt',
      period: 'Aug 2025 - Present',
      description: [
        'Deliver specialized training in ML, Deep Learning, CV, NLP, and LLMs.',
        'Design hands-on sessions for both theoretical and applied AI skills.'
      ]
    },
    {
      title: 'AI Engineer',
      company: 'Singularity',
      location: 'Cairo, Egypt',
      period: 'Jul 2024 - May 2025',
      description: [
        'Led LLM team for NLP pipeline delivery and fine-tuned models for production.',
        'Deployed RAG-based systems and chatbots with LoRA optimization techniques.'
      ]
    },
    {
      title: 'LLM Freelancer',
      company: 'Digis Squared',
      location: 'Remote',
      period: 'Apr 2025 - Jul 2025',
      description: [
        'Deployed LLMs achieving 40% faster inference and 60% cost reduction.',
        'Fine-tuned Mistral and LLaMA for summarization and conversational AI.'
      ]
    }
  ];

  const achievements = [
    "1st Place – Graduation Project Showcase (Spring 2025), Nile University",
    "3rd Place – IEEE Helwan RAS Auxillio 6.0 (Robotics 2023)",
    "2nd Place – IEEE Helwan RAS Auxillio 5.0 (Robotics 2022)",
    "Full Scholarship – Nile University ITCS School (2021-2025)"
  ];

  const publications = [
    {
      title: "XScene: Automated Radiology Report Generation Using Scene Graphs",
      authors: "Osama, M., et al.",
      journal: "Bioengineering, 12(7), Article 693",
      year: "2025",
      url: "https://www.mdpi.com/2306-5354/12/7/693"
    }
  ];

  return (
    <section id="resume" className="bg-background">
      <div className="section-container">
        <div className="flex items-center justify-center mb-4">
          <Download className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title mb-0">Resume</h2>
        </div>
        
        <div className="flex justify-center mb-10">
          <Button size="lg" asChild>
            <a
              href="https://raw.githubusercontent.com/MOsama10/osama-white-glow-folio/main/public/Mohamed_Osama_CV.pdf"
              download
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume (PDF)
            </a>
          </Button>
        </div>
        
        <Tabs defaultValue="experience" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span className="hidden sm:inline">Awards</span>
              </TabsTrigger>
              <TabsTrigger value="publications" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Publications</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="experience" className="space-y-4">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-heading font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="achievements">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-6">Achievements & Recognition</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="publications">
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-6">Publications</h3>
                {publications.map((pub, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <h4 className="font-medium mb-2">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                    <p className="text-sm text-muted-foreground mb-3">{pub.journal} ({pub.year})</p>
                    <a 
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                    >
                      View Publication
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
