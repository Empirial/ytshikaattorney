import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20inquire%20about...";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;