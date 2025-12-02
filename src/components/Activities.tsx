import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Mic, GraduationCap, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Activities = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedNLP, setExpandedNLP] = useState(false);
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
      category: "Mentoring & Leadership",
      icon: Users,
      items: [
        {
          title: "DeepFlow AI - Mentor",
          description: "Optimized course delivery by offering online training in workshop format with pre-prepared resources and on-site mentoring. Trained 50 students in one year, enabling club expansion to two new school branches.",
          achievement: "09/2022 - 12/2024"
        },
        {
          title: "AI Hackflow West World Edition - Organizer",
          description: "Organized and supported AI Hackflow West World Edition event hosted by DeepFlow",
          achievement: "Oct 19-20, 2024"
        }
      ]
    },
    {
      category: "AI & Deep Learning Certifications",
      icon: GraduationCap,
      items: [
        {
          title: "Generative AI with Diffusion Models",
          description: "NVIDIA - Advanced workshop certification in generative AI focusing on diffusion models and their applications",
          achievement: "June 2024",
          link: "https://learn.nvidia.com/certificates?id=YEcrY9JfQNqpbjibvkBFnA"
        },
        {
          title: "Natural Language Processing Specialization",
          description: "DeepLearning.AI - Comprehensive 4-course specialization covering NLP with Classification, Vector Spaces, Probabilistic Models, Sequence Models, and Attention Models",
          achievement: "Nov 2024",
          isExpandable: true,
          subCertificates: [
            {
              title: "Natural Language Processing with Attention Models",
              link: "https://coursera.org/verify/NQ2DQXDXVYHM"
            },
            {
              title: "Natural Language Processing with Classification and Vector Spaces",
              link: "https://coursera.org/verify/2N3ZRIPA2I1B"
            },
            {
              title: "Natural Language Processing with Probabilistic Models",
              link: "https://coursera.org/verify/HT0S5TX1I4R0"
            },
            {
              title: "Natural Language Processing with Sequence Models",
              link: "https://coursera.org/verify/ZHZCOZTG22IM"
            }
          ]
        },
        {
          title: "Fundamentals of Deep Learning",
          description: "Comprehensive certification covering deep learning fundamentals and neural network architectures",
          achievement: "Certified",
          link: "https://courses.nvidia.com/certificates/33622a947f7146ce9239084ed82ae532/"
        },
        {
          title: "Building Transformer-Based NLP Applications",
          description: "Workshop certification on building transformer-based natural language processing applications",
          achievement: "Workshop",
          link: "https://learn.nvidia.com/certificates?id=dYWXn1lSRHi74gpuuotPSA"
        }
      ]
    },
    {
      category: "Cloud & Professional Development",
      icon: Award,
      items: [
        {
          title: "Microsoft Azure Management Tools and Security Solutions",
          description: "Microsoft via Coursera - Comprehensive training on Azure management, tools, and security implementations",
          achievement: "Nov 2024",
          link: "https://coursera.org/verify/6L5LQ2QBKSWG"
        },
        {
          title: "Microsoft Azure Services and Lifecycles",
          description: "Microsoft via Coursera - In-depth understanding of Azure services architecture and lifecycle management",
          achievement: "Nov 2024",
          link: "https://coursera.org/verify/KO9EKESYYQ1M"
        },
        {
          title: "Honoris Sustainability, Work Ethics & Gender Equity",
          description: "Honoris United Universities - Focus on Climate Change Mitigation, Ethical Decision-Making, Data Governance, and Innovation for Sustainable Development. Blockchain Certificate issued",
          achievement: "Dec 2024",
          link: "https://certificate.bcdiploma.com/check/C5DB00147043CD88C8196D603BE22E0C76D05FD951291CA208BB98DE16104BD0UzdRWUIyVmtRSmlxSk43eGI2bitJeTl4RkFnLzNqOFN4ekJPZGExT3NWd3VMUC9K"
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
            Mentoring the next generation and continuously advancing AI expertise
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
                                    {item.link ? (
                                      <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="font-semibold text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                                      >
                                        {item.title}
                                        <svg 
                                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                                          fill="none" 
                                          stroke="currentColor" 
                                          viewBox="0 0 24 24"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                      </a>
                                    ) : item.isExpandable ? (
                                      <button
                                        onClick={() => setExpandedNLP(!expandedNLP)}
                                        className="font-semibold text-foreground hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                                      >
                                        {item.title}
                                        {expandedNLP ? (
                                          <ChevronUp className="w-4 h-4 text-accent" />
                                        ) : (
                                          <ChevronDown className="w-4 h-4 text-accent" />
                                        )}
                                      </button>
                                    ) : (
                                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                                    )}
                                    <Badge variant="outline" className="text-xs whitespace-nowrap bg-gradient-to-r from-muted/50 to-muted/30 hover:from-accent/20 hover:to-accent/10 border border-border/30 hover:border-accent/50 transition-all duration-300">
                                      {item.achievement}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                  </p>
                                  
                                  {/* Expandable sub-certificates section */}
                                  {item.isExpandable && expandedNLP && item.subCertificates && (
                                    <div className="mt-3 pl-4 space-y-2 border-l-2 border-accent/30 animate-fade-in">
                                      {item.subCertificates.map((subCert, subIndex) => (
                                        <a
                                          key={subIndex}
                                          href={subCert.link}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300 group"
                                        >
                                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                          <span className="group-hover:underline">{subCert.title}</span>
                                          <svg 
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                          >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                          </svg>
                                        </a>
                                      ))}
                                    </div>
                                  )}
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