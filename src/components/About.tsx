
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

const About = () => {
  const technicalSkills = [
    "Python", "C/C++", "Java", "SQL", "CUDA", "PyTorch", 
    "TensorFlow", "Keras", "Scikit-learn", "GANs"
  ];

  const advancedSkills = [
    "LLMs", "Retrieval-Augmented Generation (RAG)", "NLP"
  ];

  const softSkills = [
    "Presentation", "Team Management", "Project Management", 
    "Communication", "Research", "Report Writing", "Public Speaking"
  ];

  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <User className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-heading font-medium mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              A passionate and results-driven Data Scientist and AI Engineer with a strong foundation 
              in machine learning, AI, and data analysis. Graduated with a Bachelor's degree in 
              Computer Science and Artificial Intelligence from Nile University.
            </p>
            <p className="text-gray-700 mb-4">
              Experienced in working with large language models (LLMs), computer vision, and natural 
              language processing (NLP) techniques. Adept at leading technical teams, managing projects, 
              and deploying AI solutions in production environments.
            </p>
            <p className="text-gray-700">
              Known for strong problem-solving ability, collaboration skills, and commitment to 
              continuous learning in cutting-edge technologies.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-heading font-medium mb-4">Contact Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Email:</span> m.osaammaa@gmail.com</li>
                <li><span className="font-medium">Phone:</span> +20 1098408989</li>
                <li><span className="font-medium">Location:</span> Giza, Egypt</li>
                <li><span className="font-medium">GitHub:</span> <a href="https://github.com/MOsama10" target="_blank" className="text-primary hover:underline">github.com/MOsama10</a></li>
                <li><span className="font-medium">LinkedIn:</span> <a href="https://linkedin.com/in/-mohamedosama" target="_blank" className="text-primary hover:underline">linkedin.com/in/-mohamedosama</a></li>
              </ul>
            </div>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="overflow-hidden card-shadow mb-8">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-6">
                  <h3 className="text-2xl font-heading font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Bachelor of Computer Science & Artificial Intelligence</h4>
                      <p className="text-sm text-gray-600">Nile University, Graduated: Jun 2025</p>
                      <p className="text-sm text-gray-600">CGPA: 3.6</p>
                      <p className="text-sm text-gray-700 mt-2">Relevant Coursework: Artificial Intelligence, Machine Learning, Databases, Software Development, Data Analysis, Mathematics</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-medium mb-4">Student Activities</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">ITCS School's Representative, Nile University Students' Union</h4>
                      <p className="text-sm text-gray-600">Aug 2023 – Mar 2024</p>
                      <p className="text-sm text-gray-700">Addressed student concerns for over 1000 peers and led initiatives to enhance student life.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Junior Member, ICPC NU Community</h4>
                      <p className="text-sm text-gray-600">Oct 2022 – Jun 2024</p>
                      <p className="text-sm text-gray-700">Participated in the Egyptian Collegiate Programming Contest (ECPC).</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Technical Member, IEEE NU Student Branch</h4>
                      <p className="text-sm text-gray-600">Oct 2022 – Oct 2023</p>
                      <p className="text-sm text-gray-700">Organized workshops on AI and machine learning and contributed to engineering projects.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-shadow">
              <CardContent className="p-0">
                <div className="bg-primary/5 p-6">
                  <h3 className="text-2xl font-heading font-medium mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
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
                  <h3 className="text-2xl font-heading font-medium mb-4">Advanced Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {advancedSkills.map((skill, index) => (
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
                  <h3 className="text-2xl font-heading font-medium mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white text-primary rounded-full text-sm font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
