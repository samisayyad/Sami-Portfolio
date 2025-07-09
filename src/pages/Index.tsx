
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Brain, Cloud, Award, User, MessageSquare, Download, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const projects = [
    {
      title: "AI Research Platform",
      description: "Leading-edge AI research platform for intelligent system development and model optimization with advanced ML algorithms",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "Serverless architecture implementation for scalable cloud solutions with automated deployment pipelines",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      technologies: ["AWS", "Python", "Terraform", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for data processing, model training, and intelligent predictions at scale",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Python", "Azure", "ML", "APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const skills = [
    { category: "Programming Languages", items: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Java", level: 85, icon: "☕" },
      { name: "C", level: 80, icon: "💻" }
    ]},
    { category: "AI/ML & Data Science", items: [
      { name: "Machine Learning", level: 90, icon: "🤖" },
      { name: "Artificial Intelligence", level: 88, icon: "🧠" },
      { name: "Data Science", level: 85, icon: "📊" },
      { name: "Research & Development", level: 92, icon: "🔬" }
    ]},
    { category: "Cloud Technologies", items: [
      { name: "AWS", level: 88, icon: "☁️" },
      { name: "Azure", level: 82, icon: "🌐" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "DevOps", level: 80, icon: "🔄" }
    ]},
    { category: "Leadership & Management", items: [
      { name: "Technical Leadership", level: 90, icon: "👨‍💼" },
      { name: "Team Management", level: 88, icon: "👥" },
      { name: "Project Coordination", level: 85, icon: "📋" },
      { name: "Innovation Strategy", level: 87, icon: "💡" }
    ]}
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2024" },
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", date: "2024" },
    { name: "Google Cloud Platform", issuer: "Google", date: "2023" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Data Scientist",
      company: "Tech Corp",
      content: "Mohammad's leadership in AI research has been exceptional. His ability to translate complex concepts into actionable solutions is remarkable.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Cloud Architect",
      company: "Innovation Labs",
      content: "Working with Mohammad on cloud infrastructure projects has been a great experience. His technical expertise and collaborative approach are outstanding.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-foreground">Mohammad Sami</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors font-medium">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">Projects</a>
              <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors font-medium">Certifications</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-animation"></div>
        
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Bengaluru, Karnataka
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Mohammad <span className="text-primary">Sami</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              AI Research Engineer & Cloud Computing Expert
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Leading an applied AI research team at Wipro, driving innovation through hands-on research, 
              model development, and implementation of intelligent systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 shadow-md">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img 
                    src="/lovable-uploads/4d3b3390-964c-4af3-b8b1-fab4c6c3b7b2.png" 
                    alt="Mohammad Sami"
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate tech enthusiast with deep expertise in AI, cloud computing, and technical leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground mb-6">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a passionate and driven tech enthusiast, I'm dedicated to driving innovation and building transformative solutions. 
                Currently leading cutting-edge AI initiatives through hands-on research, model development, and implementation of intelligent systems.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My core expertise includes AI/ML, cloud platforms, and data-driven problem-solving, with a strong ability to guide 
                and inspire cross-functional teams to transform ideas into real-world automated solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="bg-primary/5 border-primary/20 hover:shadow-md transition-all">
                  <CardContent className="p-4 text-center">
                    <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">AI Research</h4>
                    <p className="text-sm text-muted-foreground">Leading Innovation</p>
                  </CardContent>
                </Card>
                <Card className="bg-accent/5 border-accent/20 hover:shadow-md transition-all">
                  <CardContent className="p-4 text-center">
                    <Cloud className="h-8 w-8 text-accent mx-auto mb-2" />
                    <h4 className="font-semibold text-foreground">Cloud Computing</h4>
                    <p className="text-sm text-muted-foreground">Scalable Solutions</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground mb-6">What I Do</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">AI Research & Development</h4>
                    <p className="text-muted-foreground">Leading AI-powered R&D projects and intelligent system development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Cloud Architecture</h4>
                    <p className="text-muted-foreground">Designing scalable cloud solutions with AWS and Azure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Technical Leadership</h4>
                    <p className="text-muted-foreground">Mentoring teams and facilitating agile development processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <User className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Computer Science Engineering</h4>
                    <p className="text-muted-foreground">K S School of Engineering and Management</p>
                    <p className="text-primary font-medium">2022 - Present</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-accent mr-4" />
                  <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">Applied AI Research Team Lead</h4>
                    <p className="text-muted-foreground">Wipro Limited</p>
                    <p className="text-accent font-medium">Current Role</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">Technologies and competencies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <Card key={categoryIndex} className="bg-card border-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-8 text-center border-b border-primary/20 pb-4">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-6">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                        </div>
                        <div className="skill-progress">
                          <Progress value={skill.level} className="h-3" />
                        </div>
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
      <section id="projects" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">Recent work in AI and cloud computing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`bg-card border-border overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                {project.featured && (
                  <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 text-center">
                    Featured Project
                  </div>
                )}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1 border-primary/20 text-primary hover:bg-primary/5">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-border text-muted-foreground hover:bg-secondary">
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

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What People Say</h2>
            <p className="text-xl text-muted-foreground">Testimonials from colleagues and collaborators</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground">Professional certifications and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-center text-sm text-primary">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Ready to collaborate on AI and cloud computing projects? Let's discuss how we can work together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">mohammad.sami@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">mohammadsami01</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-muted-foreground">mohammadsami</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card border-border shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-2 border-border focus:border-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2 border-border focus:border-primary" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="Your message..."
                      className="w-full mt-2 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
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
      <footer className="py-12 px-6 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Mohammad Sami. All rights reserved.</p>
          <p className="text-muted-foreground/80 mt-2">Building the future with AI and cloud computing</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
