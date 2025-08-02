import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Scale, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20inquire%20about...";

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ecc45c17-5935-4a92-89e2-6ee1abaef104.png" 
              alt="Y Tshika Attorneys Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button className="btn-hero text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Consult
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full"
                >
                  <Button className="btn-hero text-sm w-full justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Consult
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;