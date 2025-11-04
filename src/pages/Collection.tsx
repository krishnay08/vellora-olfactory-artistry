import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerfumeCard from "@/components/PerfumeCard";
import { Button } from "@/components/ui/button";
import nuitDoudImage from "@/assets/nuit-doud.jpg";
import amberSultanImage from "@/assets/amber-sultan.jpg";
import velvetRoseImage from "@/assets/velvet-rose.jpg";

const Collection = () => {
  const [selectedFamily, setSelectedFamily] = useState<string>("All");

  const perfumes = [
    {
      id: "nuit-doud",
      name: "Nuit d'Oud",
      description: "A midnight journey through a forest of aged agarwood and smoky leather",
      image: nuitDoudImage,
      price: 450,
      family: "Oud",
    },
    {
      id: "amber-sultan",
      name: "Amber Sultan",
      description: "The warmth of ancient amber meets the richness of golden saffron",
      image: amberSultanImage,
      price: 420,
      family: "Amber",
    },
    {
      id: "velvet-rose",
      name: "Velvet Rose",
      description: "Rose de Grasse absolute enveloped in the finest Bulgarian rose oil",
      image: velvetRoseImage,
      price: 480,
      family: "Floral",
    },
    {
      id: "oud-imperial",
      name: "Oud Imperial",
      description: "The rarest Cambodian oud meets precious Indian sandalwood",
      image: nuitDoudImage,
      price: 550,
      family: "Oud",
    },
    {
      id: "jasmine-noir",
      name: "Jasmine Noir",
      description: "Night-blooming jasmine sambac with dark patchouli and vanilla",
      image: velvetRoseImage,
      price: 460,
      family: "Floral",
    },
    {
      id: "sandalwood-mystique",
      name: "Sandalwood Mystique",
      description: "Mysore sandalwood oil, aged cedar, and smoky incense",
      image: nuitDoudImage,
      price: 440,
      family: "Woody",
    },
  ];

  const families = ["All", "Oud", "Floral", "Woody", "Amber"];

  const filteredPerfumes = selectedFamily === "All" 
    ? perfumes 
    : perfumes.filter(p => p.family === selectedFamily);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          The Collection
        </h1>
        <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
          Each elixir is a masterwork, meticulously crafted from the world's most precious essences
        </p>
      </section>

      {/* Filters */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {families.map((family) => (
              <Button
                key={family}
                onClick={() => setSelectedFamily(family)}
                variant={selectedFamily === family ? "default" : "outline"}
                className={`font-lora px-6 py-2 rounded-sm transition-all duration-300 ${
                  selectedFamily === family
                    ? "bg-burgundy hover:bg-burgundy-dark text-foreground"
                    : "border-border text-muted-foreground hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {family}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPerfumes.map((perfume, index) => (
              <div 
                key={perfume.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PerfumeCard {...perfume} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
