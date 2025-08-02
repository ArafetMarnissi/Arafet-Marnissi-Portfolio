import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { 
  Brain, 
  Rocket, 
  Lightbulb, 
  MessageSquare, 
  CheckCircle, 
  Zap,
  Code,
  Bot,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "AI Project Development",
      icon: Brain,
      description: "End-to-end AI solution development from concept to production deployment.",
      features: [
        "Machine Learning Model Development",
        "Computer Vision & NLP Solutions",
        "MLOps Pipeline Implementation",
        "Performance Optimization & Scaling"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "MLflow", "Docker", "Kubernetes"],
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-600/10 to-purple-600/10",
      deliverables: "Production-ready AI models with comprehensive documentation"
    },
    {
      title: "Agentic System Development",
      icon: Bot,
      description: "Intelligent autonomous systems that can reason, plan, and execute complex tasks.",
      features: [
        "Multi-Agent System Architecture",
        "RAG-based Knowledge Systems",
        "LLM Integration & Fine-tuning",
        "Autonomous Decision Making"
      ],
      technologies: ["LangChain", "Llama", "OpenAI GPT", "Vector DBs", "FastAPI", "Redis"],
      gradient: "from-emerald-600 to-blue-600",
      bgGradient: "from-emerald-600/10 to-blue-600/10",
      deliverables: "Scalable agent systems with real-time capabilities"
    },
    {
      title: "MVP Development for Startups",
      icon: Rocket,
      description: "Rapid prototyping and MVP development to validate your startup ideas quickly.",
      features: [
        "Rapid Prototype Development",
        "Full-Stack Web Applications",
        "API Design & Implementation",
        "Database Architecture & Setup"
      ],
      technologies: ["React", "Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-600/10 to-red-600/10",
      deliverables: "Market-ready MVP with user feedback integration"
    },
    {
      title: "AI Consulting & Strategy",
      icon: Lightbulb,
      description: "Strategic guidance on AI implementation and digital transformation initiatives.",
      features: [
        "AI Readiness Assessment",
        "Technology Stack Recommendations",
        "Implementation Roadmaps",
        "Team Training & Workshops"
      ],
      technologies: ["Strategic Planning", "Architecture Design", "Best Practices", "Training"],
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600/10 to-pink-600/10",
      deliverables: "Comprehensive AI strategy with actionable roadmap"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Enhanced Header with consistent styling */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
            <Zap className="w-4 h-4 text-purple-400 animate-pulse-slow" />
            <span className="text-sm font-medium text-purple-300">Professional Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into intelligent solutions with cutting-edge AI technology and robust engineering practices
          </p>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-tech-blue rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-tech-purple rounded-full animate-float opacity-50"></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-tech-cyan rounded-full animate-float-delayed opacity-60"></div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`relative transition-all duration-700 delay-${index * 100 + 300} ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              >
                <Card
                  className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border hover:border-accent/50 hover:scale-[1.02] relative overflow-hidden h-full"
                  onMouseEnter={() => {
                    setActiveCard(index);
                  }}
                  onMouseLeave={() => {
                    setActiveCard(null);
                  }}
                >
                  {/* Enhanced Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-tech-cyan/6 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Dynamic Top Border */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <CardContent className="relative z-10 p-8 h-full flex flex-col">
                    {/* Enhanced Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <IconComponent className="w-6 h-6 text-white group-hover:animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80 transition-all duration-300 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-accent transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-500 group-hover:animate-pulse" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-start gap-3 group-hover:text-foreground/80 transition-colors duration-300">
                            <div className="w-2 h-2 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2 group-hover:text-tech-blue transition-colors duration-300">
                        <Code className="w-4 h-4 text-tech-blue group-hover:animate-pulse" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-gradient-to-r from-muted/50 to-muted/30 hover:from-accent/20 hover:to-accent/10 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Deliverables */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2 group-hover:text-tech-purple transition-colors duration-300">
                        <TrendingUp className="w-4 h-4 text-tech-purple group-hover:animate-pulse" />
                        Deliverables
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                        {service.deliverables}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>



        {/* Dynamic Background Elements for Active Cards */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-tech-purple/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 0 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-tech-cyan/10 to-accent/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 1 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute bottom-1/4 left-1/2 w-56 h-56 bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute bottom-1/3 right-1/3 w-52 h-52 bg-gradient-to-r from-tech-purple/10 to-tech-cyan/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 3 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
