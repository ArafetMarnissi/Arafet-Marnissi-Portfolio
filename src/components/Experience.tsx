import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const experiences = [
    {
      title: "PFE Intern – Generative AI & LLMOps",
      company: "SOFRECOM TUNISIE",
      period: "03/2025 - 09/2025",
      country: "Tunisia",
      countryCode: "��",
      location: "Tunis, Tunisia",
      description: "Designed and deployed 'Jira Co-Pilot' end-to-end, a multi-agent RAG system transforming Jira archives into a Knowledge Graph for semantic, structured, and graph queries.",
      achievements: [
        "Orchestrated hierarchical AI architecture with LangGraph, including automatic correction loop for improved reliability",
        "Developed complete ETL pipeline for Knowledge Graph construction in Weaviate, enabling multi-modal querying",
        "Containerized full-stack application (FastAPI, React) and orchestrated deployment on Google Kubernetes Engine (GKE) via fully automated GitLab CI/CD pipeline",
        "Implemented infrastructure as code using Terraform for reproducible cloud-native deployments"
      ],
      technologies: ["Python", "FastAPI", "LangGraph", "Weaviate", "PostgreSQL", "React", "Docker", "Kubernetes (GKE)", "GitLab CI/CD", "Terraform", "GCP"]
    },
    {
      title: "Data Science Intern",
      company: "ATTIJARI BANK",
      period: "07/2024 - 09/2024",
      country: "Tunisia",
      countryCode: "��",
      location: "Ariana, Tunisia",
      description: "Developed machine learning solutions for customer attrition analysis and prediction with complete MLOps pipeline implementation.",
      achievements: [
        "Simulated customer data and implemented machine learning models to analyze and predict customer attrition patterns",
        "Created CI/CD pipeline to streamline model training, testing, and deployment processes",
        "Used DVC (Data Version Control) and MLflow to manage model artifacts and track experiments systematically",
        "Deployed final model using Flask, making it accessible via web application for business stakeholders"
      ],
      technologies: ["Python", "Machine Learning", "Flask", "MLflow", "DVC", "CI/CD", "Data Analysis", "Model Deployment"]
    },
    {
      title: "Web Development Intern",
      company: "ATTIJARI ASSURANCE",
      period: "07/2023 - 09/2023",
      country: "Tunisia",
      countryCode: "🇹🇳",
      location: "Tunis, Tunisia",
      description: "Developed complete worker registration application with user-friendly interface and robust authentication system.",
      achievements: [
        "Designed user-friendly interface for registration process, ensuring smooth experience for workers",
        "Developed complete worker registration application using RESTful APIs to handle all associated operations",
        "Implemented robust authentication system using tokens or session management to secure application access",
        "Created responsive web interface with modern design patterns and best practices"
      ],
      technologies: ["Web Development", "RESTful APIs", "Authentication", "Session Management", "Frontend Design", "Backend Integration"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-4 md:mb-6">
            <Briefcase className="w-4 h-4 text-purple-400 animate-pulse-slow" />
            <span className="text-xs md:text-sm font-medium text-purple-300">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Specializing in Generative AI, LLMOps, MLOps, multi-agent RAG systems, and full-stack development across banking, insurance, and telecom sectors
          </p>
        </div>

        {/* International Experience Highlight */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-card/10 to-card/5 backdrop-blur-md border border-accent/10 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:scale-[1.02]">
            {/* Dynamic Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/3 via-tech-purple/2 to-tech-cyan/3 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-tech-cyan/6 to-transparent rounded-full blur-2xl group-hover:animate-pulse"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-tech-cyan/10 border border-accent/20 mb-6 hover:scale-110 hover:rotate-1 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                <Globe className="w-4 h-4 text-accent animate-spin-slow" />
                <span className="text-sm font-medium text-accent">Global Experience</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-tech-cyan bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Professional Experience in Tunisia
              </h3>
              
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                Building <span className="text-accent font-semibold animate-pulse">production-ready AI systems</span> and gaining expertise across multiple industries
              </p>
              
              {/* Tunisia Focus */}
              <div className="flex justify-center items-center">
                <div className="group/country flex items-center gap-3 p-4 md:p-6 bg-muted/10 rounded-xl border border-border/10 hover:border-accent/30 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer">
                  <span className="text-2xl md:text-3xl group-hover/country:scale-125 transition-all duration-300 animate-bounce-slow">��</span>
                  <div className="text-left">
                    <span className="block text-lg font-bold text-foreground group-hover/country:text-red-400 transition-colors duration-300">Tunisia</span>
                    <span className="block text-sm text-muted-foreground group-hover/country:text-red-300">Tunis & Ariana</span>
                  </div>
                </div>
              </div>
              
              {/* Dynamic connection lines */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-blue via-tech-purple to-accent opacity-30"></div>
            
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative transition-all duration-700 delay-${index * 100} ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                  {/* Timeline Dot - Responsive positioning */}
                  <div className="hidden md:block absolute left-6 w-4 h-4 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content Card - Responsive margins */}
                  <div className="md:ml-16">
                    <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border hover:border-accent/50 hover:scale-[1.02]">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-3 h-3 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-pulse"></div>
                              <span className="text-xs md:text-sm font-medium text-muted-foreground bg-muted/30 px-2 md:px-3 py-1 rounded-full flex items-center gap-1 md:gap-2">
                                <Calendar className="w-3 h-3" />
                                {exp.period}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-base md:text-lg">
                              <span>{exp.countryCode}</span>
                            </div>
                          </div>
                          
                          <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80 transition-all duration-300 leading-tight">
                            {exp.title}
                          </CardTitle>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-tech-blue flex-shrink-0" />
                              <span className="font-semibold text-foreground text-sm md:text-base">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 flex-shrink-0" />
                              <span className="text-xs md:text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4 md:space-y-6">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{exp.description}</p>
                        
                        <div className="space-y-3 md:space-y-4">
                          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                            <Globe className="w-4 h-4 text-tech-purple" />
                            Key Achievements
                          </h4>
                          <div className="grid gap-2 md:gap-3">
                            {exp.achievements.map((achievement, i) => (
                              <div key={i} className="flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                                <span className="text-xs md:text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="space-y-2 md:space-y-3">
                          <h4 className="text-sm font-semibold text-foreground">Technologies & Tools</h4>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-gradient-to-r from-muted/50 to-muted/30 hover:from-accent/20 hover:to-accent/10 border border-border/30 hover:border-accent/50 transition-all duration-300 px-2 py-1">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
