
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';

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
              As Co-Founder and CTO at Vionex Digital Solutions, I drive AI, ML, and computer vision strategies to create scalable solutions for e-commerce, healthcare, and education industries. 
              My efforts focus on aligning technology with business objectives to foster digital transformation across Egypt, Africa, and the Middle East. 
            </p>
            <p className="text-gray-700 mb-4">
              With a B.Sc. in Computer Science and Artificial Intelligence from Nile University and an ongoing MSc in Data Science,
              I contribute to AI innovation as an Instructor at NTI and Technical Lead at Retailo. By fostering collaboration and guiding teams, I aim to develop cutting-edge solutions in NLP,
              computer vision, and large language models to address real-world challenges in retail, logistics, and beyond.
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
                      <h4 className="font-medium">Master of Data Science</h4>
                      <p className="text-sm text-gray-600">Arab Academy for Science, Technology and Maritime Transport</p>
                      <p className="text-sm text-gray-600">Oct 2025 – Sep 2028</p>
                      <p className="text-sm text-gray-700 mt-2">Master's degree in Data Science to advance expertise in analytics and AI</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-medium">Bachelor of Computer Science & Artificial Intelligence</h4>
                      <p className="text-sm text-gray-600">Nile University, Graduated: Jun 2025</p>
                      <p className="text-sm text-gray-600">CGPA: 3.6/4.0 | Full Merit Scholarship (2021-2025)</p>
                      <p className="text-sm text-gray-700 mt-2">Coursework: Deep Learning, Machine Learning, Computer Vision, NLP, Reinforcement Learning, Databases</p>
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
