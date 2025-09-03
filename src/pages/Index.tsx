import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Zap, MessageSquare, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-lobby.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero opacity-80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-gold/10 text-gold border-gold/20 hover:bg-gold/20 transition-smooth">
            ✨ The Future of Hospitality
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Replace Your Front Desk with 
            <span className="gradient-gold bg-clip-text text-transparent block mt-2">
              AI Agents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Deliver 24/7 luxury hospitality service with intelligent AI agents that never sleep, 
            never make mistakes, and always exceed guest expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-gold hover:bg-gold/90 text-luxury font-semibold px-8 py-4 shadow-gold transition-bounce">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 transition-smooth">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Why Hotels Choose AI Agents
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your guest experience while reducing costs and improving efficiency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Never miss a guest inquiry. AI agents work around the clock to provide instant responses and assistance."
              },
              {
                icon: Zap,
                title: "Lightning Fast Service",
                description: "Instant check-ins, immediate room service orders, and rapid problem resolution without wait times."
              },
              {
                icon: Users,
                title: "Consistent Excellence",
                description: "Every interaction delivers the same high-quality, professional service your brand promises."
              },
              {
                icon: MessageSquare,
                title: "Multi-Language Support",
                description: "Communicate fluently with international guests in their preferred language."
              },
              {
                icon: Star,
                title: "Personalized Experience",
                description: "Remember guest preferences and tailor services to create memorable, personalized stays."
              },
              {
                icon: CheckCircle,
                title: "Cost Effective",
                description: "Reduce staffing costs while improving service quality and guest satisfaction scores."
              }
            ].map((benefit, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-luxury transition-smooth border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="text-xl text-primary">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple setup, powerful results in just three steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Easy Integration",
                description: "Connect our AI agents to your existing hotel management system in minutes, not months."
              },
              {
                step: "02",
                title: "Custom Training",
                description: "We train your AI agents on your hotel's specific services, policies, and brand voice."
              },
              {
                step: "03",
                title: "Launch & Monitor",
                description: "Go live with full support and continuous monitoring to ensure optimal performance."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-gold flex items-center justify-center shadow-gold">
                    <span className="text-2xl font-bold text-luxury">{step.step}</span>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold to-gold/20 transform translate-x-10" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Trusted by Leading Hotels
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of hotels already using AI agents
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Our guest satisfaction scores increased by 40% after implementing AI agents. The 24/7 availability has been a game-changer.",
                author: "Sarah Mitchell",
                role: "General Manager",
                hotel: "Luxury Suites Downtown"
              },
              {
                quote: "We've reduced front desk staffing costs by 60% while actually improving our service quality. It's remarkable.",
                author: "David Chen",
                role: "Operations Director", 
                hotel: "Metro Business Hotel"
              },
              {
                quote: "The multilingual support has opened our doors to international guests like never before. Bookings are up 35%.",
                author: "Maria Rodriguez",
                role: "Hotel Manager",
                hotel: "Seaside Resort & Spa"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-elegant">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-gold font-medium">{testimonial.hotel}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Hotel?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the hospitality revolution. Start your free trial today and see the difference AI agents can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" className="bg-gold hover:bg-gold/90 text-luxury font-semibold px-8 py-4 shadow-gold transition-bounce">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 transition-smooth">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-white/70 mt-6">
            No credit card required • 30-day free trial • Setup in 24 hours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;