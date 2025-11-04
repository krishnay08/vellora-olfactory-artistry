import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Contact Us
        </h1>
        <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          We welcome your inquiries about our fragrances, services, and experiences
        </p>
      </section>

      <section className="py-16 px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form className="space-y-6">
                <div>
                  <label className="font-lora text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input 
                    type="text"
                    placeholder="Enter your full name"
                    className="bg-input border-border text-foreground font-lora rounded-sm focus:ring-rose-gold focus:border-rose-gold"
                  />
                </div>

                <div>
                  <label className="font-lora text-sm text-muted-foreground mb-2 block">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input border-border text-foreground font-lora rounded-sm focus:ring-rose-gold focus:border-rose-gold"
                  />
                </div>

                <div>
                  <label className="font-lora text-sm text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <Input 
                    type="text"
                    placeholder="How may we assist you?"
                    className="bg-input border-border text-foreground font-lora rounded-sm focus:ring-rose-gold focus:border-rose-gold"
                  />
                </div>

                <div>
                  <label className="font-lora text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Share your thoughts or inquiries with us..."
                    rows={6}
                    className="bg-input border-border text-foreground font-lora rounded-sm focus:ring-rose-gold focus:border-rose-gold resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-burgundy hover:bg-burgundy-dark text-foreground font-lora py-6 rounded-sm shadow-glow transition-all duration-500"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h2>
                  <p className="font-lora text-muted-foreground leading-relaxed mb-8">
                    Whether you wish to learn more about our fragrances, book a private consultation, 
                    or inquire about our bespoke services, our concierge team is here to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                    <Mail className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-lora text-sm text-muted-foreground mb-2">
                        Email
                      </p>
                      <a 
                        href="mailto:concierge@vellora.com"
                        className="font-lora text-foreground hover:text-rose-gold transition-colors"
                      >
                        concierge@vellora.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                    <MapPin className="w-6 h-6 text-rose-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-lora text-sm text-muted-foreground mb-2">
                        Flagship Atelier
                      </p>
                      <p className="font-lora text-foreground leading-relaxed">
                        The Dubai Mall<br />
                        Fashion Avenue<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-luxury rounded-lg">
                  <h3 className="font-playfair text-xl font-semibold text-background mb-4">
                    Visit Our Atelier
                  </h3>
                  <p className="font-lora text-sm text-background/90 mb-4">
                    Experience our collection in person. Book a private consultation for 
                    personalized fragrance recommendations.
                  </p>
                  <Button 
                    variant="outline"
                    className="border-background text-background hover:bg-background hover:text-rose-gold font-lora rounded-sm"
                  >
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="aspect-[16/9] bg-card border border-border rounded-lg overflow-hidden animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1691155994585!2d55.27846661501125!3d25.197196083897124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85bf%3A0xa5eda9fb3c93b69d!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(1)" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
