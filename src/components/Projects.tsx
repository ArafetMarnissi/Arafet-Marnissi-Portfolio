import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Database, Eye, FileText, Users, BarChart3, Network, GitBranch } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Jira Co-Pilot - Multi-Agent RAG System",
      description: "Designed and deployed end-to-end multi-agent RAG system transforming Jira archives into a Knowledge Graph. Orchestrated hierarchical AI architecture with LangGraph including automatic correction loop. Developed complete ETL pipeline for Knowledge Graph construction in Weaviate, enabling semantic, structured, and graph queries.",
      technologies: ["Python", "FastAPI", "LangGraph", "Weaviate", "PostgreSQL", "React", "Docker", "Kubernetes (GKE)", "GitLab CI/CD", "Terraform", "Knowledge Graph", "RAG"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Brain,
      iconColor: "text-purple-400",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-blue-600/20"
    },
    {
      title: "Knowledge Graph-based Recommendation System for Risk Management",
      description: "Developed knowledge graph to support risk management in project management, based on PMBOK® Guide - Seventh Edition and Standard for Risk Management. Created recommendation system proposing mitigation strategies by analyzing identified risks, stakeholder relationships, and historical project data. Improved risk assessment, detection, and strategic decision-making support.",
      technologies: ["Knowledge Graph", "Python", "Recommendation Systems", "Risk Management", "PMBOK", "Graph Databases", "NLP", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Network,
      iconColor: "text-cyan-400",
      gradientFrom: "from-cyan-500/20",
      gradientTo: "to-blue-600/20"
    },
    {
      title: "Integrated Forecasting System for Inventory Management",
      description: "Developed integrated forecasting system for inventory management in petroleum depots using Spring Boot, Angular, and FastAPI. Improved inventory accuracy and optimized inventory management through predictive models, reducing stockouts and excess inventory by 20%. Optimized predictive maintenance and transport logistics, increasing on-time deliveries by 15% and reducing operational costs by 10%.",
      technologies: ["Spring Boot", "Angular", "FastAPI", "Python", "Machine Learning", "Time Series", "Predictive Models", "Inventory Optimization", "RESTful APIs"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: BarChart3,
      iconColor: "text-green-400",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-teal-600/20"
    },
    {
      title: "Customer Attrition Prediction System",
      description: "Developed machine learning models to analyze and predict customer attrition for banking sector. Created complete CI/CD pipeline for model training, testing, and deployment. Implemented MLOps best practices using DVC for data versioning and MLflow for experiment tracking. Deployed model via Flask web application.",
      technologies: ["Python", "Machine Learning", "Flask", "MLflow", "DVC", "CI/CD", "Predictive Analytics", "Banking AI"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: Database,
      iconColor: "text-blue-400",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-indigo-600/20"
    },
    {
      title: "Worker Registration Web Application",
      description: "Developed complete worker registration application for insurance company with user-friendly interface and robust security. Implemented RESTful APIs to handle all registration operations. Built authentication system using tokens and session management to secure application access.",
      technologies: ["Web Development", "RESTful APIs", "Authentication", "Session Management", "Frontend Development", "Backend Integration", "Security"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: Users,
      iconColor: "text-indigo-400",
      gradientFrom: "from-indigo-500/20",
      gradientTo: "to-purple-600/20"
    }
  ];

  return (
    <section className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world AI and ML projects across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border hover:border-accent transition-all duration-500 group hover:shadow-2xl hover:-translate-y-4 hover:rotate-1 transform-gpu ${
                project.featured ? 'md:col-span-1' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Project Icon with Enhanced Effects */}
              <div className={`relative overflow-hidden rounded-t-lg h-48 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}>
                <div className="relative z-10">
                  <project.icon 
                    className={`w-20 h-20 ${project.iconColor} transition-all duration-500 group-hover:scale-125 group-hover:rotate-12`}
                  />
                </div>
                
                {/* Tech pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-16 h-16 border border-current rounded-full opacity-30"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border border-current rounded-lg opacity-20"></div>
                  <div className="absolute top-1/2 right-8 w-8 h-8 border border-current rotate-45 opacity-25"></div>
                </div>
                
                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                  <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-4/5 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
              
              <CardHeader className="relative z-10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;