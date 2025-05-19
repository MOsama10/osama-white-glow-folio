
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('UlTinkLdkXKch8URV'); // Your Public Key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await emailjs.send(
        'service_djyyccm',
        'template_z8aa2rq',
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        'UlTinkLdkXKch8URV' // ✅ This must be passed again in production
      );
  
      toast({
        title: 'Message sent!',
        description: "Thank you for your message. I'll get back to you soon.",
      });
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50">
      <div className="section-container">
        <div className="flex items-center justify-center mb-8">
          <Mail className="h-7 w-7 mr-3 text-primary" />
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <Card className="card-shadow mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <a
                  href="mailto:m.osaammaa@gmail.com"
                  className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-gray-700">m.osaammaa@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="tel:+201098408989"
                  className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-gray-700">+20 1098408989</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/-mohamedosama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">LinkedIn</p>
                    <p className="text-gray-700">linkedin.com/in/-mohamedosama</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/MOsama10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <p className="text-sm font-medium">GitHub</p>
                    <p className="text-gray-700">github.com/MOsama10</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="card-shadow">
            <CardContent className="p-6">
              <p className="text-center text-gray-700 mb-8">
                Have a question or want to work together? Fill out the form below and 
                I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="px-8"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
