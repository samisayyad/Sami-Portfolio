
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and drag-and-drop functionality",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts and interactive charts",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, description: "React, Vue.js, TypeScript, HTML5, CSS3" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Adobe XD, Responsive Design, User Research" },
    { name: "Mobile Development", icon: Smartphone, description: "React Native, Flutter, Progressive Web Apps" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white animate-fade-in">
              JD
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            John <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 animate-fade-in">
            Full-Stack Developer & UI/UX Designer creating beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with 5+ years of experience creating innovative web applications. 
              I love turning complex problems into simple, beautiful designs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <skill.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-white/70">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-white/80">Some of my recent work that I'm proud of</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10 flex-1">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/80 mb-12">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <Mail className="h-8 w-8 text-purple-400" />
                <div className="text-left">
                  <p className="text-white/70 text-sm">Email</p>
                  <p className="text-white font-semibold">john@example.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <Linkedin className="h-8 w-8 text-purple-400" />
                <div className="text-left">
                  <p className="text-white/70 text-sm">LinkedIn</p>
                  <p className="text-white font-semibold">@johndeveloper</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <Github className="h-8 w-8 text-purple-400" />
                <div className="text-left">
                  <p className="text-white/70 text-sm">GitHub</p>
                  <p className="text-white font-semibold">@johndeveloper</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
            Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/20">
        <div className="container mx-auto text-center">
          <p className="text-white/60">© 2024 John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
