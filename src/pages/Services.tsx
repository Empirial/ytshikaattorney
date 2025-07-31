import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Gavel, 
  Heart, 
  FileText, 
  Shield, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20need%20legal%20assistance%20with...";

  const services = [
    {
      icon: Car,
      title: "Road Accident Fund (RAF) Claims",
      description: "Expert assistance with RAF claims for motor vehicle accident victims. We handle all paperwork and ensure maximum compensation for medical expenses, lost income, and pain & suffering.",
      process: ["Free consultation", "Medical assessment", "Claim submission", "Negotiation", "Settlement"],
      timeframe: "6-18 months",
      successRate: "95%",
      averageSettlement: "R500k - R2M",
      link: "/services/road-accident-fund-claims",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Gavel,
      title: "Criminal Law",
      description: "Comprehensive criminal defense representation for all types of criminal charges. We protect your rights throughout the legal process from arrest to appeal.",
      process: ["Arrest consultation", "Bail application", "Case preparation", "Trial representation", "Appeals"],
      timeframe: "3-24 months",
      successRate: "90%",
      averageSettlement: "Case dismissal/acquittal",
      link: "/services/criminal-law",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Heart,
      title: "Divorce & Family Law",
      description: "Compassionate legal support for family matters including divorce, custody, maintenance disputes, and domestic relations with care and sensitivity.",
      process: ["Initial consultation", "Mediation attempt", "Court proceedings", "Settlement negotiation", "Final order"],
      timeframe: "6-12 months",
      successRate: "88%",
      averageSettlement: "Fair division",
      link: "/services/divorce-family-law",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: FileText,
      title: "Contract Drafting & Civil Litigation",
      description: "Professional contract drafting and civil litigation services for businesses and individuals. Protecting your interests in commercial disputes.",
      process: ["Case evaluation", "Documentation", "Pre-trial negotiations", "Litigation", "Enforcement"],
      timeframe: "3-18 months",
      successRate: "85%",
      averageSettlement: "Favorable outcome",
      link: "/services/civil-litigation",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shield,
      title: "Wills & Estates",
      description: "Secure your family's future with professional will drafting, estate planning, and probate administration services tailored to your needs.",
      process: ["Asset evaluation", "Will drafting", "Witness execution", "Registration", "Estate administration"],
      timeframe: "1-6 months",
      successRate: "100%",
      averageSettlement: "Estate protected",
      link: "/services/wills-estates",
      color: "bg-purple-100 text-purple-600"
    }
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
                Our Legal Services
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Comprehensive legal solutions designed to protect your rights and achieve the best 
                possible outcomes. From personal injury to family law, we're here to help.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-gold text-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Free Consultation
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-lg ${service.color} mr-4`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h2 className="font-legal text-2xl md:text-3xl font-bold text-navy">
                            {service.title}
                          </h2>
                          <Badge variant="outline" className="mt-1">
                            {service.successRate} Success Rate
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Process Steps */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-navy mb-3">Our Process:</h3>
                        <div className="space-y-2">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <Clock className="w-5 h-5 text-accent mx-auto mb-1" />
                          <div className="text-sm font-medium text-navy">{service.timeframe}</div>
                          <div className="text-xs text-muted-foreground">Timeframe</div>
                        </div>
                        <div className="text-center">
                          <DollarSign className="w-5 h-5 text-accent mx-auto mb-1" />
                          <div className="text-sm font-medium text-navy">{service.averageSettlement}</div>
                          <div className="text-xs text-muted-foreground">Typical Result</div>
                        </div>
                        <div className="text-center">
                          <CheckCircle className="w-5 h-5 text-accent mx-auto mb-1" />
                          <div className="text-sm font-medium text-navy">{service.successRate}</div>
                          <div className="text-xs text-muted-foreground">Success Rate</div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link to={service.link}>
                          <Button variant="outline" className="w-full sm:w-auto">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button className="btn-hero w-full sm:w-auto">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Start Now
                          </Button>
                        </a>
                      </div>
                    </div>

                    {/* Image/Visual */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <Card className="card-elegant p-8 text-center">
                        <CardContent className="p-0">
                          <div className={`w-24 h-24 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                            <IconComponent className="w-12 h-12" />
                          </div>
                          <h3 className="font-semibold text-xl text-navy mb-2">
                            Expert {service.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Professional representation with proven results
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-legal text-3xl md:text-4xl font-bold text-navy mb-6">
              Don't See Your Legal Need?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              We handle a wide range of legal matters beyond our core specializations. 
              Contact us to discuss your specific legal needs and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact Form
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="btn-hero w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Consult
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;