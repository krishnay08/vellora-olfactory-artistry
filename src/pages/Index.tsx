import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerfumeCard from "@/components/PerfumeCard";
import heroImage from "@/assets/hero-perfume.jpg";
import { perfumes } from "@/data/perfumes";

const Index = () => {
  // Display the first 3 signature perfumes
  const signaturePerfumes = perfumes.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Vellora Perfume"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in-slow">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-wide">
            VELLORA
          </h1>
          <p className="font-lora text-xl md:text-2xl text-rose-gold mb-12 tracking-wider">
            The Anatomy of Rarity
          </p>
          <Link to="/collection">
            <Button 
              size="lg" 
              className="bg-burgundy hover:bg-burgundy-dark text-foreground font-lora px-12 py-6 text-lg rounded-sm shadow-glow transition-all duration-500"
            >
              Discover the Collection
            </Button>
          </Link>
        </div>
      </section>

      {/* The Art of Scent */}
      <section className="py-24 px-6 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Art of Scent
            </h2>
            <p className="font-lora text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vellora is more than a perfume house. It is a sanctuary where the world's most precious 
              raw materials are transformed into olfactory masterpieces. Each creation is a meditation 
              on rarity, a testament to the eternal dance between nature and artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signaturePerfumes.map((perfume, index) => (
              <div 
                key={perfume.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <PerfumeCard {...perfume} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* An Olfactory Journey */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            An Olfactory Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { family: "Woody", description: "Ancient forests captured in amber glass. Notes of oud, sandalwood, and vetiver." },
              { family: "Floral", description: "The sublime essence of rare blooms. Rose de Grasse, jasmine sambac, and tuberose." },
              { family: "Amber", description: "Warmth incarnate. Rich amber, golden resins, and warm spices." },
              { family: "Fresh", description: "Crystalline clarity. Bergamot, neroli, and mediterranean citrus." },
            ].map((category, index) => (
              <div 
                key={category.family}
                className="group p-8 bg-card border border-border rounded-lg hover:border-rose-gold transition-all duration-500 hover:shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="font-playfair text-2xl font-semibold text-rose-gold mb-4">
                  {category.family}
                </h3>
                <p className="font-lora text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Acclaimed Worldwide
          </h2>

          <div className="space-y-12">
            {[
              { quote: "A sublime masterpiece that redefines luxury perfumery", source: "L'Officiel" },
              { quote: "The new benchmark for luxury oud fragrances", source: "Vogue Arabia" },
              { quote: "An olfactory symphony of unparalleled sophistication", source: "Harper's Bazaar" },
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="text-center border-l-2 border-rose-gold pl-8 py-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="font-lora text-xl text-foreground italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-playfair text-rose-gold font-semibold">
                  — {testimonial.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
