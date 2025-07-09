
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, GraduationCap, Award, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const projects = [
    {
      title: "AI Research Platform",
      description: "Leading-edge AI research platform for intelligent system development and model optimization",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Serverless architecture implementation for scalable cloud solutions with automated deployment",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      technologies: ["AWS", "Python", "Terraform", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for data processing, model training, and intelligent predictions",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Python", "Azure", "ML", "APIs"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const programmingLanguages = [
    { name: "C", icon: "💻" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" }
  ];

  const mlDataScience = [
    { name: "Machine Learning", icon: "🤖" },
    { name: "Artificial Intelligence", icon: "🧠" },
    { name: "Data Science", icon: "📊" },
    { name: "Research & Development", icon: "🔬" },
    { name: "Model Development", icon: "⚙️" }
  ];

  const cloudTechnologies = [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🌐" },
    { name: "Serverless", icon: "⚡" },
    { name: "Docker", icon: "🐳" },
    { name: "DevOps", icon: "🔄" }
  ];

  const leadership = [
    { name: "Technical Leadership", icon: "👨‍💼" },
    { name: "Team Management", icon: "👥" },
    { name: "Cross-functional Collaboration", icon: "🤝" },
    { name: "Project Coordination", icon: "📋" },
    { name: "Innovation Strategy", icon: "💡" }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop" },
    { name: "Microsoft Azure Fundamentals", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop" },
    { name: "Google Cloud Platform", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-slate-800">Mohammad Sami</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#certifications" className="text-slate-600 hover:text-blue-600 transition-colors">Certifications</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-slate-50/50 to-blue-50/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/lovable-uploads/329d3122-5d6f-4533-9c2a-1a672bfea508.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left animate-fade-in">
            <p className="text-lg text-slate-600 mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Mohammad <span className="text-blue-600">Sami</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Computer Science Engineer
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Leading an applied AI research team at Wipro, driving innovation through hands-on research, 
              model development, and implementation of intelligent systems. Based in Bengaluru, Karnataka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2">
                <img 
                  src="/lovable-uploads/4d3b3390-964c-4af3-b8b1-fab4c6c3b7b2.png" 
                  alt="Mohammad Sami"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-slate-100 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Me</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate tech enthusiast with deep expertise in AI, cloud computing, and technical leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Journey</h3>
              <p className="text-slate-600 leading-relaxed">
                As a passionate and driven tech enthusiast, I'm dedicated to driving innovation and building transformative solutions. 
                Currently leading cutting-edge AI initiatives through hands-on research, model development, and implementation of intelligent systems.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My core expertise includes AI/ML, cloud platforms, and data-driven problem-solving, with a strong ability to guide 
                and inspire cross-functional teams to transform ideas into real-world automated solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">AI Research & Development</h4>
                    <p className="text-slate-600">Leading AI-powered R&D projects and intelligent system development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Cloud Architecture</h4>
                    <p className="text-slate-600">Designing scalable cloud solutions with AWS and Azure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Technical Leadership</h4>
                    <p className="text-slate-600">Mentoring teams and facilitating agile development processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Computer Science Engineering</h3>
                <p className="text-slate-600 mb-2">K S School of Engineering and Management</p>
                <p className="text-blue-600 font-medium">2022 - Present</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Professional Experience</h3>
                <p className="text-slate-600 mb-2">Applied AI Research Team Lead at Wipro</p>
                <p className="text-blue-600 font-medium">Current Role</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Skills & Technologies</h2>
            <p className="text-xl text-slate-600">Technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <Card className="bg-white border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center border-b border-blue-600 pb-2">
                  Programming Languages
                </h3>
                <div className="space-y-4">
                  {programmingLanguages.map((lang, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <span className="text-2xl">{lang.icon}</span>
                      <span className="font-medium text-slate-700">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ML / Data Science */}
            <Card className="bg-white border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center border-b border-blue-600 pb-2">
                  ML / Data Science
                </h3>
                <div className="space-y-4">
                  {mlDataScience.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-slate-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cloud Technologies */}
            <Card className="bg-white border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center border-b border-blue-600 pb-2">
                  Cloud & DevOps
                </h3>
                <div className="space-y-4">
                  {cloudTechnologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-slate-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="bg-white border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center border-b border-blue-600 pb-2">
                  Leadership & Management
                </h3>
                <div className="space-y-4">
                  {leadership.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium text-slate-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-slate-600">Some of my recent work in AI and cloud computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-slate-200 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-slate-300 text-slate-600 hover:bg-slate-50">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Certifications</h2>
            <p className="text-xl text-slate-600">Professional certifications and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Let's Connect</h2>
            <p className="text-xl text-slate-600">
              Ready to collaborate on AI and cloud computing projects? Let's discuss how we can work together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-800">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">mohammad.sami@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-800">LinkedIn</p>
                    <p className="text-slate-600">mohammadsami01</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-800">GitHub</p>
                    <p className="text-slate-600">mohammadsami</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-slate-700">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-700">Message</Label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="Your message..."
                      className="w-full mt-2 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-white">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">© 2024 Mohammad Sami. All rights reserved.</p>
          <p className="text-slate-400 mt-2">Building the future with AI and cloud computing</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
