import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, MapPin, Calendar, ChevronLeft, ChevronRight, Mail, Github, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// Import images
import profilePhoto from "@/assets/profile-photo.jpg";
import centralelogo from "@/assets/school/logo-Centrale_Lille.png";
import espritLogo from "@/assets/school/esprit.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "AI Engineer & Data Scientist";
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll effect for conferences gallery
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isScrolling) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) return; // Don't scroll if content fits
    
    let scrollPosition = scrollContainer.scrollLeft;
    let direction = 1; // 1 for right, -1 for left
    
    const autoScroll = () => {
      if (!isScrolling) return;
      
      scrollPosition += direction * 1; // Scroll speed
      
      // Reverse direction at the ends
      if (scrollPosition >= maxScroll) {
        direction = -1;
        scrollPosition = maxScroll;
      } else if (scrollPosition <= 0) {
        direction = 1;
        scrollPosition = 0;
      }
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'auto' // Use 'auto' for smoother continuous scrolling
      });
    };
    
    const interval = setInterval(autoScroll, 50); // Slightly slower for better UX
    
    return () => clearInterval(interval);
  }, [isScrolling]);

  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  // Manual scroll functions
  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Temporarily disable auto-scroll
      setIsScrolling(false);
      
      container.scrollBy({
        left: -320, // Width of one card plus gap
        behavior: 'smooth'
      });
      
      // Re-enable auto-scroll after a delay
      setTimeout(() => {
        setIsScrolling(true);
      }, 2000);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      // Temporarily disable auto-scroll
      setIsScrolling(false);
      
      container.scrollBy({
        left: 320, // Width of one card plus gap
        behavior: 'smooth'
      });
      
      // Re-enable auto-scroll after a delay
      setTimeout(() => {
        setIsScrolling(true);
      }, 2000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden starry-bg">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-6">
          {/* Profile Photo with Enhanced Effects */}
          <div className="flex justify-center relative mt-20 animate-scale-in">
            <div className="relative">
              {/* Static Border with subtle glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-slow"></div>
              
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-tech-blue/30 shadow-glow relative z-10 animate-float">
                <AvatarImage 
                  src={profilePhoto}
                  alt="Jihed Ben Salah - Profile photo"
                />
                <AvatarFallback className="bg-tech-blue text-primary-foreground text-2xl font-bold">
                  JBS
                </AvatarFallback>
              </Avatar>
              
              {/* Enhanced Status Indicators */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center animate-bounce-subtle">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              Hey, I'm Jihed Ben Salah
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-text bg-clip-text text-transparent animate-fade-in leading-relaxed py-2" style={{animationDelay: '0.4s', animationFillMode: 'both', lineHeight: '1.3', paddingBottom: '0.5rem'}}>
              {displayText}
              <span className="animate-pulse">|</span>
            </h1>
            <div className="pt-2">
              <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
                Machine Learning Specialist | Data Scientist | AI Solutions Architect
              </h2>
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
              AI Engineer and Data Scientist based in Paris, France, with expertise in MLOps, RAG architectures, and Agentic AI systems. Proven track record of deploying production-ready machine learning solutions, developing intelligent automation systems, and architecting scalable data pipelines. Dual-degree graduate with hands-on experience across France, Germany, and Tunisia.
            </p>
          </div>

          {/* Education Section - Clean Modern Design */}
          <div className="py-8 animate-fade-in" style={{animationDelay: '1s', animationFillMode: 'both'}}>
            <div className="max-w-4xl mx-auto">
              {/* Simple Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/20 border border-border/40 mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium text-muted-foreground">Education</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Dual-Degree Graduate
                </h3>
                <p className="text-muted-foreground">
                  International academic excellence in AI and engineering
                </p>
              </div>

              {/* Timeline Style Education Cards */}
              <div className="relative">
                {/* Vertical line for timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-border via-accent/30 to-border"></div>
                
                <div className="space-y-8">
                  {/* École Centrale - Top */}
                  <div className="flex items-center justify-center animate-slide-in-left" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
                    <div className="w-full max-w-md mr-8 md:mr-16">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative group">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/5 to-tech-cyan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                            <img 
                              src={centralelogo}
                              alt="École Centrale de Lille" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-foreground">École Centrale de Lille</h4>
                              <span className="text-xs px-2 py-1 rounded-full bg-tech-purple/10 text-tech-purple border border-tech-purple/20">Completed</span>
                            </div>
                            <p className="text-sm text-accent font-medium mb-1">Master in Management & Artificial Intelligence</p>
                            <p className="text-xs text-muted-foreground mb-2">2024 - 2025 • Lille, France</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Advanced AI research and technology management
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-tech-purple rounded-full border-4 border-background shadow-lg z-10 flex-shrink-0"></div>
                    
                    <div className="w-full max-w-md ml-8 md:ml-16 opacity-0"></div>
                  </div>

                  {/* ESPRIT - Bottom */}
                  <div className="flex items-center justify-center animate-slide-in-right" style={{animationDelay: '1.4s', animationFillMode: 'both'}}>
                    <div className="w-full max-w-md mr-8 md:mr-16 opacity-0"></div>
                    
                    {/* Timeline dot */}
                    <div className="w-4 h-4 bg-tech-blue rounded-full border-4 border-background shadow-lg z-10 flex-shrink-0"></div>
                    
                    <div className="w-full max-w-md ml-8 md:ml-16">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative group">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/5 to-tech-cyan/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                            <img 
                              src={espritLogo}
                              alt="ESPRIT University" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-foreground">ESPRIT University</h4>
                              <span className="text-xs px-2 py-1 rounded-full bg-tech-blue/10 text-tech-blue border border-tech-blue/20">Completed</span>
                            </div>
                            <p className="text-sm text-accent font-medium mb-1">Software Engineering Degree</p>
                            <p className="text-xs text-muted-foreground mb-2">2019 - 2024 • Tunis, Tunisia</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              Software engineering foundations with AI specialization
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="mt-8 text-center animate-fade-in" style={{animationDelay: '1.6s', animationFillMode: 'both'}}>
                <div className="inline-flex items-center gap-6 px-6 py-3 rounded-full bg-muted/10 border border-border/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                    <span className="text-sm text-muted-foreground">5 Years</span>
                  </div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-tech-purple rounded-full"></div>
                    <span className="text-sm text-muted-foreground">2 Countries</span>
                  </div>
                  <div className="w-px h-4 bg-border"></div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Dual Expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Achievements Section */}
          <div className="py-8 animate-fade-in" style={{animationDelay: '1.6s', animationFillMode: 'both'}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                <span 
                  className="bg-gradient-text bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220 91% 55%), hsl(195 100% 60%), hsl(240 80% 60%))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  Making an Impact
                </span>
              </h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Driving AI innovation through hands-on education, strategic mentorship, and scalable solutions
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <div className="h-px bg-gradient-to-r from-transparent via-tech-cyan/50 to-transparent w-16"></div>
                <div className="w-1.5 h-1.5 bg-tech-cyan rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-tech-purple/50 to-transparent w-16"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {/* AI Workshops */}
              <div className="group animate-scale-in bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '1.7s', animationFillMode: 'both'}}>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-tech-cyan">30+</div>
                  <div className="text-xs text-muted-foreground leading-tight">AI/ML Workshops</div>
                  <div className="w-8 h-px bg-gradient-to-r from-tech-cyan to-tech-blue mx-auto opacity-60"></div>
                </div>
              </div>

              {/* Students Trained */}
              <div className="group animate-scale-in bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '1.8s', animationFillMode: 'both'}}>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-tech-blue">1000+</div>
                  <div className="text-xs text-muted-foreground leading-tight">Professionals Trained</div>
                  <div className="w-8 h-px bg-gradient-to-r from-tech-blue to-tech-purple mx-auto opacity-60"></div>
                </div>
              </div>

              {/* Startups Mentored */}
              <div className="group animate-scale-in bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '1.9s', animationFillMode: 'both'}}>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-tech-purple">5+</div>
                  <div className="text-xs text-muted-foreground leading-tight">Startups Mentored</div>
                  <div className="w-8 h-px bg-gradient-to-r from-tech-purple to-accent mx-auto opacity-60"></div>
                </div>
              </div>

              {/* Projects Completed */}
              <div className="group animate-scale-in bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '2.0s', animationFillMode: 'both'}}>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-accent">10+</div>
                  <div className="text-xs text-muted-foreground leading-tight">Projects Completed</div>
                  <div className="w-8 h-px bg-gradient-to-r from-accent to-tech-cyan mx-auto opacity-60"></div>
                </div>
              </div>

              {/* International Experience */}
              <div className="group animate-scale-in bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '2.1s', animationFillMode: 'both'}}>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">3</div>
                  <div className="text-xs text-muted-foreground leading-tight">Countries Experience</div>
                  <div className="w-8 h-px bg-gradient-to-r from-emerald-400 to-tech-cyan mx-auto opacity-60"></div>
                </div>
              </div>

              {/* Years of Experience */}
              <div className="group animate-scale-in bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl p-4 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{animationDelay: '2.2s', animationFillMode: 'both'}}>
                <div className="text-center space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">3+</div>
                  <div className="text-xs text-muted-foreground leading-tight">Years Experience</div>
                  <div className="w-8 h-px bg-gradient-to-r from-orange-400 to-tech-purple mx-auto opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="mt-6 text-center animate-slide-up" style={{animationDelay: '2.3s', animationFillMode: 'both'}}>
              <div className="max-w-4xl mx-auto bg-gradient-to-r from-card/20 via-card/40 to-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-5">
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1 text-left">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Driving AI Innovation</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Committed to democratizing AI knowledge and empowering the next generation of innovators through hands-on workshops, strategic mentorship, and production-ready project development.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Expanding Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 pt-6 animate-fade-in" style={{animationDelay: '2.6s', animationFillMode: 'both'}}>
            <a href="https://github.com/jihed-ben-salah" target="_blank" rel="noopener noreferrer" className="group text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 animate-float" style={{animationDelay: '2.8s'}}>
              <div className="p-3 rounded-full bg-background/10 group-hover:bg-accent/20 transition-colors">
                <Github className="w-6 h-6" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/ben-salah-jihed/" target="_blank" rel="noopener noreferrer" className="group text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 animate-float" style={{animationDelay: '3.0s'}}>
              <div className="p-3 rounded-full bg-background/10 group-hover:bg-accent/20 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
            </a>
            <a href="mailto:bensalah.jihed@outlook.com" className="group text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110 animate-float" style={{animationDelay: '3.2s'}}>
              <div className="p-3 rounded-full bg-background/10 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
            </a>
          </div>
          
          {/* Location & Availability Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Based in Paris, France</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Professional Activities Gallery */}
          <div className="mt-16 w-full">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                <span 
                  className="bg-gradient-text bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220 91% 55%), hsl(195 100% 60%), hsl(240 80% 60%))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                  }}
                >
                  Conferences & Events
                </span>
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Showcasing my journey through tech conferences, workshops, and professional gatherings
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <div className="h-px bg-gradient-to-r from-transparent via-tech-blue/50 to-transparent w-24"></div>
                <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                <div className="h-px bg-gradient-to-r from-transparent via-tech-purple/50 to-transparent w-24"></div>
              </div>
            </div>
            
            <div className="relative overflow-hidden bg-gradient-to-r from-background via-tech-blue/5 to-background rounded-2xl p-8">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-8 w-32 h-32 bg-tech-blue/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 right-8 w-40 h-40 bg-tech-purple/8 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-tech-cyan/5 rounded-full blur-3xl"></div>
              </div>
              
              {/* Scrollable container */}
              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={scrollRight}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div 
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 px-2 snap-x snap-mandatory"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    scrollBehavior: 'smooth',
                    scrollSnapType: 'x mandatory'
                  }}
                >
                  {/* Photo cards */}
                  {[
                    {
                      src: "/assets/conferences/vivatech-2025-paris.jpg",
                      title: "VivaTech 2025",
                      location: "Paris, France",
                      type: "Conference",
                      date: "2025"
                    },
                    {
                      src: "/assets/conferences/aihackflow-conference-2023.jpg", 
                      title: "AI HackFlow Conference",
                      location: "ESPRIT University",
                      type: "Conference",
                      date: "2023"
                    },
                    {
                      src: "/assets/conferences/presenting-aihackflow-2023.jpg",
                      title: "Presenting at AI HackFlow",
                      location: "ESPRIT University",
                      type: "Presentation",
                      date: "2023"
                    },
                    {
                      src: "/assets/conferences/aihackflow-competition-2023.jpg",
                      title: "AI HackFlow Competition",
                      location: "ESPRIT University",
                      type: "Competition",
                      date: "2023"
                    },
                    {
                      src: "/assets/conferences/cariad-hack-munich-2024.jpeg",
                      title: "CARIAD Hack by VW Group",
                      location: "Munich, Germany",
                      type: "Hackathon",
                      date: "2024"
                    },
                    {
                      src: "/assets/conferences/deepflow-workshop-2023.jpg",
                      title: "DeepFlow Workshop",
                      location: "ESPRIT University",
                      type: "Workshop",
                      date: "2023"
                    },
                    {
                      src: "/assets/conferences/innovation-hack-2022.jpg",
                      title: "Innovation Hack 2022",
                      location: "Sousse, Tunisia",
                      type: "Hackathon",
                      date: "2022"
                    },
                    {
                      src: "/assets/conferences/ost-event-2023.jpg",
                      title: "Open Startup Tunisia Event",
                      location: "Tunisia",
                      type: "Event",
                      date: "2023"
                    }
                  ].map((photo, index) => (
                    <div
                      key={index}
                      className="flex-none w-80 h-48 relative rounded-2xl overflow-hidden border border-tech-blue/20 hover:border-accent/60 transition-all duration-500 hover:scale-105 hover:-translate-y-2 snap-center group shadow-lg hover:shadow-2xl hover:shadow-accent/20"
                    >
                      {/* Enhanced placeholder background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-cyan-600/20">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6">
                          {/* Top section with type badge */}
                          <div className="flex justify-between items-start">
                            <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                              {photo.type}
                            </div>
                            <div className="text-xs text-white/70 font-medium">
                              {photo.date}
                            </div>
                          </div>
                          
                          {/* Bottom section with title and location */}
                          <div className="space-y-2">
                            <h4 className="text-white font-bold text-lg leading-tight">{photo.title}</h4>
                            <p className="text-white/80 text-sm flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {photo.location}
                            </p>
                          </div>
                        </div>
                        
                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-tech-blue via-tech-purple to-tech-cyan opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                      </div>
                      
                      {/* Background image - only visible on hover */}
                      <img 
                        src={photo.src}
                        alt={photo.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-110"
                        onError={(e) => {
                          console.warn(`Failed to load image: ${photo.src}`);
                          e.currentTarget.style.opacity = '0';
                        }}
                      />
                      
                      {/* Enhanced hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Enhanced hover content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="space-y-2">
                          <h4 className="font-bold text-lg">{photo.title}</h4>
                          <p className="text-white/90 text-sm flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {photo.location}
                          </p>
                          <div className="flex items-center gap-2 pt-2">
                            <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                              {photo.type}
                            </div>
                            <div className="text-xs text-white/70">
                              {photo.date}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced scroll indicators with auto-scroll status */}
                <div className="flex justify-center items-center gap-4 mt-8">
                  <div className="flex space-x-3">
                    {Array.from({length: 6}).map((_, index) => (
                      <div 
                        key={index}
                        className="relative group cursor-pointer"
                      >
                        <div className="w-3 h-3 rounded-full bg-tech-blue/20 group-hover:bg-tech-blue/60 transition-all duration-300 group-hover:scale-125"></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Manual navigation hint */}
                  <div className="flex items-center gap-3 ml-4">
                    {/* Auto-scroll indicator */}
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isScrolling ? 'bg-green-400 animate-pulse' : 'bg-orange-400'}`}></div>
                      <span className="text-xs text-muted-foreground">
                        {isScrolling ? 'Auto-scrolling' : 'Paused'}
                      </span>
                    </div>
                    
                    {/* Navigation hint */}
                    <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
                      <span>Use</span>
                      <div className="flex items-center gap-1">
                        <ChevronLeft className="w-3 h-3" />
                        <ChevronRight className="w-3 h-3" />
                      </div>
                      <span>to navigate</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Side gradients for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;