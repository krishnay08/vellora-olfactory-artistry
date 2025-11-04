import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { getPerfumeById } from "@/data/perfumes";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState<"50ml" | "100ml">("50ml");

  const perfume = getPerfumeById(id || "");

  // If perfume not found, redirect to collection
  if (!perfume) {
    return <Navigate to="/collection" replace />;
  }

  // Product data with pricing structure
  const product = {
    name: perfume.name,
    tagline: "An Olfactory Masterpiece",
    description: `${perfume.description}. Each bottle represents hundreds of hours of meticulous craftsmanship, from sourcing the world's finest raw materials to the final aging process. This is not merely a fragrance—it is an experience, a memory, a work of art.`,
    image: perfume.image,
    prices: {
      "50ml": perfume.price,
      "100ml": Math.round(perfume.price * 1.65),
    },
    notes: {
      top: ["Bergamot", "Saffron"],
      heart: ["Rose Absolute", "Precious Woods"],
      base: ["Amber", "Musk", "Vanilla"],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden bg-card border border-border shadow-elegant">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-playfair text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-lora text-xl text-rose-gold mb-8 italic">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="font-playfair text-4xl font-bold text-foreground">
                  ${product.prices[selectedSize]}
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="font-lora text-sm text-muted-foreground mb-4">
                  Select Size
                </p>
                <div className="flex gap-4">
                  {(["50ml", "100ml"] as const).map((size) => (
                    <Button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      variant="outline"
                      className={`flex-1 py-6 font-lora rounded-sm transition-all duration-300 ${
                        selectedSize === size
                          ? "bg-burgundy hover:bg-burgundy-dark text-foreground border-burgundy"
                          : "border-border hover:border-rose-gold text-muted-foreground"
                      }`}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <Button 
                size="lg" 
                className="w-full py-6 bg-burgundy hover:bg-burgundy-dark text-foreground font-lora text-lg rounded-sm shadow-glow transition-all duration-500 mb-12"
              >
                Add to Collection
              </Button>

              {/* Scent Pyramid */}
              <div className="border-t border-border pt-8 mb-8">
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-6">
                  Scent Pyramid
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-lora text-sm text-rose-gold font-semibold mb-2">
                      Top Notes
                    </p>
                    <p className="font-lora text-muted-foreground">
                      {product.notes.top.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="font-lora text-sm text-rose-gold font-semibold mb-2">
                      Heart Notes
                    </p>
                    <p className="font-lora text-muted-foreground">
                      {product.notes.heart.join(", ")}
                    </p>
                  </div>
                  <div>
                    <p className="font-lora text-sm text-rose-gold font-semibold mb-2">
                      Base Notes
                    </p>
                    <p className="font-lora text-muted-foreground">
                      {product.notes.base.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-border pt-8 mb-8">
                <p className="font-lora text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="border-t border-border pt-8">
                <div className="space-y-4">
                  {[
                    "Complimentary shipping on all orders",
                    "Luxury gift packaging included",
                    "Authenticity certificate",
                    "60-day return policy",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-rose-gold flex-shrink-0" />
                      <p className="font-lora text-sm text-muted-foreground">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
