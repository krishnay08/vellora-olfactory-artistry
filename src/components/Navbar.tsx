import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-playfair text-2xl font-bold tracking-wider text-rose-gold hover:text-rose-gold-light transition-colors">
            VELLORA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-lora text-foreground hover:text-rose-gold transition-colors">
              Home
            </Link>
            <Link to="/collection" className="text-sm font-lora text-foreground hover:text-rose-gold transition-colors">
              The Collection
            </Link>
            <Link to="/story" className="text-sm font-lora text-foreground hover:text-rose-gold transition-colors">
              Our Story
            </Link>
            <Link to="/experience" className="text-sm font-lora text-foreground hover:text-rose-gold transition-colors">
              Experience
            </Link>
            <Link to="/contact" className="text-sm font-lora text-foreground hover:text-rose-gold transition-colors">
              Contact
            </Link>
          </div>

          {/* Shopping Bag & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="text-foreground hover:text-rose-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden text-foreground hover:text-rose-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <Link 
              to="/" 
              className="block text-sm font-lora text-foreground hover:text-rose-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/collection" 
              className="block text-sm font-lora text-foreground hover:text-rose-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              The Collection
            </Link>
            <Link 
              to="/story" 
              className="block text-sm font-lora text-foreground hover:text-rose-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Story
            </Link>
            <Link 
              to="/experience" 
              className="block text-sm font-lora text-foreground hover:text-rose-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link 
              to="/contact" 
              className="block text-sm font-lora text-foreground hover:text-rose-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
