import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface PerfumeCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

const PerfumeCard = ({ id, name, description, image, price }: PerfumeCardProps) => {
  return (
    <Link to={`/perfume/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-500 hover:shadow-elegant hover:border-rose-gold">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
          <Button 
            variant="outline" 
            className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-background transition-colors"
          >
            View Elixir
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
            {name}
          </h3>
          <p className="font-lora text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          <p className="font-lora text-lg text-rose-gold font-semibold">
            ${price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PerfumeCard;
