
import React, { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Brain, Cloud, Award, User, MessageSquare, Download, MapPin, Calendar, Star, Zap, Cpu, Database, Globe, Server, Smartphone, Palette, Monitor, Layers, GitBranch } from "lucide-react";
import profileImage from "@assets/profile11_1752055966694.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Server response:', result);

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const projects = [
    {
      title: "HealthVault_API1",
      description: "A RESTful API for health data management that supports user authentication, CRUD operations for health records, built with Node.js, Express, and MongoDB",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Your Personal Interviewer!",
      description: "A AI tool for interview prep that includes algorithm challenges, code execution via Dockerized environment, scoring/reporting, built with Python/Flask and React",
      image: "https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["AWS", "Python", "Terraform", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Plant-Leaf-Detection",
      description: "A machine learning pipeline using TensorFlow to classify plant diseases from leaf images. Supports transfer learning on ResNet, performance reporting, and model deployment with Flask",
      image: "https://user-images.githubusercontent.com/108793964/216769362-3ba51391-22b0-47fa-82af-e905a0aa831f.png",
      technologies: ["Python","ML","TensorFlow", "APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const techStack = [
    {
      category: "Programming Languages",
      icon: Code,
      technologies: [
        { name: "Python", icon: Code },
        { name: "Java", icon: Code },
        { name: "C", icon: Code },
        { name: "SQL", icon: Database }
      ]
    },
    {
      category: "ML / Data Science",
      icon: Brain,
      technologies: [
        { name: "Pandas", icon: Brain },
        { name: "NumPy", icon: Brain },
        { name: "PyTorch", icon: Brain },
        { name: "TensorFlow", icon: Brain },
        { name: "OpenCV", icon: Brain }
      ]
    },
    {
      category: "NLP",
      icon: Brain,
      technologies: [
        { name: "spaCy", icon: Brain },
        { name: "NLTK", icon: Brain },
        { name: "OpenAI API", icon: Brain },
        { name: "MediaPipe", icon: Brain }

      ]
    },
    {
      category: "Web Development & Deployment",
      icon: Globe,
      technologies: [
        { name: "HTML5", icon: Globe },
        { name: "CSS", icon: Palette },
        { name: "JS", icon: Globe },
        { name: "Flask", icon: Server },
        { name: "React.JS", icon: Server },
        { name: "Express.JS", icon: Server },
        { name: "TypeScript-Basic", icon: Server },
        { name: "Streamlit", icon: Server },
        { name: "Netlify", icon: Cloud },
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Database },
        { name: "Render", icon: Cloud }

      ]
    },
    {
      category: "Visualisation",
      icon: Monitor,
      technologies: [
        { name: "Matplotlib", icon: Monitor },
        { name: "PowerBI", icon: Monitor }
      ]
    },
    {
      category: "Tools",
      icon: Monitor,
      technologies: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitBranch },
        { name: "Jupyter", icon: Monitor },
        { name: "Figma", icon: Palette },
        { name: "Canva", icon: Palette },
        { name: "replit", icon: Smartphone },
        { name: "lovable", icon: Smartphone }
      ]
    }
  ];

  const certifications = [
    { name: "AWS Academy Cloud Developing Course", issuer: "Amazon Web Services", date: "2025" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", date: "2025" },
    { name: "Google Cloud Platform", issuer: "Google", date: "2025" },
    { name: "Microsoft Azure Applied Skills", issuer: "Microsoft", date: "2025" },
    { name: "Appied Artificial Intellingence Practical Implementatiob", issuer: "Microsoft", date: "2025" },
    { name: "Oracle Java Programming Certificate", issuer: "Pinnacle Labs", date: "2025" }


  ];

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Mohammad_Sami_Resume.pdf'; // Path to your resume in public folder
    link.download = 'Mohammad_Sami_Resume.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mohammad Sami
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105">Projects</a>
              <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105">Certifications</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden hero-3d">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left animate-fade-in">

            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-8 leading-tight">
              Mohammad <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sami</span>
            </h1>
            <div className="text-3xl md:text-4xl text-accent font-semibold mb-8 typing-animation">
            AI & Tech Enthusiast
            </div>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
            An aspiring tech innovator passionate about building intelligent systems at the intersection of AI, cloud computing, and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-2xl hover:scale-105 transition-all duration-300 hover:rotate-1 hover:shadow-primary/50"  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 shadow-lg hover:scale-105 transition-all duration-300 hover:-rotate-1 hover:shadow-accent/30" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-2 shadow-2xl hover:scale-105 transition-all duration-500 group-hover:rotate-2">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-card relative">
                  <img 
                    src={profileImage} 
                    alt="Mohammad Sami"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent group-hover:from-primary/40 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-white font-semibold text-lg">Mohammad Sami</h3>
                      <p className="text-white/80 text-sm">Artificial Intellingence and Data Science</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full animate-pulse blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full animate-pulse blur-xl group-hover:bg-accent/30 transition-all duration-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-white/20 rounded-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">About Me</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Passionate tech innovator driving the future of AI and cloud computing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div className="space-y-8">
              <h3 className="text-4xl font-semibold text-foreground mb-8">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-xl">
              Currently pursuing my B.E. in Computer Science and Engineering at KS School of Engineering & Management, I actively engage in hands-on projects that span AI research, cloud architecture, and ML model pipelines. Whether it’s optimizing model performance or deploying scalable infrastructure using AWS/Azure, I bring a balance of creativity and technical depth to every project I tackle.
              </p>
              <p className="text-muted-foreground leading-relaxed text-xl">
              Alongside my academic journey, I’ve earned industry certifications from Amazon Web Services, Microsoft Azure, and Google Cloud, which reflect my drive to stay ahead in a rapidly evolving tech world. With a blend of 3D modeling, video editing, and a solid grip on programming fundamentals, I’m not only a developer but a creative thinker ready to take on future challenges.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <Card className="bg-primary/5 border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground text-lg">AI Research</h4>
                    <p className="text-sm text-muted-foreground">Leading Innovation</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent/5 border-accent/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <Cpu className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground text-lg">Technology Innovation</h4>
                    <p className="text-sm text-muted-foreground">Cutting-edge Solutions</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-4xl font-semibold text-foreground mb-8">What I Do</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                  <div className="w-4 h-4 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xl">AI Research & Development</h4>
                    <p className="text-muted-foreground text-lg">Working on deep-learning-powered systems and data science workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                  <div className="w-4 h-4 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xl">Cloud Architecture</h4>
                    <p className="text-muted-foreground text-lg">Designing and deploying scalable infrastructure using AWS, Azure, Docker, and Terraform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                  <div className="w-4 h-4 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xl">Technical Leadership</h4>
                    <p className="text-muted-foreground text-lg">Collaborating and mentoring within teams to deliver agile-based innovation and modern solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <User className="h-10 w-10 text-primary mr-6" />
                  <h3 className="text-3xl font-semibold text-foreground">Graduation</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground text-xl">Computer Science Engineering</h4>
                    <p className="text-muted-foreground text-lg">K S School of Engineering and Management</p>
                    <p className="text-primary font-medium text-lg">2022 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-10">
                <div className="flex items-center mb-8">
                  <Award className="h-10 w-10 text-accent mr-6" />
                  <h3 className="text-3xl font-semibold text-foreground">Secondary Education</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground text-xl">Science - PCMB</h4>
                    <p className="text-muted-foreground text-lg">Vishveshwaraya Technology University</p>
                    <p className="text-accent font-medium text-lg">2020 - 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Skills & Technologies</h2>
            <p className="text-2xl text-muted-foreground">Cutting-edge technologies powering innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="tech-category skill-card p-6 rounded-xl bg-card/80 border-border hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {category.category}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="tech-item text-center p-3 rounded-lg hover:bg-primary/10 cursor-pointer transition-all duration-300 group hover:scale-105 hover:shadow-md">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                          <div className="text-primary group-hover:text-primary/90 transition-all duration-300">
                            {tech.icon === Code && <Code className="w-6 h-6" />}
                            {tech.icon === Brain && <Brain className="w-6 h-6" />}
                            {tech.icon === Database && <Database className="w-6 h-6" />}
                            {tech.icon === Globe && <Globe className="w-6 h-6" />}
                            {tech.icon === Palette && <Palette className="w-6 h-6" />}
                            {tech.icon === Server && <Server className="w-6 h-6" />}
                            {tech.icon === Cloud && <Cloud className="w-6 h-6" />}
                            {tech.icon === Monitor && <Monitor className="w-6 h-6" />}
                            {tech.icon === GitBranch && <GitBranch className="w-6 h-6" />}
                            {tech.icon === Smartphone && <Smartphone className="w-6 h-6" />}
                          </div>
                        </div>
                        <h4 className="font-medium text-foreground text-xs group-hover:text-primary transition-all duration-300">{tech.name}</h4>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-card/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Featured Projects</h2>
            <p className="text-2xl text-muted-foreground">Innovative solutions in AI and cloud computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <Card key={index} className={`bg-card border-border overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 ${project.featured ? 'ring-2 ring-primary/30' : ''}`}>
                {project.featured && (
                  <div className="bg-gradient-to-r from-primary to-accent text-white text-sm font-medium px-4 py-2 text-center">
                    Featured Project
                  </div>
                )}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="flex-1 border-primary/20 text-primary hover:bg-primary/10 hover:scale-105">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-border text-muted-foreground hover:bg-secondary hover:scale-105">
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
      <section id="certifications" className="py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Certifications</h2>
            <p className="text-2xl text-muted-foreground">Professional achievements and recognition</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardContent className="p-10 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-primary/20">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-xl">{cert.name}</h3>
                  <p className="text-muted-foreground text-lg mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-center text-primary">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">Let's Connect</h2>
            <p className="text-2xl text-muted-foreground">
              Ready to collaborate on groundbreaking AI and cloud projects?
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h3 className="text-4xl font-semibold text-foreground">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                  <Mail className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-xl">Email</p>
                    <p className="text-muted-foreground text-lg">naseemsayyad388@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                  <Linkedin className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-xl">LinkedIn</p>
                    <p className="text-muted-foreground text-lg">Mohammad Sami</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 p-6 rounded-xl hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
                  <Github className="h-8 w-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-xl">GitHub</p>
                    <p className="text-muted-foreground text-lg">samisayyad</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card border-border shadow-2xl hover:scale-105 transition-all duration-500">
              <CardContent className="p-10">
                <form className="space-y-8">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium text-lg">Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      className="mt-3 border-border focus:border-primary h-12 text-lg" 
                      required/>                 
                 </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium text-lg">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className="mt-3 border-border focus:border-primary h-12 text-lg" 
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium text-lg">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      className="w-full mt-3 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground text-lg" 
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-xl h-14 text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-background border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Mohammad Sami</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                AI Research & Development specialist focused on creating innovative solutions 
                in machine learning, cloud computing, and intelligent systems.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/samisayyad" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/mohammadsami01/" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Specializations</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground text-lg">
                  <Brain className="h-4 w-4 inline mr-2 text-primary" />
                  Machine Learning
                </li>
                <li className="text-muted-foreground text-lg">
                  <Database className="h-4 w-4 inline mr-2 text-primary" />
                  Data Science
                </li>
                <li className="text-muted-foreground text-lg">
                  <Cpu className="h-4 w-4 inline mr-2 text-primary" />
                  AI Research
                </li>
                <li className="text-muted-foreground text-lg">
                  <Cloud className="h-4 w-4 inline mr-2 text-primary" />
                  Cloud Computing
                </li>
                <li className="text-muted-foreground text-lg">
                  <Globe className="h-4 w-4 inline mr-2 text-primary" />
                  Web Development
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-lg">© 2024 Mohammad Sami. All rights reserved.</p>
              <p className="text-muted-foreground/80 text-lg">Shaping the future with AI and cloud innovation</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
