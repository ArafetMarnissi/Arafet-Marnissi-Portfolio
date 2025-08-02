import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Collaborate = () => {
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

  return (
    <section ref={sectionRef} className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-card/8 to-card/4 backdrop-blur-lg border border-border/15 rounded-3xl p-10 max-w-5xl mx-auto relative overflow-hidden group hover:shadow-2xl hover:shadow-accent/15 transition-all duration-700 hover:scale-[1.02] cursor-pointer">
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/4 via-tech-purple/3 to-tech-cyan/4 opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-gradient-to-br from-accent/6 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-gradient-to-tr from-tech-cyan/5 to-transparent rounded-full blur-2xl group-hover:animate-pulse"></div>
            <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-accent/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/8 to-tech-cyan/8 border border-accent/15 mb-6 group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20">
                <Briefcase className="w-4 h-4 text-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Let's Connect</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-accent to-tech-cyan bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform duration-500">
                Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Collaborate?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                Let's discuss how my expertise in <span className="text-accent font-semibold animate-pulse">MLOps</span>, <span className="text-tech-cyan font-semibold">RAG architectures</span>, <span className="text-tech-purple font-semibold">LLM deployment</span>, <span className="text-tech-blue font-semibold">Agentic AI systems</span>, <span className="text-accent font-semibold">backend development</span>, and <span className="text-tech-cyan font-semibold">production solutions creation</span> can drive your next breakthrough project.
              </p>
              
              {/* Enhanced Action Areas */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-4xl mx-auto">
                <div className="group/action flex items-center gap-4 p-5 bg-muted/8 rounded-2xl border border-border/10 hover:border-accent/25 transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-lg hover:shadow-blue-500/15 cursor-pointer min-w-[250px]">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-blue/15 to-tech-blue/5 rounded-xl flex items-center justify-center group-hover/action:scale-110 group-hover/action:rotate-12 transition-all duration-300">
                    <Globe className="w-6 h-6 text-tech-blue animate-spin-slow" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-semibold text-foreground group-hover/action:text-tech-blue transition-colors duration-300">AI Solutions</h4>
                    <p className="text-sm text-muted-foreground group-hover/action:text-tech-blue/70">Enterprise & Research</p>
                  </div>
                </div>
                
                <div className="group/action flex items-center gap-4 p-5 bg-muted/8 rounded-2xl border border-border/10 hover:border-accent/25 transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-lg hover:shadow-purple-500/15 cursor-pointer min-w-[250px]">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-purple/15 to-tech-purple/5 rounded-xl flex items-center justify-center group-hover/action:scale-110 group-hover/action:-rotate-12 transition-all duration-300">
                    <Calendar className="w-6 h-6 text-tech-purple animate-pulse" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-semibold text-foreground group-hover/action:text-tech-purple transition-colors duration-300">Consulting</h4>
                    <p className="text-sm text-muted-foreground group-hover/action:text-tech-purple/70">Strategy & Implementation</p>
                  </div>
                </div>
                
                <div className="group/action flex items-center gap-4 p-5 bg-muted/8 rounded-2xl border border-border/10 hover:border-accent/25 transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-lg hover:shadow-cyan-500/15 cursor-pointer min-w-[250px]">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-cyan/15 to-tech-cyan/5 rounded-xl flex items-center justify-center group-hover/action:scale-110 group-hover/action:rotate-12 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-tech-cyan animate-bounce-slow" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-semibold text-foreground group-hover/action:text-tech-cyan transition-colors duration-300">Global Projects</h4>
                    <p className="text-sm text-muted-foreground group-hover/action:text-tech-cyan/70">Remote & On-site</p>
                  </div>
                </div>
              </div>
              
              {/* Book Consultation Button */}
              <div className="mt-8 text-center">
                <a 
                  href="https://calendly.com/jihed-bensalah-ai/30-min-meeting" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-gradient-to-r from-accent via-tech-cyan to-tech-blue hover:from-tech-blue hover:via-accent hover:to-tech-cyan text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-accent/30 relative overflow-hidden group/btn border border-accent/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      <Calendar className="w-6 h-6 group-hover/btn:animate-pulse" />
                      Book Free Consultation
                    </div>
                  </button>
                </a>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-10 left-10 w-2 h-2 bg-accent/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-tech-cyan/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-16 left-20 w-1 h-1 bg-tech-purple/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
