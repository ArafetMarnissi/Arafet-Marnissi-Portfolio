import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock } from "lucide-react";

// Import hackathon images
import orangeImg from "@/assets/hackathons/Orange summer challenge.png";
import aihackImg from "@/assets/hackathons/AIHACK.jpg";
import ainsImg from "@/assets/hackathons/AINS.jpg";
import ostImg from "@/assets/hackathons/OST.jpg";

const Hackathons = () => {
  const hackathons = [
    {
      title: "Orange Summer Challenge",
      event: "Orange Summer Challenge 2023",
      position: "3rd Place",
      prize: "Bronze Medal",
      description: "Secured third place with EpiSafe solution, an innovative AI-powered health monitoring system. Contributed as an AI Engineer, implementing machine learning algorithms for epileptic seizure detection and prediction.",
      team: "Team of 4",
      duration: "Summer 2023",
      technologies: ["AI Development", "Machine Learning", "Health Tech", "Python", "TensorFlow"],
      impact: "EpiSafe solution recognized for innovative healthcare AI application",
      image: orangeImg
    },
    {
      title: "AI Hackathon",
      event: "AI Innovation Challenge",
      position: "1st Place",
      prize: "Gold Medal",
      description: "Won first place in the AI Technical Challenge focused on advanced machine learning solutions. Developed cutting-edge AI models with superior performance in competition scenarios.",
      team: "Individual",
      duration: "Competition Period",
      technologies: ["Machine Learning", "Deep Learning", "AI Innovation", "Python", "TensorFlow", "Neural Networks"],
      impact: "Achieved highest performance among all participants in AI innovation challenge",
      image: aihackImg
    },
    {
      title: "AINS Innovation & AI Hackathon",
      event: "AINS 2023",
      position: "1st Place",
      prize: "Winner",
      description: "Won first place in a national hackathon focused on AI innovation and cutting-edge artificial intelligence solutions for societal impact.",
      team: "Team of 4",
      duration: "48 hours",
      technologies: ["Python", "Machine Learning", "AI Innovation", "Social Impact AI"],
      impact: "Recognized as top AI innovation team for social good",
      image: ainsImg
    },
    {
      title: "Open Startup Tunisia",
      event: "OST 2023",
      position: "1st Place",
      prize: "Premier Prix",
      description: "Achieved first place in a prestigious national startup competition demonstrating entrepreneurial excellence and innovative business solutions.",
      team: "Individual/Team",
      duration: "Competition Period",
      technologies: ["Entrepreneurship", "Business Innovation", "Startup Development"],
      impact: "National recognition for startup innovation and entrepreneurial excellence",
      image: ostImg
    }
  ];

  return (
    <section className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathon <span className="bg-gradient-primary bg-clip-text text-transparent">Victories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming innovative ideas into award-winning AI solutions under pressure
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-accent transition-all duration-500 group hover:shadow-2xl hover:-translate-y-2 transform-gpu">
              {/* Hackathon Image with Enhanced Effects */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Award Badge Overlay */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground backdrop-blur-sm">
                    <Trophy className="w-3 h-3 mr-1" />
                    {hackathon.position}
                  </Badge>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      {hackathon.title}
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">{hackathon.event}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-accent">{hackathon.prize}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {hackathon.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/20 p-2 rounded-lg">
                    <Users className="w-4 h-4" />
                    {hackathon.team}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground bg-secondary/20 p-2 rounded-lg">
                    <Clock className="w-4 h-4" />
                    {hackathon.duration}
                  </div>
                </div>
                
                <div className="bg-gradient-primary/10 p-4 rounded-lg border border-accent/20">
                  <p className="text-sm font-semibold text-accent mb-1">Impact:</p>
                  <p className="text-sm text-muted-foreground">{hackathon.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, techIndex) => (
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

export default Hackathons;