import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerfumeCard from "@/components/PerfumeCard";
import { Button } from "@/components/ui/button";
import { perfumes, families, getPerfumesByFamily } from "@/data/perfumes";

const Collection = () => {
  const [selectedFamily, setSelectedFamily] = useState<string>("All");

  const filteredPerfumes = getPerfumesByFamily(selectedFamily);

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
