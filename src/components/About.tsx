import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const About = () => {
  const technicalSkills = [
    "Python", "C/C++", "Java", "SQL", "JavaScript", "CUDA", "PyTorch", 
    "TensorFlow", "Keras", "Scikit-learn", "OpenCV"
  ];

  const advancedSkills = [
    "Hugging Face", "Transformers", "LoRA", "RAG", "Prompt Engineering", 
    "Whisper", "Git", "FastAPI", "Docker", "Linux", "PostgreSQL", 
    "NVIDIA Omniverse", "Vector Databases"
  ];

  return (
    <section id="about" className="bg-background">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <User className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title mb-0">About Me</h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-heading font-semibold mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I am a passionate AI & Data Science Engineer dedicated to bridging the gap between 
              complex data and actionable insights. With a strong foundation in machine learning, 
              deep learning, and NLP, I create scalable solutions that solve real-world problems.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As Co-Founder and CTO at Vionex Digital Solutions, I drive AI, ML, and computer vision 
              strategies to create scalable solutions for e-commerce, healthcare, and education industries. 
              My experience spans across building LLM-powered applications, computer vision systems, 
              and production-ready AI pipelines.
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">m.osaammaa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium">+20 1098408989</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50 col-span-2">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium">Giza, Egypt</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#resume" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Read More About My Experience
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          
          {/* Right - Education & Skills */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Education */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="relative pl-4 border-l-2 border-primary/30">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                    <h4 className="font-medium">Master of Data Science</h4>
                    <p className="text-sm text-muted-foreground">Arab Academy for Science, Technology and Maritime Transport</p>
                    <p className="text-xs text-muted-foreground mt-1">Oct 2025 – Sep 2028</p>
                  </div>
                  <div className="relative pl-4 border-l-2 border-primary/30">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary"></div>
                    <h4 className="font-medium">Bachelor of Computer Science & AI</h4>
                    <p className="text-sm text-muted-foreground">Nile University</p>
                    <p className="text-xs text-muted-foreground mt-1">CGPA: 3.6/4.0 | Full Merit Scholarship</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {technicalSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Advanced & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {advancedSkills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-muted text-muted-foreground rounded-lg text-xs font-medium border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
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
