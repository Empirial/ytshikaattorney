import { Scale, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20inquire%20about...";
  const quickLinks = [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Contact",
    path: "/contact"
  }, {
    name: "Resources",
    path: "/resources"
  }];
  const services = [{
    name: "RAF Claims",
    path: "/services/road-accident-fund-claims"
  }, {
    name: "Criminal Law",
    path: "/services/criminal-law"
  }, {
    name: "Divorce & Family",
    path: "/services/divorce-family-law"
  }, {
    name: "Civil Litigation",
    path: "/services/civil-litigation"
  }];
  return <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/ecc45c17-5935-4a92-89e2-6ee1abaef104.png" alt="Y Tshika Attorneys Logo" className="h-8 w-auto" />
              
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Defending justice with integrity and excellence. Your trusted legal 
              partner in South Africa, providing professional representation across 
              criminal law, civil litigation, and family matters.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  171 Fuller Street, Idutywa, 5000, South Africa
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">+27 73 935 2207</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-gray-300">info@ytshikaattorneys.co.za</span>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="mt-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Our Services</h3>
            <ul className="space-y-2">
              {services.map(service => <li key={service.name}>
                  <Link to={service.path} className="text-gray-300 hover:text-accent transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Y Tshika Attorneys Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-gray-400 hover:text-accent transition-colors text-sm">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;