import nuitDoudImage from "@/assets/nuit-doud.jpg";
import amberSultanImage from "@/assets/amber-sultan.jpg";
import velvetRoseImage from "@/assets/velvet-rose.jpg";
import cedarwoodNoirImage from "@/assets/cedarwood-noir.jpg";
import jasmineMystiqueImage from "@/assets/jasmine-mystique.jpg";
import bergamotSunImage from "@/assets/bergamot-sun.jpg";
import amberRenaissanceImage from "@/assets/amber-renaissance.jpg";
import irisDivineImage from "@/assets/iris-divine.jpg";
import oudRoyaleImage from "@/assets/oud-royale.jpg";
import sandalwoodSerenityImage from "@/assets/sandalwood-serenity.jpg";
import tuberoseEnchantmentImage from "@/assets/tuberose-enchantment.jpg";
import vetiverEssenceImage from "@/assets/vetiver-essence.jpg";
import neroliLumiereImage from "@/assets/neroli-lumiere.jpg";

export interface Perfume {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  family: string;
}

export const perfumes: Perfume[] = [
  // OUD FAMILY (10 fragrances)
  {
    id: "nuit-doud",
    name: "Nuit d'Oud",
    description: "A midnight journey through a forest of aged agarwood and smoky leather",
    image: nuitDoudImage,
    price: 450,
    family: "Oud",
  },
  {
    id: "oud-imperial",
    name: "Oud Imperial",
    description: "The rarest Cambodian oud meets precious Indian sandalwood",
    image: oudRoyaleImage,
    price: 550,
    family: "Oud",
  },
  {
    id: "oud-royale",
    name: "Oud Royale",
    description: "Majestic oud wrapped in velvet saffron and dark amber",
    image: nuitDoudImage,
    price: 580,
    family: "Oud",
  },
  {
    id: "oud-noir-intense",
    name: "Oud Noir Intense",
    description: "Midnight oud with black leather and smoky incense",
    image: oudRoyaleImage,
    price: 520,
    family: "Oud",
  },
  {
    id: "arabian-nights",
    name: "Arabian Nights",
    description: "Mystical oud blended with Turkish rose and spiced cardamom",
    image: nuitDoudImage,
    price: 490,
    family: "Oud",
  },
  {
    id: "oud-sublime",
    name: "Oud Sublime",
    description: "Pure agarwood essence with hints of precious ambergris",
    image: oudRoyaleImage,
    price: 620,
    family: "Oud",
  },
  {
    id: "black-oud",
    name: "Black Oud",
    description: "Intense oud with dark rum, tobacco, and black pepper",
    image: nuitDoudImage,
    price: 510,
    family: "Oud",
  },
  {
    id: "oud-mirage",
    name: "Oud Mirage",
    description: "Desert oud with warm amber and golden honey",
    image: oudRoyaleImage,
    price: 475,
    family: "Oud",
  },
  {
    id: "sultan-oud",
    name: "Sultan's Oud",
    description: "Royal oud composition with precious musk and silk",
    image: nuitDoudImage,
    price: 595,
    family: "Oud",
  },
  {
    id: "oud-mystere",
    name: "Oud Mystère",
    description: "Enigmatic oud with cashmere wood and dark patchouli",
    image: oudRoyaleImage,
    price: 540,
    family: "Oud",
  },

  // FLORAL FAMILY (10 fragrances)
  {
    id: "velvet-rose",
    name: "Velvet Rose",
    description: "Rose de Grasse absolute enveloped in the finest Bulgarian rose oil",
    image: velvetRoseImage,
    price: 480,
    family: "Floral",
  },
  {
    id: "jasmine-noir",
    name: "Jasmine Noir",
    description: "Night-blooming jasmine sambac with dark patchouli and vanilla",
    image: jasmineMystiqueImage,
    price: 460,
    family: "Floral",
  },
  {
    id: "tuberose-enchantment",
    name: "Tuberose Enchantment",
    description: "Intoxicating tuberose absolute with creamy ylang-ylang",
    image: tuberoseEnchantmentImage,
    price: 470,
    family: "Floral",
  },
  {
    id: "iris-divine",
    name: "Iris Divine",
    description: "Powdery iris pallida root with violet and soft suede",
    image: irisDivineImage,
    price: 500,
    family: "Floral",
  },
  {
    id: "gardenia-moonlight",
    name: "Gardenia Moonlight",
    description: "Luminous gardenia petals kissed by white musk",
    image: velvetRoseImage,
    price: 455,
    family: "Floral",
  },
  {
    id: "magnolia-sublime",
    name: "Magnolia Sublime",
    description: "Creamy magnolia with hints of champagne and silk",
    image: jasmineMystiqueImage,
    price: 465,
    family: "Floral",
  },
  {
    id: "rose-infusion",
    name: "Rose Infusion",
    description: "Triple rose accord with pink pepper and amber",
    image: velvetRoseImage,
    price: 485,
    family: "Floral",
  },
  {
    id: "jasmine-mystique",
    name: "Jasmine Mystique",
    description: "Egyptian jasmine with incense and precious woods",
    image: jasmineMystiqueImage,
    price: 495,
    family: "Floral",
  },
  {
    id: "peony-silk",
    name: "Peony Silk",
    description: "Delicate peony blooms with raspberry and white tea",
    image: tuberoseEnchantmentImage,
    price: 440,
    family: "Floral",
  },
  {
    id: "lily-majesty",
    name: "Lily Majesty",
    description: "Regal lily with casablanca and honeyed notes",
    image: irisDivineImage,
    price: 450,
    family: "Floral",
  },

  // WOODY FAMILY (10 fragrances)
  {
    id: "sandalwood-mystique",
    name: "Sandalwood Mystique",
    description: "Mysore sandalwood oil, aged cedar, and smoky incense",
    image: sandalwoodSerenityImage,
    price: 440,
    family: "Woody",
  },
  {
    id: "cedarwood-noir",
    name: "Cedarwood Noir",
    description: "Atlas cedar with vetiver roots and dark earth",
    image: cedarwoodNoirImage,
    price: 430,
    family: "Woody",
  },
  {
    id: "vetiver-essence",
    name: "Vetiver Essence",
    description: "Haitian vetiver with grapefruit and oakmoss",
    image: vetiverEssenceImage,
    price: 445,
    family: "Woody",
  },
  {
    id: "patchouli-heart",
    name: "Patchouli Heart",
    description: "Indonesian patchouli with dark chocolate and vanilla",
    image: cedarwoodNoirImage,
    price: 420,
    family: "Woody",
  },
  {
    id: "cypress-shadow",
    name: "Cypress Shadow",
    description: "Mediterranean cypress with pine needles and juniper",
    image: sandalwoodSerenityImage,
    price: 435,
    family: "Woody",
  },
  {
    id: "agarwood-symphony",
    name: "Agarwood Symphony",
    description: "Pure agarwood with hinoki cypress and black pepper",
    image: vetiverEssenceImage,
    price: 560,
    family: "Woody",
  },
  {
    id: "guaiac-smoke",
    name: "Guaiac Smoke",
    description: "Smoky guaiac wood with tobacco leaf and leather",
    image: cedarwoodNoirImage,
    price: 460,
    family: "Woody",
  },
  {
    id: "teak-forest",
    name: "Teak Forest",
    description: "Aged teak wood with moss and rain-soaked earth",
    image: sandalwoodSerenityImage,
    price: 455,
    family: "Woody",
  },
  {
    id: "birch-tar",
    name: "Birch Tar",
    description: "Smoky birch with cade oil and dark resins",
    image: vetiverEssenceImage,
    price: 470,
    family: "Woody",
  },
  {
    id: "ebony-woods",
    name: "Ebony Woods",
    description: "Rare ebony with Australian sandalwood and vanilla",
    image: cedarwoodNoirImage,
    price: 525,
    family: "Woody",
  },

  // AMBER FAMILY (10 fragrances)
  {
    id: "amber-sultan",
    name: "Amber Sultan",
    description: "The warmth of ancient amber meets the richness of golden saffron",
    image: amberSultanImage,
    price: 420,
    family: "Amber",
  },
  {
    id: "amber-renaissance",
    name: "Amber Renaissance",
    description: "Opulent amber accord with benzoin and precious myrrh",
    image: amberRenaissanceImage,
    price: 480,
    family: "Amber",
  },
  {
    id: "oriental-nights",
    name: "Oriental Nights",
    description: "Spiced amber with cinnamon, clove, and tonka bean",
    image: amberSultanImage,
    price: 465,
    family: "Amber",
  },
  {
    id: "golden-amber",
    name: "Golden Amber",
    description: "Radiant amber with Madagascar vanilla and honey",
    image: amberRenaissanceImage,
    price: 450,
    family: "Amber",
  },
  {
    id: "amber-royale",
    name: "Amber Royale",
    description: "Majestic amber with labdanum and Turkish rose",
    image: amberSultanImage,
    price: 495,
    family: "Amber",
  },
  {
    id: "spice-route",
    name: "Spice Route",
    description: "Amber with cardamom, nutmeg, and silk musk",
    image: amberRenaissanceImage,
    price: 475,
    family: "Amber",
  },
  {
    id: "amber-noir",
    name: "Amber Noir",
    description: "Dark amber with black vanilla and smoky incense",
    image: amberSultanImage,
    price: 485,
    family: "Amber",
  },
  {
    id: "desert-amber",
    name: "Desert Amber",
    description: "Sun-warmed amber with date honey and sand",
    image: amberRenaissanceImage,
    price: 460,
    family: "Amber",
  },
  {
    id: "amber-divine",
    name: "Amber Divine",
    description: "Sacred amber with frankincense and golden resins",
    image: amberSultanImage,
    price: 510,
    family: "Amber",
  },
  {
    id: "velvet-amber",
    name: "Velvet Amber",
    description: "Soft amber with cashmere musk and powdery iris",
    image: amberRenaissanceImage,
    price: 445,
    family: "Amber",
  },

  // FRESH FAMILY (10 fragrances)
  {
    id: "bergamot-sun",
    name: "Bergamot Sun",
    description: "Radiant bergamot with Amalfi lemon and sea salt",
    image: bergamotSunImage,
    price: 390,
    family: "Fresh",
  },
  {
    id: "neroli-lumiere",
    name: "Neroli Lumière",
    description: "Luminous neroli with orange blossom and petit grain",
    image: neroliLumiereImage,
    price: 410,
    family: "Fresh",
  },
  {
    id: "aqua-divina",
    name: "Aqua Divina",
    description: "Marine accord with sea breeze and white musk",
    image: bergamotSunImage,
    price: 385,
    family: "Fresh",
  },
  {
    id: "citrus-paradise",
    name: "Citrus Paradise",
    description: "Grapefruit, yuzu, and mandarin with green tea",
    image: neroliLumiereImage,
    price: 395,
    family: "Fresh",
  },
  {
    id: "mediterranean-breeze",
    name: "Mediterranean Breeze",
    description: "Fig leaves with salty air and white flowers",
    image: bergamotSunImage,
    price: 405,
    family: "Fresh",
  },
  {
    id: "verde-brillante",
    name: "Verde Brillante",
    description: "Green notes with basil, mint, and cucumber water",
    image: neroliLumiereImage,
    price: 380,
    family: "Fresh",
  },
  {
    id: "silver-rain",
    name: "Silver Rain",
    description: "Wet stone with iris and clean musks",
    image: bergamotSunImage,
    price: 415,
    family: "Fresh",
  },
  {
    id: "citron-noir",
    name: "Citron Noir",
    description: "Black lemon with dark tea and smoked wood",
    image: neroliLumiereImage,
    price: 425,
    family: "Fresh",
  },
  {
    id: "azure-skies",
    name: "Azure Skies",
    description: "Ozone notes with lavender and clean cotton",
    image: bergamotSunImage,
    price: 400,
    family: "Fresh",
  },
  {
    id: "crystal-waters",
    name: "Crystal Waters",
    description: "Aquatic notes with lotus and transparent musk",
    image: neroliLumiereImage,
    price: 395,
    family: "Fresh",
  },
];

// Helper function to get perfumes by family
export const getPerfumesByFamily = (family: string): Perfume[] => {
  if (family === "All") return perfumes;
  return perfumes.filter((perfume) => perfume.family === family);
};

// Helper function to get a single perfume by id
export const getPerfumeById = (id: string): Perfume | undefined => {
  return perfumes.find((perfume) => perfume.id === id);
};

// Get all unique families
export const families = ["All", ...Array.from(new Set(perfumes.map((p) => p.family)))];
