import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Gavel, 
  Heart, 
  FileText, 
  Shield, 
  MessageCircle,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Road Accident Fund (RAF) Claims",
      description: "Expert assistance with RAF claims for motor vehicle accident victims. We handle all paperwork and ensure maximum compensation.",
      features: ["Medical expenses coverage", "Lost income claims", "Pain & suffering compensation"],
      link: "/services/road-accident-fund-claims",
      color: "text-blue-600"
    },
    {
      icon: Gavel,
      title: "Criminal Law",
      description: "Comprehensive criminal defense representation for all types of criminal charges. Protecting your rights throughout the legal process.",
      features: ["Bail applications", "Trial representation", "Appeals"],
      link: "/services/criminal-law",
      color: "text-red-600"
    },
    {
      icon: Heart,
      title: "Divorce & Family Law",
      description: "Compassionate legal support for family matters including divorce, custody, and maintenance disputes.",
      features: ["Divorce proceedings", "Child custody", "Maintenance orders"],
      link: "/services/divorce-family-law",
      color: "text-pink-600"
    },
    {
      icon: FileText,
      title: "Contract Drafting & Civil Litigation",
      description: "Professional contract drafting and civil litigation services for businesses and individuals.",
      features: ["Contract review", "Dispute resolution", "Commercial litigation"],
      link: "/services/civil-litigation",
      color: "text-green-600"
    },
    {
      icon: Shield,
      title: "Wills & Estates",
      description: "Secure your family's future with professional will drafting and estate administration services.",
      features: ["Will drafting", "Estate planning", "Probate assistance"],
      link: "/services/wills-estates",
      color: "text-purple-600"
    }
  ];

  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20inquire%20about%20your%20services...";

  return (
    <section className="py-20 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-legal text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Legal Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal solutions tailored to your needs. From personal injury claims 
            to complex litigation, our experienced team provides professional representation 
            with a personal touch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gray-100 ${service.color} mr-4`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg text-navy">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-2">
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="btn-gold w-full text-sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Don't see your legal need? We handle a wide range of legal matters.
          </p>
          <Link to="/services">
            <Button className="btn-hero">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;