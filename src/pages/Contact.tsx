import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const whatsappUrl = "https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20would%20like%20to%20inquire%20about...";

  const serviceTypes = [
    "RAF Claims",
    "Criminal Law",
    "Divorce & Family Law",
    "Civil Litigation",
    "Wills & Estates",
    "General Inquiry",
    "Other"
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "171 Fuller Street, Idutywa, 5000, South Africa",
      subtext: "Visit us during business hours"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+27 73 935 2207",
      subtext: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "info@ytshikaattorneys.co.za",
      subtext: "We respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 5:00 PM",
      subtext: "Sat: 9:00 AM - 1:00 PM"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create WhatsApp message with form data
      const whatsappMessage = `Hi Y Tshika Attorneys,

New inquiry from website:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Message: ${formData.message}

Please contact me regarding my legal matter.`;

      const whatsappUrlWithForm = `https://wa.me/27739352207?text=${encodeURIComponent(whatsappMessage)}`;

      toast({
        title: "Form submitted successfully!",
        description: "Redirecting you to WhatsApp to complete your inquiry.",
      });

      // Redirect to WhatsApp after a brief delay
      setTimeout(() => {
        window.open(whatsappUrlWithForm, '_blank');
      }, 1500);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });

    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy to-navy-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-legal text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ready to discuss your legal matter? Get in touch with our experienced team. 
                We offer free consultations and are available 24/7 via WhatsApp for urgent matters.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="card-elegant">
                  <CardContent className="p-8">
                    <h2 className="font-legal text-2xl font-bold text-navy mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="serviceType">Service Type *</Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select the type of legal service you need" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          required
                          rows={5}
                          placeholder="Please describe your legal matter in detail..."
                          className="mt-1"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="btn-hero w-full text-lg" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        After submitting, you'll be redirected to WhatsApp to complete your inquiry.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-legal text-2xl font-bold text-navy mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                              <IconComponent className="w-6 h-6 text-accent" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                            <p className="text-muted-foreground mb-1">{info.details}</p>
                            <p className="text-sm text-muted-foreground">{info.subtext}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Card className="card-elegant bg-green-50 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MessageCircle className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="font-semibold text-lg text-green-800">
                        Prefer WhatsApp?
                      </h3>
                    </div>
                    <p className="text-green-700 mb-4">
                      Get instant responses and immediate assistance. Our WhatsApp support 
                      is available 24/7 for urgent legal matters.
                    </p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="card-elegant bg-red-50 border-red-200">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-red-800 mb-2">
                      Emergency Legal Assistance
                    </h3>
                    <p className="text-red-700 mb-4">
                      If you need urgent legal assistance (arrests, bail applications, etc.), 
                      contact us immediately via WhatsApp or phone.
                    </p>
                    <div className="flex items-center text-red-800">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="font-semibold">+27 73 935 2207</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-navy mb-4">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Idutywa, our office is easily accessible and offers 
                a comfortable environment for confidential legal consultations.
              </p>
            </div>

            <Card className="card-elegant overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-navy mb-2">
                      171 Fuller Street, Idutywa, 5000
                    </h3>
                    <p className="text-muted-foreground">
                      Google Maps integration would be embedded here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;