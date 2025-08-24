import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const TeamSection = () => {
  const teamMembers = [
     {
      name: "Yondela Tshika",
      title: "Principal Attorney",
      image: '/loveable-uploads/yondelatshika.png',
      credentials: ["LLB Degree", "Admitted Attorney", "Criminal Law Specialist"],
      specializations: ["RAF Claims", "Criminal Defense", "Civil Litigation"],
      experience: "Professional",
      description: "Specializing in criminal defense, RAF claims, and civil litigation, represented hundreds of clients across diverse legal matters."
    },
    {
      name: "Thembakazi Kolisi",
      title: "Legal Secretary",
      image: '/lovable-uploads/themabakizikolisi.png',
      credentials: ["Legal Secretary", "Administrative Support"],
      specializations: ["Client Relations", "Document Management", "Administrative Support"],
      experience: "Professional",
      description: "Dedicated legal secretary ensuring smooth administrative operations and exceptional client service."
    },
    {
      name: "Mila Tshaka",
      title: "Junior Secretary", 
      image: '/loveable-uploads/milatshaka.png',
      credentials: ["Junior Secretary", "Office Administration"],
      specializations: ["Filing", "Client Communication", "Office Management"],
      experience: "Emerging Professional",
      description: "Enthusiastic junior secretary committed to supporting our legal team and assisting clients."
    },
    {
      name: "Sanele Hlazo",
      title: "Legal Intern",
      image: '/lovable-uploads/Sanelehlazo.png',
      credentials: ["Legal Intern", "Law Student"],
      specializations: ["Legal Research", "Case Preparation", "Document Review"],
      experience: "Legal Student",
      description: "Motivated legal intern gaining valuable experience while contributing to our legal research and case preparation."
    }
  ];

  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20speak%20with%20your%20team...";

  return (
    <section className="py-20 bg-warm-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-legal text-3xl md:text-4xl font-bold text-navy mb-4">
            Meet Our Legal Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experienced attorneys committed to delivering exceptional legal representation. 
            Our diverse team brings together decades of combined experience across all practice areas.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-xl text-navy">{member.name}</h3>
                      <p className="text-accent font-medium">{member.title}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {member.experience}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Credentials */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {member.credentials.map((credential, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-navy mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.specializations.map((spec, idx) => (
                        <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Button */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="btn-gold w-full text-sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contact {member.name.split(' ')[0]}
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center bg-background rounded-xl p-8 shadow-[var(--shadow-card)]">
          <h3 className="font-legal text-2xl font-bold text-navy mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced attorneys are ready to provide you with the legal representation 
            you deserve. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button variant="outline" className="group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-hero">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
