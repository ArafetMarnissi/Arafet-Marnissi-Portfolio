import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Mic, GraduationCap, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Activities = () => {
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
  const activities = [
    {
      category: "Speaking & Teaching",
      icon: Mic,
      items: [
        {
          title: "AI Conference Keynote Speaker",
          description: "Delivered keynote on 'Future of AI in Healthcare' at TechSummit 2023",
          achievement: "500+ attendees"
        },
        {
          title: "Startups AI Advisor",
          description: "Providing strategic AI guidance and technical mentorship to early-stage startups",
          achievement: "5+ startups"
        },
        {
          title: "Workshop Facilitator",
          description: "Conducted AI/ML workshops for professional development programs",
          achievement: "200+ professionals trained"
        }
      ]
    },
    {
      category: "Certifications",
      icon: GraduationCap,
      items: [
        {
          title: "Microsoft Azure AI Engineer Associate (AI-102)",
          description: "Comprehensive certification in designing and implementing AI solutions on Microsoft Azure platform",
          achievement: "In Progress"
        },
        {
          title: "NVIDIA - AI for Anomaly Detection",
          description: "Advanced certification in artificial intelligence applications for anomaly detection systems",
          achievement: "2024"
        },
        {
          title: "NVIDIA - AI for Predictive Maintenance",
          description: "Specialized certification in AI-driven predictive maintenance solutions",
          achievement: "2024"
        },
        {
          title: "Duke University - MLOps Certification",
          description: "Comprehensive certification in Machine Learning Operations and deployment practices",
          achievement: "2024"
        },
        {
          title: "Basira Lab - Machine Learning & Optimization",
          description: "Advanced certification in machine learning algorithms and optimization techniques",
          achievement: "2023"
        }
      ]
    },
    {
      category: "Leadership & Organizations",
      icon: Users,
      items: [
        {
          title: "DeepFlow Co-founder & AI Trainer",
          description: "Co-founded AI education initiative focused on democratizing artificial intelligence knowledge and training in Tunisia",
          achievement: "Community impact"
        },
        {
          title: "Enactus Esprit - Founder & Project Manager of MOSCA",
          description: "Founded and managed the Mosc project within Enactus entrepreneurship organization",
          achievement: "Social impact project"
        }
      ]
    }
  ];

  return (
    <section id="activities" ref={sectionRef} className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
            <Award className="w-4 h-4 text-purple-400 animate-pulse-slow" />
            <span className="text-sm font-medium text-purple-300">Professional Activities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Extra <span className="bg-gradient-primary bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the AI community through speaking, research, and mentorship
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-blue via-tech-purple to-accent opacity-30"></div>
            
            <div className="space-y-12">
              {activities.map((category, index) => (
                <div key={index} className={`relative transition-all duration-700 delay-${index * 100} ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content Card - All aligned to the left */}
                  <div className="ml-16">
                    <Card className="group hover:shadow-2xl transition-all duration-500 bg-gradient-card border border-border hover:border-accent/50 hover:scale-[1.02] hover:shadow-glow">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-muted-foreground bg-muted/30 px-3 py-1 rounded-full flex items-center gap-2">
                              <category.icon className="w-3 h-3" />
                              {category.category}
                            </span>
                          </div>
                          
                          <CardTitle className="text-xl md:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80 transition-all duration-300 flex items-center gap-3">
                            <category.icon className="w-6 h-6 text-accent" />
                            {category.category}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="space-y-4">
                          <div className="grid gap-3">
                            {category.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mt-2 flex-shrink-0"></div>
                                <div className="space-y-2 flex-1">
                                  <div className="flex justify-between items-start gap-3">
                                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                                    <Badge variant="outline" className="text-xs whitespace-nowrap bg-gradient-to-r from-muted/50 to-muted/30 hover:from-accent/20 hover:to-accent/10 border border-border/30 hover:border-accent/50 transition-all duration-300">
                                      {item.achievement}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
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

export default Activities;