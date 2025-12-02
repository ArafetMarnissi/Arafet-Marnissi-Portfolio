import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";
import { Brain, Code, Database, Cloud, Sparkles, Zap, Star, Cpu, Server, Bot } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", specialty: "Primary Language" },
        { name: "JavaScript", specialty: "Full-Stack Development" },
        { name: "R", specialty: "Data Science & Analytics" },
        { name: "C", specialty: "System Programming" },
        { name: "C++", specialty: "Performance Computing" },
        { name: "Java", specialty: "Enterprise Development" },
        { name: "C#", specialty: "Application Development" },
        { name: "Shell Scripting", specialty: "Automation" }
      ],
      gradient: "from-tech-blue to-tech-purple",
      bgGradient: "from-tech-blue/10 to-tech-purple/10"
    },
    {
      title: "Generative AI & LLMOps",
      icon: Bot,
      skills: [
        { name: "LangGraph", specialty: "AI Workflow Orchestration" },
        { name: "LangChain", specialty: "LLM Application Framework" },
        { name: "Agentic RAG", specialty: "Multi-Agent Systems" },
        { name: "Prompt Engineering", specialty: "LLM Optimization" },
        { name: "Fine-tuning", specialty: "Model Customization" },
        { name: "Embedding", specialty: "Semantic Search" }
      ],
      gradient: "from-tech-purple to-accent",
      bgGradient: "from-tech-purple/10 to-accent/10"
    },
    {
      title: "Backend & Frameworks",
      icon: Server,
      skills: [
        { name: "FastAPI", specialty: "Modern Async API" },
        { name: "Flask", specialty: "Lightweight Web Framework" },
        { name: "SpringBoot", specialty: "Java Enterprise" },
        { name: "React", specialty: "Frontend Development" },
        { name: "Angular", specialty: "Enterprise Frontend" },
        { name: "RESTful APIs", specialty: "API Development" }
      ],
      gradient: "from-accent to-tech-cyan",
      bgGradient: "from-accent/10 to-tech-cyan/10"
    },
    {
      title: "AI/ML & NLP",
      icon: Brain,
      skills: [
        { name: "TensorFlow", specialty: "Deep Learning" },
        { name: "PyTorch", specialty: "Research & Production" },
        { name: "NLTK", specialty: "Natural Language Processing" },
        { name: "SpaCy", specialty: "Advanced NLP" },
        { name: "Question Answering", specialty: "QA Systems" },
        { name: "Time Series", specialty: "Forecasting & Prediction" },
        { name: "Computer Vision", specialty: "Image Processing" },
        { name: "Neural Networks", specialty: "Deep Learning Models" }
      ],
      gradient: "from-tech-cyan to-tech-blue",
      bgGradient: "from-tech-cyan/10 to-tech-blue/10"
    },
    {
      title: "MLOps & DevOps",
      icon: Cloud,
      skills: [
        { name: "Docker", specialty: "Containerization" },
        { name: "Kubernetes (GKE)", specialty: "Container Orchestration" },
        { name: "AWS ECS", specialty: "Container Orchestration" },
        { name: "AWS Fargate", specialty: "Serverless Containers" },
        { name: "MLflow", specialty: "ML Lifecycle Management" },
        { name: "DVC", specialty: "Data Version Control" },
        { name: "GitLab CI/CD", specialty: "Automation Pipeline" },
        { name: "Terraform", specialty: "Infrastructure as Code" },
        { name: "Cloud Run", specialty: "Serverless Deployment" }
      ],
      gradient: "from-accent to-tech-purple",
      bgGradient: "from-accent/10 to-tech-purple/10"
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "PostgreSQL", specialty: "Relational Database" },
        { name: "Oracle", specialty: "Enterprise Database" },
        { name: "MySQL", specialty: "Open Source DB" },
        { name: "Weaviate", specialty: "Vector Database" },
        { name: "ChromaDB", specialty: "AI-Native Database" },
        { name: "Knowledge Graphs", specialty: "Graph Databases" }
      ],
      gradient: "from-tech-blue to-accent",
      bgGradient: "from-tech-blue/10 to-accent/10"
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse-slow" />
            <span className="text-sm font-medium text-purple-300">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in Generative AI, LLMOps, MLOps, and full-stack development to build production-ready intelligent systems
          </p>
        </div>
        
        {/* Skills Categories Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                  <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border hover:border-accent/50 hover:scale-[1.02] h-full">
                    <CardContent className="p-6 space-y-6">
                      {/* Category Header */}
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80 transition-all duration-300">
                          {category.title}
                        </h3>
                      </div>
                      
                      {/* Skills Grid */}
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, skillIndex) => (
                            <div
                              key={skillIndex}
                              className="group/skill relative"
                              onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                              onMouseLeave={() => setHoveredSkill(null)}
                            >
                              <Badge 
                                variant="secondary"
                                className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gradient-to-r from-muted/50 to-muted/30 hover:from-accent/20 hover:to-accent/10 border border-border/30 hover:border-accent/50 text-xs"
                              >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/skill:translate-x-full transition-transform duration-700"></div>
                                
                                <span className="relative z-10 flex items-center gap-1 font-medium">
                                  {skill.name}
                                  {hoveredSkill === `${index}-${skillIndex}` && (
                                    <Star className="w-3 h-3" />
                                  )}
                                </span>
                              </Badge>
                              
                              {/* Tooltip */}
                              {hoveredSkill === `${index}-${skillIndex}` && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-foreground text-background text-xs rounded-lg whitespace-nowrap animate-fade-in z-20 shadow-lg">
                                  {skill.specialty}
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-foreground"></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
            <Cpu className="w-5 h-5 text-purple-400 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Continuously learning and adapting to emerging technologies
            </span>
            <Zap className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;