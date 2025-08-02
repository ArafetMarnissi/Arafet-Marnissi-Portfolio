import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Bot, Database, Eye, FileText, Users, BarChart3, Network, GitBranch } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Medical Agentic RAG",
      description: "Designed and implemented a multimodal RAG architecture achieving 95% accuracy in medical query resolution, with Django backend for precise answer extraction using Agentic AI and LLMs for heterogeneous medical datasets.",
      technologies: ["Python", "LangChain", "NLP", "Streamlit", "Django", "FastAPI", "Transformers", "Azure", "Qdrant", "MLflow", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Brain,
      iconColor: "text-purple-400",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-blue-600/20"
    },
    {
      title: "Government Website Chatbot",
      description: "Built an NLP-powered chatbot achieving 92% user satisfaction for government websites with automated data extraction, fine-tuned RoBERTa model, and Flask backend API for seamless integration.",
      technologies: ["RoBERTa", "CamemBERT", "TF-IDF", "Scrapy", "PyTorch", "Transformers", "Flask", "RESTful API"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Bot,
      iconColor: "text-green-400",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-teal-600/20"
    },
    {
      title: "Autonomous Vehicle ML Pipeline",
      description: "Developed machine learning pipeline for clustering autonomous vehicle scenarios with evaluation system and MLOps integration via Azure ML Pipelines.",
      technologies: ["Python", "PyTorch", "DBSCAN", "NumPy", "Pandas", "Azure Machine Learning", "MLflow"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Network,
      iconColor: "text-cyan-400",
      gradientFrom: "from-cyan-500/20",
      gradientTo: "to-blue-600/20"
    },
    {
      title: "Epileptic Seizure Prediction",
      description: "Created LSTM model for epileptic seizure prediction with AWS cloud architecture for data storage and model training, deployed on EmotiBit hardware.",
      technologies: ["LSTM", "TensorFlow Lite", "NumPy", "Pandas", "AWS S3", "SageMaker"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: BarChart3,
      iconColor: "text-red-400",
      gradientFrom: "from-red-500/20",
      gradientTo: "to-orange-600/20"
    },
    {
      title: "Legal AI Question-Answering",
      description: "Implemented instruction tuning and prompt engineering on GPT-J for legal Q&A tasks with LangChain integration and CI/CD deployment.",
      technologies: ["RAG", "Embedding", "Topic Modeling", "XGBClassifier", "Legal BERT", "LangChain", "AWS EC2"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: FileText,
      iconColor: "text-yellow-400",
      gradientFrom: "from-yellow-500/20",
      gradientTo: "to-orange-600/20"
    },
    {
      title: "Tunisian Sign Language App",
      description: "Gathering real Tunisian sign language data and developing a transformers-based approach for translation. Built a comprehensive Flask application to deploy AI models for real-time sign language recognition and translation.",
      technologies: ["Transformers", "PyTorch", "Computer Vision", "Flask", "Data Collection", "Sign Language Processing", "Deep Learning"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Eye,
      iconColor: "text-pink-400",
      gradientFrom: "from-pink-500/20",
      gradientTo: "to-rose-600/20"
    },
    {
      title: "Hackini Smart Matching System",
      description: "Built a production-ready intelligent matching system for the Hackini platform that recommends personalized hackathons to users based on their profiles and facilitates complementary team formation. Deployed on Azure with Django backend, leveraging NLP for profile analysis and recommendation algorithms.",
      technologies: ["Django", "NLP", "Python", "Azure", "Machine Learning", "Recommendation Systems", "Team Matching", "Cloud Deployment"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: Users,
      iconColor: "text-indigo-400",
      gradientFrom: "from-indigo-500/20",
      gradientTo: "to-purple-600/20"
    },
    {
      title: "Hackini Mermaid Diagram Agent",
      description: "Developed a specialized agentic AI system for automated Mermaid diagram creation to enhance project visualization for Hackini platform users. Built with advanced AI orchestration using LangChain and LangGraph frameworks, integrated with Django backend for seamless user experience.",
      technologies: ["LangChain", "LangGraph", "Django", "Agentic AI", "Python", "Diagram Generation", "AI Orchestration", "Project Visualization"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: GitBranch,
      iconColor: "text-emerald-400",
      gradientFrom: "from-emerald-500/20",
      gradientTo: "to-green-600/20"
    },
    {
      title: "ATM Cashflow Prediction App",
      description: "Developing an intelligent forecasting application for STB Bank ATMs to predict optimal cash flow requirements. Implemented advanced time series models and forecasting algorithms with RESTful API integration for real-time cash management optimization.",
      technologies: ["Time Series Analysis", "Forecasting Models", "RESTful APIs", "Python", "Machine Learning", "Financial Analytics", "Data Science", "Predictive Modeling"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: Database,
      iconColor: "text-blue-400",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-indigo-600/20"
    },
    {
      title: "Computer Vision Anomaly Detection",
      description: "Designed and deployed computer vision models for anomaly detection in production environments, improving defect verification efficiency.",
      technologies: ["TensorFlow", "YOLO", "Computer Vision", "MLOps", "Databricks"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: Eye,
      iconColor: "text-orange-400",
      gradientFrom: "from-orange-500/20",
      gradientTo: "to-red-600/20"
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
            Showcasing innovative AI solutions and machine learning applications
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