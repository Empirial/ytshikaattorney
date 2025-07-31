import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FileText, Download, BookOpen, AlertCircle, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Resources = () => {
  const legalGuides = [
    {
      title: "Road Accident Fund Claims Guide",
      description: "Complete guide to understanding RAF claims, eligibility criteria, and the claims process.",
      downloadUrl: "#",
      category: "Personal Injury"
    },
    {
      title: "Divorce Process in South Africa",
      description: "Step-by-step explanation of divorce procedures, requirements, and what to expect.",
      downloadUrl: "#",
      category: "Family Law"
    },
    {
      title: "Criminal Law Rights",
      description: "Know your rights when facing criminal charges and what to expect during legal proceedings.",
      downloadUrl: "#",
      category: "Criminal Law"
    },
    {
      title: "Civil Litigation Basics",
      description: "Understanding civil litigation processes, from filing to resolution.",
      downloadUrl: "#",
      category: "Civil Law"
    }
  ];

  const emergencyContacts = [
    {
      service: "Emergency Legal Consultation",
      description: "24/7 emergency legal advice for urgent matters",
      phone: "+27 73 935 2207",
      available: "24/7"
    },
    {
      service: "Police Station Assistance",
      description: "Legal representation for arrests and police questioning",
      phone: "+27 73 935 2207",
      available: "24/7"
    },
    {
      service: "Court Representation",
      description: "Immediate court representation for urgent matters",
      phone: "+27 73 935 2207",
      available: "Business Hours"
    }
  ];

  const faqs = [
    {
      question: "How much does a consultation cost?",
      answer: "Initial consultations are free for most legal matters. We believe in making legal advice accessible to everyone."
    },
    {
      question: "Do you handle cases on contingency?",
      answer: "Yes, for certain types of cases like RAF claims and personal injury matters, we work on a contingency basis."
    },
    {
      question: "How long do legal proceedings typically take?",
      answer: "The duration varies greatly depending on the complexity of the case and the type of legal matter. We provide realistic timelines during consultation."
    },
    {
      question: "Can you represent me in any South African court?",
      answer: "Yes, we are licensed to practice in all South African courts and have extensive experience across different jurisdictions."
    },
    {
      question: "What documents should I bring for my consultation?",
      answer: "Bring any relevant documents related to your case, identification, and any correspondence with other parties involved."
    }
  ];

  const legalLinks = [
    {
      name: "Road Accident Fund (RAF)",
      url: "https://www.raf.co.za",
      description: "Official RAF website for claims information"
    },
    {
      name: "South African Police Service",
      url: "https://www.saps.gov.za",
      description: "Official SAPS website and resources"
    },
    {
      name: "Department of Justice",
      url: "https://www.justice.gov.za",
      description: "South African Department of Justice and Constitutional Development"
    },
    {
      name: "Legal Aid South Africa",
      url: "https://www.legalaid.co.za",
      description: "Legal aid services for qualifying individuals"
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
              Legal Resources
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Access valuable legal information, guides, and resources to help you 
              understand your rights and navigate the South African legal system.
            </p>
          </div>
        </section>

        {/* Legal Guides */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Free Legal Guides
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download our comprehensive guides to understand various legal processes 
                and your rights under South African law.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {legalGuides.map((guide, index) => (
                <Card key={index} className="card-elegant">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <div className="text-sm text-accent font-medium mt-1">
                            {guide.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {guide.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Emergency Legal Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                When you need immediate legal assistance, we're here to help. 
                Contact us for urgent legal matters.
              </p>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                  <h3 className="text-xl font-semibold text-foreground">
                    24/7 Emergency Legal Assistance
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index}>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="mb-2 sm:mb-0">
                          <h4 className="font-semibold text-foreground">
                            {contact.service}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {contact.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-accent font-medium">
                            {contact.available}
                          </span>
                          <div className="flex space-x-2">
                            <a href={`tel:${contact.phone}`}>
                              <Button size="sm" className="btn-hero">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                              </Button>
                            </a>
                            <a 
                              href={`https://wa.me/27739352207?text=Emergency%20legal%20assistance%20needed%20for%20${contact.service}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button size="sm" variant="outline">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                      {index < emergencyContacts.length - 1 && (
                        <Separator className="mt-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-warm-grey">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our legal services and processes.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Useful Links */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-legal text-3xl font-bold text-foreground mb-4">
                Useful Legal Links
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Important government and legal resources for South African citizens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalLinks.map((link, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {link.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {link.description}
                        </p>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light text-sm font-medium"
                        >
                          Visit Website →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-legal text-3xl font-bold mb-6">
              Need Personalized Legal Advice?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              While these resources provide general information, every legal situation is unique. 
              Contact us for personalized advice tailored to your specific circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gold inline-flex items-center justify-center"
              >
                Schedule Consultation
              </a>
              <a
                href="https://wa.me/27739352207?text=Hi%20Y%20Tshika%20Attorneys,%20I%20need%20legal%20advice%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold inline-flex items-center justify-center"
              >
                WhatsApp Legal Query
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

export default Resources;