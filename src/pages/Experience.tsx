import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import atelierImage from "@/assets/atelier.jpg";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          The Vellora Experience
        </h1>
        <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Immerse yourself in the art of perfumery
        </p>
      </section>

      {/* The Atelier */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <img
                src={atelierImage}
                alt="Vellora Atelier"
                className="w-full rounded-lg shadow-elegant"
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
                The Vellora Atelier
              </h2>
              <p className="font-lora text-muted-foreground leading-relaxed mb-8">
                Step into our private sanctuary in the heart of Dubai. Our atelier is not a store—it 
                is a temple of scent, where time slows and the senses awaken. Here, you will be guided 
                by our master perfumers through a curated olfactory journey, discovering fragrances that 
                speak to your soul.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-rose-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-lora text-muted-foreground">
                      One-on-one consultations with expert perfumers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-rose-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-lora text-muted-foreground">
                      Exclusive access to limited edition releases
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-rose-gold rounded-full mt-2"></div>
                  <div>
                    <p className="font-lora text-muted-foreground">
                      Complimentary refreshments in our lounge
                    </p>
                  </div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-burgundy hover:bg-burgundy-dark text-foreground font-lora px-8 py-6 rounded-sm shadow-glow transition-all duration-500"
              >
                Book Your Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Perfumery */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              Bespoke Perfumery
            </h2>
            <p className="font-lora text-xl text-rose-gold mb-12 italic">
              Co-create your olfactory signature
            </p>
            <p className="font-lora text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              For those who seek the ultimate in exclusivity, we offer our bespoke perfumery service. 
              Work intimately with our master perfumers to create a fragrance that is yours alone—a 
              scent that will never be replicated, never be mass-produced. This is perfumery as haute 
              couture, where your vision becomes reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We begin with a deep consultation to understand your preferences, memories, and inspirations.",
                },
                {
                  step: "02",
                  title: "Creation",
                  description: "Our perfumer crafts multiple iterations, refining the blend until it perfectly captures your essence.",
                },
                {
                  step: "03",
                  title: "Delivery",
                  description: "Your bespoke perfume is presented in a hand-engraved bottle, with exclusive naming rights.",
                },
              ].map((phase, index) => (
                <div 
                  key={phase.step}
                  className="p-8 bg-background border border-border rounded-lg hover:border-rose-gold transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <p className="font-playfair text-5xl text-burgundy font-bold mb-4">
                    {phase.step}
                  </p>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    {phase.title}
                  </h3>
                  <p className="font-lora text-sm text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-background border border-rose-gold rounded-lg p-8 mb-8">
              <p className="font-lora text-sm text-muted-foreground mb-4">
                Starting Investment
              </p>
              <p className="font-playfair text-4xl font-bold text-rose-gold mb-6">
                $15,000
              </p>
              <p className="font-lora text-sm text-muted-foreground">
                Includes 500ml of your exclusive fragrance and ongoing refinements
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-burgundy hover:bg-burgundy-dark text-foreground font-lora px-12 py-6 text-lg rounded-sm shadow-glow transition-all duration-500"
            >
              Inquire About Bespoke Service
            </Button>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              The Vellora Circle
            </h2>
            <p className="font-lora text-lg text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto">
              Join our exclusive membership program for priority access to limited releases, 
              invitations to private events, and seasonal gifts curated by our perfumers.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background font-lora px-8 py-6 rounded-sm transition-all duration-500"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;
