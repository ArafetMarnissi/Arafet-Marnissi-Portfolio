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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const experiences = [
    {
      title: "Data Scientist - AI & Data Team",
      company: "Opmobility",
      period: "01/2025 - 07/2025",
      country: "France",
      countryCode: "🇫🇷",
      location: "Paris, France",
      description: "Working in alternance developing computer vision models and anomaly detection systems to improve defect verification efficiency.",
      achievements: [
        "Designed and deployed computer vision models for anomaly detection in production",
        "Developed RAG-based chatbot using Llama architecture for technical knowledge base",
        "Implemented MLOps systems on Databricks for ML model lifecycle management"
      ],
      technologies: ["Databricks", "Python", "TensorFlow", "RAG", "Llama", "YOLO", "LangChain", "MLflow", "PySpark"]
    },
    {
      title: "AI Consultant & Backend Developer",
      company: "Elepzia",
      period: "07/2023 - 02/2025",
      country: "Tunisia",
      countryCode: "🇹🇳",
      location: "Tunis, Tunisia",
      description: "Contributing to AI strategy development, leading Data & AI team, and developing robust backend solutions using modern Python frameworks.",
      achievements: [
        "Led Data & AI team coordination and technical priority management",
        "Developed RESTful APIs using FastAPI for seamless AI project integration",
        "Built scalable backend systems for NLP and time series analysis applications"
      ],
      technologies: ["Python", "FastAPI", "Django", "NLP", "Time Series", "OpenRouter", "Azure", "LangChain", "LangGraph", "PostgreSQL"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-background to-background/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building the future with AI and data science across multiple industries and cutting-edge projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`transition-all duration-500 delay-${index * 100} ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'} hover:shadow-xl border-border/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm group hover:scale-[1.02]`}>
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-tech-blue" />
                        <span className="font-semibold text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{exp.countryCode}</span>
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-tech-purple" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-muted/50 hover:bg-accent/20 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
