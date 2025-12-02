import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Collaborate from "@/components/Collaborate";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="activities">
          <Activities />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="collaborate">
          <Collaborate />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Enhanced Dynamic Footer */}
      <footer className="py-20 px-6 starry-bg relative overflow-hidden border-t border-accent/20">
        {/* Subtle background overlay - more transparent to let starry background show through */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-background/10"></div>
        
        {/* Enhanced Floating decorative elements - more prominent starry effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Primary floating stars */}
          <div className="absolute top-4 left-1/4 w-1 h-1 bg-accent rounded-full animate-float opacity-60"></div>
          <div className="absolute top-8 right-1/3 w-1.5 h-1.5 bg-tech-purple rounded-full animate-float-delayed opacity-40"></div>
          <div className="absolute bottom-6 left-1/2 w-1 h-1 bg-tech-cyan rounded-full animate-float opacity-50"></div>
          
          {/* Additional starry elements */}
          <div className="absolute top-12 left-1/6 w-0.5 h-0.5 bg-accent/70 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-20 right-1/4 w-1 h-1 bg-tech-blue rounded-full animate-float opacity-50"></div>
          <div className="absolute bottom-16 left-1/3 w-0.5 h-0.5 bg-tech-cyan/60 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute bottom-10 right-1/6 w-1 h-1 bg-tech-purple/50 rounded-full animate-float-delayed opacity-60"></div>
          <div className="absolute top-6 left-3/4 w-0.5 h-0.5 bg-accent/50 rounded-full animate-pulse opacity-90"></div>
          <div className="absolute bottom-20 right-2/3 w-1 h-1 bg-tech-cyan/70 rounded-full animate-float opacity-40"></div>
          
          {/* Larger background decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-tech-blue/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/5 via-tech-purple/3 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-1/3 w-36 h-36 bg-gradient-to-tr from-tech-cyan/4 to-tech-purple/2 rounded-full blur-3xl animate-float-delayed"></div>
          
          {/* Subtle moving lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-purple/8 to-transparent opacity-40"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center space-y-6">
            {/* Main credit section */}
            <div className="group hover:scale-105 transition-all duration-500 cursor-default">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-card/10 to-card/5 backdrop-blur-md border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <div className="w-2 h-2 bg-gradient-to-r from-accent to-tech-purple rounded-full animate-pulse"></div>
                <span className="text-sm font-medium bg-gradient-to-r from-foreground via-accent to-tech-cyan bg-clip-text text-transparent group-hover:from-accent group-hover:to-tech-purple transition-all duration-500">
                  Crafted with passion
                </span>
                <div className="w-2 h-2 bg-gradient-to-r from-tech-purple to-accent rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Developer credit */}
            <div className="space-y-2">
              <p className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent hover:from-accent hover:to-accent/80 transition-all duration-300">
                Portfolio by <span className="font-bold text-accent">Arafet Marnissi</span>
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <span>©</span>
                <span className="font-medium text-accent">2025</span>
                <span>•</span>
                <span>All rights reserved</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      </footer>
    </div>
  );
};

export default Index;
