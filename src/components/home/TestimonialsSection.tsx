import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Nomsa Mbeki",
      location: "Cape Town",
      case: "RAF Claim",
      text: "Y Tshika Attorneys helped me through my RAF claim after a devastating car accident. Their compassionate approach and expertise secured the compensation I needed for my recovery. I couldn't have asked for better representation.",
      rating: 5,
      amount: "R850,000"
    },
    {
      name: "Thabo Mthembu",
      location: "Johannesburg",
      case: "Criminal Defense",
      text: "When I was wrongfully accused, Mr. Tshika and his team fought tirelessly for my case. Their dedication and thorough preparation led to all charges being dropped. I'm forever grateful for their professional service.",
      rating: 5,
      amount: "Case Dismissed"
    },
    {
      name: "Sarah Williams",
      location: "Durban",
      case: "Divorce Proceedings",
      text: "Going through a divorce was emotional, but Y Tshika Attorneys made the legal process smooth and fair. They protected my interests while maintaining professionalism throughout. Highly recommended.",
      rating: 5,
      amount: "Fair Settlement"
    },
    {
      name: "David Nkomo",
      location: "Pretoria",
      case: "Civil Litigation",
      text: "Excellent service in handling my contract dispute. The team was responsive, kept me informed throughout the process, and achieved a favorable outcome. Their expertise in civil law is outstanding.",
      rating: 5,
      amount: "Won Case"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-legal text-3xl md:text-4xl font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from real clients who trusted us with their legal matters. 
            Your success is our success.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="card-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <Quote className="w-12 h-12 text-accent" />
                </div>
                
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <div className="font-semibold text-navy text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[currentIndex].location} • {testimonials[currentIndex].case}
                      </div>
                      <div className="flex items-center mt-2">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-bold text-accent text-xl">
                        {testimonials[currentIndex].amount}
                      </div>
                      <div className="text-sm text-muted-foreground">Result</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">R50M+</div>
            <div className="text-muted-foreground">Recovered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;