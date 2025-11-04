import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-playfair text-3xl font-bold text-rose-gold mb-4">VELLORA</h3>
            <p className="font-lora text-sm text-muted-foreground mb-6">
              The Anatomy of Rarity
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-rose-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground hover:text-rose-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Subscribe to Our World
            </h4>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-input border border-border rounded px-4 py-2 text-sm font-lora text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-rose-gold"
              />
              <button className="bg-burgundy hover:bg-burgundy-dark text-foreground px-6 py-2 rounded font-lora text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">
              Information
            </h4>
            <div className="space-y-2 font-lora text-sm">
              <Link to="/shipping" className="block text-muted-foreground hover:text-rose-gold transition-colors">
                Shipping & Returns
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-rose-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-rose-gold transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-rose-gold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="font-lora text-sm text-muted-foreground">
            © 2024 Vellora. All rights reserved. Crafted with obsession.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
