import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mthembu",
      case: "RAF Claim",
      rating: 5,
      content: "Y Tshika Attorneys provided exceptional service during my Road Accident Fund claim. Their expertise and dedication resulted in a successful outcome that exceeded my expectations. Highly professional and caring team.",
      location: "East London"
    },
    {
      id: 2,
      name: "John Ndaba",
      case: "Criminal Defense",
      rating: 5,
      content: "When I was facing serious criminal charges, Y Tshika Attorneys stood by me with unwavering support. Their strategic defense and thorough preparation led to a favorable verdict. Forever grateful.",
      location: "King William's Town"
    },
    {
      id: 3,
      name: "Maria Koekemoer",
      case: "Divorce Settlement",
      rating: 5,
      content: "The divorce process was handled with such professionalism and sensitivity. Y Tshika Attorneys ensured my interests were protected while maintaining dignity throughout the proceedings.",
      location: "Butterworth"
    },
    {
      id: 4,
      name: "David Mpumlwana",
      case: "Civil Litigation",
      rating: 5,
      content: "Outstanding legal representation in a complex civil matter. The team's attention to detail and strategic approach resulted in a successful resolution. Truly exceptional service.",
      location: "Idutywa"
    },
    {
      id: 5,
      name: "Lisa van der Merwe",
      case: "Family Law",
      rating: 5,
      content: "Compassionate and knowledgeable representation during a difficult custody case. Y Tshika Attorneys fought tirelessly for my children's best interests. Couldn't have asked for better advocates.",
      location: "Mthatha"
    },
    {
      id: 6,
      name: "Michael Sibeko",
      case: "Personal Injury",
      rating: 5,
      content: "After my workplace accident, Y Tshika Attorneys secured compensation that covered all my medical expenses and lost income. Their dedication to justice is remarkable.",
      location: "Cofimvaba"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-accent fill-accent" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-legal text-4xl md:text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Hear from our satisfied clients who trusted us with their legal matters. 
              Their success stories speak to our commitment to excellence and justice.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="card-elegant h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Quote className="w-8 h-8 text-accent mr-3" />
                      <div className="flex">{renderStars(testimonial.rating)}</div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t border-border pt-4">
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.case} • {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Our Track Record
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that reflect our commitment to achieving the best outcomes for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-legal text-3xl font-bold mb-6">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let us help you achieve the justice you deserve. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27739352207"
                className="btn-gold inline-flex items-center justify-center"
              >
                Call Now: +27 73 935 2207
              </a>
              <a
                href="https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20schedule%20a%20consultation..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-flex items-center justify-center"
              >
                WhatsApp Consultation
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

export default Testimonials;