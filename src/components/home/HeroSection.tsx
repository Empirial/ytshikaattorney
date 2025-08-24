import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Scale } from "lucide-react";

const HeroSection = () => {
  const whatsappConsultUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20book%20a%20consultation...";
  const whatsappRAFUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20need%20help%20with%20a%20RAF%20claim...";

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Y Tshika Attorneys Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 mr-2 text-accent" />
            <span className="text-sm font-medium">Trusted Legal Excellence Since Inception</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-legal text-4xl md:text-6xl font-bold leading-tight mb-6">
            Defending Justice with{" "}
            <span className="text-accent">Integrity</span> and{" "}
            <span className="text-accent">Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional legal representation in South Africa. Specializing in RAF claims, 
            criminal law, divorce, and civil litigation with personalized attention to every case.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="btn-hero text-lg w-full sm:w-auto min-w-[200px]">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
            </a>
            
            <a
              href={whatsappRAFUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="btn-outline-gold text-lg w-full sm:w-auto min-w-[200px] bg-white/10 backdrop-blur-sm border-accent text-accent hover:bg-accent hover:text-navy">
                <FileText className="w-5 h-5 mr-2" />
                Submit RAF Claim
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-gray-300">Cases Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-gray-300">WhatsApp Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;