import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, ArrowRight, Zap, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // EmailJS Configuration (Free solution - 200 emails/month)
      const EMAILJS_SERVICE_ID = 'service_wcmwrvk'; // Your EmailJS service ID ✅
      const EMAILJS_TEMPLATE_ID = 'template_yushay9'; // Your EmailJS template ID ✅
      const EMAILJS_PUBLIC_KEY = 'J76jxRpzOcDVd9Vym'; // Your EmailJS public key ✅
      
      // Real EmailJS submission - completely free!
      const emailParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Arafet Marnissi', // Your name
        };

        // Send email using EmailJS (no backend required!)
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: emailParams,
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setSubmitStatus('success');
          
          // Reset form after 4 seconds
          setTimeout(() => {
            setIsSubmitted(false);
            setSubmitStatus('idle');
            setFormData({ name: '', email: '', message: '' });
          }, 4000);
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      // Reset error state after 4 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getButtonClasses = () => {
    const baseClasses = "w-full transition-all duration-300 relative overflow-hidden group/submit hover:shadow-2xl";
    if (submitStatus === 'success') return `${baseClasses} bg-green-600 hover:bg-green-700 hover:shadow-green-500/20`;
    if (submitStatus === 'error') return `${baseClasses} bg-red-600 hover:bg-red-700 hover:shadow-red-500/20`;
    return `${baseClasses} bg-gradient-primary hover:scale-105 hover:shadow-accent/20`;
  };

  const getButtonContent = () => {
    if (isSubmitting) {
      return (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
          <span className="animate-pulse">Sending your message...</span>
        </div>
      );
    }
    
    if (submitStatus === 'success') {
      return (
        <div className="flex items-center justify-center">
          <CheckCircle className="w-5 h-5 mr-3 animate-bounce" />
          <span>Message Sent Successfully!</span>
        </div>
      );
    }
    
    if (submitStatus === 'error') {
      return (
        <div className="flex items-center justify-center">
          <Zap className="w-5 h-5 mr-3 animate-pulse" />
          <span>Failed to Send - Try Again</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center justify-center group-hover/submit:scale-110 transition-transform duration-200">
        <Send className="w-5 h-5 mr-3 group-hover/submit:animate-pulse" />
        <span>Send Message</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover/submit:translate-x-1 transition-transform duration-200" />
      </div>
    );
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 starry-bg relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        {/* Dynamic Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
            <MessageCircle className="w-4 h-4 text-purple-400 animate-pulse-slow" />
            <span className="text-sm font-medium text-purple-300">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build the future of AI together? Let's collaborate on innovative projects that push the boundaries of what's possible
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-tech-blue rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-tech-purple rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-tech-cyan rounded-full animate-float-delayed"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Enhanced Contact Information */}
          <div className={`space-y-8 transition-all duration-700 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Methods */}
            <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border hover:border-accent/50 hover:scale-[1.02] relative overflow-hidden"
                  onMouseEnter={() => setActiveCard(0)}
                  onMouseLeave={() => setActiveCard(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl flex items-center gap-3 group-hover:text-accent transition-colors duration-300">
                  <Sparkles className="w-6 h-6 text-accent animate-pulse group-hover:animate-spin" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/10 hover:bg-muted/20 transition-all duration-300 group/item hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent/20 to-tech-blue/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <Mail className="w-6 h-6 text-accent group-hover/item:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-accent transition-colors duration-300">Email</p>
                    <p className="text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer">arafet.marnissi.ia@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/10 hover:bg-muted/20 transition-all duration-300 group/item hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-purple/20 to-accent/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <Phone className="w-6 h-6 text-tech-purple group-hover/item:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-tech-purple transition-colors duration-300">Phone</p>
                    <p className="text-muted-foreground hover:text-tech-purple transition-colors duration-300 cursor-pointer">+216 26845815</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/10 hover:bg-muted/20 transition-all duration-300 group/item hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-cyan/20 to-accent/20 rounded-xl flex items-center justify-center group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-tech-cyan group-hover/item:animate-pulse" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover/item:text-tech-cyan transition-colors duration-300">Location</p>
                    <p className="text-muted-foreground hover:text-tech-cyan transition-colors duration-300">Ariana, Tunisia ��</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Dynamic Contact Form */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <Card className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border border-border hover:border-accent/50 hover:scale-[1.02] relative overflow-hidden"
                  onMouseEnter={() => setActiveCard(2)}
                  onMouseLeave={() => setActiveCard(null)}>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-tech-purple/3 to-tech-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-tech-purple/6 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl flex items-center gap-3 group-hover:text-accent transition-all duration-300">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 text-green-500 animate-pulse" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 text-accent group-hover:animate-pulse" />
                      Send a Message
                    </>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {isSubmitted ? "Thank you for reaching out! I'll respond within 24 hours." : "Let's build the future of AI together - discuss your next project or collaboration opportunity"}
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="relative inline-block">
                      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
                      <div className="absolute inset-0 w-20 h-20 bg-green-500/20 rounded-full animate-ping"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 animate-fade-in">Awesome!</h3>
                    <p className="text-muted-foreground mb-6 animate-slide-up">Your message has been delivered successfully. I'm excited to connect with you!</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-accent animate-pulse">
                      <Sparkles className="w-4 h-4" />
                      <span>Expect a response within 24 hours</span>
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group/input">
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block group-hover/input:text-accent transition-colors duration-300">
                        Full Name *
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name" 
                        required
                        className="transition-all duration-300 focus:scale-[1.02] hover:border-accent/50 focus:border-accent group-hover/input:shadow-lg group-hover/input:shadow-accent/10"
                      />
                    </div>
                    
                    <div className="group/input">
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block group-hover/input:text-accent transition-colors duration-300">
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com" 
                        required
                        className="transition-all duration-300 focus:scale-[1.02] hover:border-accent/50 focus:border-accent group-hover/input:shadow-lg group-hover/input:shadow-accent/10"
                      />
                    </div>
                    
                    <div className="group/input">
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block group-hover/input:text-accent transition-colors duration-300">
                        Message *
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your AI project, collaboration idea, or just say hello! I'm always excited to explore innovative opportunities." 
                        rows={5}
                        required
                        className="transition-all duration-300 focus:scale-[1.02] hover:border-accent/50 focus:border-accent group-hover/input:shadow-lg group-hover/input:shadow-accent/10 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className={getButtonClasses()}
                      disabled={isSubmitting}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover/submit:translate-x-full transition-transform duration-1000"></div>
                      {getButtonContent()}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/10 to-tech-purple/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 0 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-tech-cyan/10 to-accent/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 1 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
          <div className={`absolute bottom-1/4 left-1/2 w-56 h-56 bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 rounded-full blur-3xl transition-all duration-1000 ${activeCard === 2 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;