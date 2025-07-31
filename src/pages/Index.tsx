import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TeamSection from "@/components/home/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url('/lovable-uploads/0be3e00f-adac-4233-8acd-70aa588d82a5.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <TeamSection />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
};

export default Index;
