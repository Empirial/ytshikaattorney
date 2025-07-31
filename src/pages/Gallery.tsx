import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Award, Users, Building, Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Our Modern Law Office",
      description: "State-of-the-art facilities designed for client comfort and confidential consultations.",
      category: "Office",
      icon: Building
    },
    {
      id: 2,
      title: "Legal Team in Action",
      description: "Our experienced attorneys collaborating on complex legal strategies.",
      category: "Team",
      icon: Users
    },
    {
      id: 3,
      title: "Court Representation",
      description: "Professional representation in South African courts, defending our clients' rights.",
      category: "Court",
      icon: Gavel
    },
    {
      id: 4,
      title: "Community Service Awards",
      description: "Recognition for our commitment to pro bono work and community legal education.",
      category: "Awards",
      icon: Award
    },
    {
      id: 5,
      title: "Client Consultation Rooms",
      description: "Private, comfortable spaces where clients can discuss their legal matters confidentially.",
      category: "Office",
      icon: Building
    },
    {
      id: 6,
      title: "Legal Research Library",
      description: "Comprehensive legal resources and research materials supporting our case preparations.",
      category: "Resources",
      icon: Building
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Excellence in Criminal Defense",
      description: "Recognized by the Eastern Cape Law Society for outstanding criminal defense work."
    },
    {
      year: "2022",
      title: "Community Service Award",
      description: "Honored for providing free legal services to underprivileged communities in Idutywa."
    },
    {
      year: "2021",
      title: "Outstanding RAF Claims Success",
      description: "Achieved highest settlement rates for Road Accident Fund claims in the region."
    },
    {
      year: "2020",
      title: "Legal Innovation Award",
      description: "Pioneered digital consultation services during the pandemic, ensuring access to justice."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-legal text-4xl md:text-5xl font-bold mb-6">
              Gallery & Achievements
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our professional workspace, meet our team, and discover the 
              achievements that make Y Tshika Attorneys a trusted name in South African law.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Our Professional Environment
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a virtual tour of our facilities and see the professional environment 
                where justice is pursued with dedication and excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card key={item.id} className="card-elegant group cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-accent font-medium mb-2">
                          {item.category}
                        </div>
                        <h3 className="font-semibold text-lg text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Awards & Recognition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by peers and the community. 
                Here are some of our notable achievements.
              </p>
            </div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-bold text-sm">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card className="card-elegant">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg text-foreground mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-legal text-3xl font-bold mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Experience our professional environment in person. Schedule a consultation 
              to discuss your legal needs in our comfortable, confidential setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gold inline-flex items-center justify-center"
              >
                Schedule a Visit
              </a>
              <a
                href="https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20schedule%20an%20office%20visit..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-flex items-center justify-center"
              >
                WhatsApp Us
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

export default Gallery;