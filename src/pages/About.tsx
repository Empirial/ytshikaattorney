import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Award, Users, Calendar, Target } from "lucide-react";


const About = () => {
  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20learn%20more%20about%20your%20firm...";

  const values = [
    {
      icon: Target,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our legal practices and client relationships."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your needs and success are our priority. We provide personalized attention to every case."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every case, combining experience with innovative legal strategies."
    },
    {
      icon: Calendar,
      title: "Reliability",
      description: "Count on us to be there when you need us most, with consistent and dependable service."
    }
  ];

  const achievements = [
    { year: "2008", milestone: "Firm established by Yondela Tshika" },
    { year: "2012", milestone: "First major RAF case victory - R2.5M settlement" },
    { year: "2015", milestone: "Expanded to family law and civil litigation" },
    { year: "2018", milestone: "Reached 500+ successful cases" },
    { year: "2020", milestone: "Introduced 24/7 WhatsApp support" },
    { year: "2024", milestone: "Over R50M recovered for clients" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-legal text-4xl md:text-5xl font-bold mb-6">
                About Y Tshika Attorneys
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Building trust through legal excellence since 2008. We are a South African law firm 
                committed to defending justice with integrity, providing personalized legal solutions 
                that achieve real results for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-legal text-3xl font-bold text-navy mb-6">
                  Meet Our Principal Attorney
                </h2>
                <h3 className="text-2xl font-semibold text-accent mb-4">
                  Yondela Tshika, LLB
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 15 years of legal experience, Yondela Tshika has built a reputation 
                  as one of South Africa's most trusted attorneys. Specializing in criminal defense, 
                  RAF claims, and civil litigation, he has successfully represented hundreds of 
                  clients across diverse legal matters.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Mr. Tshika's approach combines thorough legal knowledge with genuine compassion 
                  for his clients. He believes that every person deserves quality legal representation, 
                  regardless of their background or circumstances.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">LLB Degree</Badge>
                  <Badge variant="secondary">Admitted Attorney</Badge>
                  <Badge variant="secondary">15+ Years Experience</Badge>
                  <Badge variant="secondary">Criminal Law Specialist</Badge>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-hero">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Speak with Mr. Tshika
                  </Button>
                </a>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Yondela Tshika - Principal Attorney"
                    className="w-full rounded-xl shadow-[var(--shadow-elegant)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-legal text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every case we handle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="card-elegant text-center">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mb-4">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="font-semibold text-lg text-navy mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-legal text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Key milestones in our commitment to legal excellence and client service.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-accent"></div>

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                    } md:w-1/2`}>
                      <Card className="card-elegant">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-accent mb-2">
                            {achievement.year}
                          </div>
                          <p className="text-navy font-medium">
                            {achievement.milestone}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-legal text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Experience the difference that dedicated, professional legal representation can make. 
              Contact us today for a consultation.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="btn-gold text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Consultation
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;