import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import perfumerHandsImage from "@/assets/perfumer-hands.jpg";

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={perfumerHandsImage}
            alt="Perfumer at work"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="font-lora text-xl text-rose-gold max-w-2xl mx-auto">
            A Legacy in the Making
          </p>
        </div>
      </section>

      {/* The Quest for the Rare */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
              The Quest for the Rare
            </h2>
            <div className="space-y-6 font-lora text-lg text-muted-foreground leading-relaxed">
              <p>
                Vellora was born from a singular obsession: to capture what cannot be captured, 
                to bottle the ineffable. In a world of mass production and synthetic shortcuts, 
                we chose a different path—one that led us to the most remote corners of the earth.
              </p>
              <p>
                Our master perfumers traverse ancient oud forests in Cambodia, negotiate with 
                small-scale rose farmers in Grasse, and source the finest sandalwood from Mysore. 
                We believe that true luxury begins not in the laboratory, but in nature's cathedral.
              </p>
              <p>
                Every ingredient tells a story. The oud we use has aged for decades in heartwood, 
                developing layers of complexity that synthetic molecules can never replicate. 
                The rose absolute comes from flowers picked at dawn, when their scent is most pure. 
                This is not perfumery—this is poetry in liquid form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-playfair text-4xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Milestones of Excellence
          </h2>
          
          <div className="space-y-12">
            {[
              {
                year: "2015",
                title: "The Foundation",
                description: "Vellora is established in Paris, with a commitment to sourcing only the world's most precious raw materials.",
              },
              {
                year: "2017",
                title: "Nuit d'Oud is Born",
                description: "Our flagship fragrance debuts at the Esxence perfume exhibition in Milan to critical acclaim.",
              },
              {
                year: "2019",
                title: "The Atelier Opens",
                description: "We open our first private atelier in Dubai, offering bespoke perfumery services to discerning clients.",
              },
              {
                year: "2023",
                title: "Global Recognition",
                description: "Vellora fragrances are featured in Vogue Arabia and L'Officiel as the new benchmark for luxury oud.",
              },
            ].map((milestone, index) => (
              <div 
                key={milestone.year}
                className="flex gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-burgundy flex items-center justify-center">
                    <span className="font-playfair text-lg font-bold text-foreground">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="font-playfair text-2xl font-semibold text-rose-gold mb-4">
                    {milestone.title}
                  </h3>
                  <p className="font-lora text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-8">
              The Vellora Philosophy
            </h2>
            <p className="font-lora text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              We believe that a perfume is not a commodity—it is an experience, a memory, 
              a work of art. Each bottle represents hundreds of hours of work, from sourcing 
              to blending to aging. We never rush the process, because excellence cannot be hurried.
            </p>
            <blockquote className="font-playfair text-2xl text-rose-gold italic border-l-4 border-rose-gold pl-6 py-4">
              "In every drop, a world. In every bottle, eternity."
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
