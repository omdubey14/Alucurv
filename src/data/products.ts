import { Product } from "@/types";

export const productsData: Product[] = [
  {
    id: "aluminium-windows",
    categoryNumber: "01",
    name: "Aluminium Windows",
    subtitle: "High-precision architectural window systems built for maximum daylight and acoustic isolation.",
    description:
      "Engineered slim-profile aluminium windows engineered to seamlessly connect indoor living with the exterior landscape while ensuring structural rigidity and weather sealing.",
    longDescription:
      "Alucurve Aluminium Windows combine ultra-thin sightlines with structural thermal breaks. Designed for extreme durability and effortless operation, our windows are engineered with high-density EPDM gaskets and multi-point locking hardware for total peace of mind.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Profile Width", value: "Thin 25mm – 42mm sightline" },
      { label: "Glass Options", value: "6mm – 32mm Double / Triple Glazed" },
      { label: "Acoustic Rating", value: "Up to 42 dB Sound Reduction" },
      { label: "Warranty", value: "25-Year Durable Warranty" },
    ],
    features: [
      "Concealed hinge mechanisms for sleek aesthetic",
      "Polyamide thermal break for superior energy savings",
      "Anodized & PVDF powder coated metallic finishes",
      "25-Year durable warranty against corrosion & structural deflection",
    ],
    applications: ["Luxury Villas", "High-Rise Apartments", "Boutique Hotels", "Modern Residences"],
    tag: "Architectural Benchmark",
  },
  {
    id: "sliding-windows",
    categoryNumber: "02",
    name: "Sliding Windows",
    subtitle: "Minimalist sliding glass wall systems with flush floor-recessed tracks.",
    description:
      "Ultra-large glass panes sliding smoothly on stainless steel ball-bearing rollers with ultra-slim interlocking stiles.",
    longDescription:
      "Our minimal sliding window systems feature recessed bottom frames that sink flat into the flooring, delivering seamless indoor-to-outdoor floor continuity. Engineered for effortless sliding even with glass panels weighing up to 400kg.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Interlock Width", value: "20mm Ultra-Slim Profile" },
      { label: "Max Sash Height", value: "Up to 4.5 Meters" },
      { label: "Track Mechanism", value: "Heavy-Duty Stainless Steel Roller" },
      { label: "Water Tightness", value: "E1050 Class Rating" },
    ],
    features: [
      "Zero-threshold flush floor transition",
      "Heavy load bearing precision track systems",
      "Integrated drainage channels for heavy rain resistance",
      "Motorized automatic sliding option available",
    ],
    applications: ["Panoramic Living Rooms", "Garden Patios", "Penthouse Terraces", "Luxury Resorts"],
    tag: "Minimal Interlocks",
  },
  {
    id: "casement-windows",
    categoryNumber: "03",
    name: "Casement Windows",
    subtitle: "Turn, tilt, and side-hung windows designed for superior ventilation and air tightness.",
    description:
      "Classic turn-and-tilt casement windows engineered with dual rubber seals for unmatched thermal efficiency.",
    longDescription:
      "Casement windows open inward or outward to catch breeze from any angle. When closed, double compression seals press tightly against the aluminium profile frame, preventing air leakage and dust infiltration even in stormy conditions.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Opening Modes", value: "Side-Hung, Top-Hung, Tilt & Turn" },
      { label: "Thermal Value", value: "U-Value down to 1.2 W/m²K" },
      { label: "Hardware", value: "European Concealed Hinges" },
      { label: "Air Permeability", value: "Class 4 Certified" },
    ],
    features: [
      "Tilt mode allows continuous rain-safe ventilation",
      "Perimeter multi-point locking gear",
      "Integrated fly screen options (pull-down / magnetic)",
      "High strength friction stays for wind resistance",
    ],
    applications: ["Master Bedrooms", "Architectural Extensions", "Eco Homes", "Corner Facades"],
    tag: "High Airtightness",
  },
  {
    id: "aluminium-doors",
    categoryNumber: "04",
    name: "Aluminium Doors",
    subtitle: "Grand entrance pivot and swing doors engineered to make a bold architectural impression.",
    description:
      "Custom pivot, single, and double leaf entrance doors with integrated smart access and robust aluminium framing.",
    longDescription:
      "Alucurve main entrance doors blend security with high design. Featuring oversized pivot hinges capable of holding 250kg doors, custom metal panel textures, and flush glass integration, these doors set the tone for luxury architecture.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Door Types", value: "Offset Pivot, Heavy Swing, Flush Panel" },
      { label: "Max Width", value: "Up to 2.2 Meters per leaf" },
      { label: "Locking System", value: "5-Point Biometric / Keyless Smart Lock" },
      { label: "Finish Options", value: "Anodized Bronze, Textured Graphite, Wood-grain" },
    ],
    features: [
      "Custom heavy-duty pivot bearings with hold-open",
      "Reinforced core with thermal insulation sandwich",
      "Subtle integrated LED handle lighting",
      "Flush magnetic threshold seals",
    ],
    applications: ["Villa Entrances", "Commercial Showrooms", "Executive Suites", "Architectural Gates"],
    tag: "Grand Entrances",
  },
  {
    id: "sliding-doors",
    categoryNumber: "05",
    name: "Sliding Doors",
    subtitle: "Multi-panel telescoping and pocket sliding doors for seamless indoor-outdoor flows.",
    description:
      "Telescopic multi-track sliding door systems that disappear entirely into wall pockets for maximum clearance.",
    longDescription:
      "Experience true spatial freedom with Alucurve sliding door systems. Available in 2, 3, or 4-track configurations, panels can slide open side-by-side or hide into wall pockets to transform enclosed spaces into open-air verandas.",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Track Options", value: "Mono, Double, Triple, Quad Track" },
      { label: "Panel Configuration", value: "Pocket, Stacking, Corner 90° Open" },
      { label: "Glass Specs", value: "Toughened Laminated Low-E" },
      { label: "Operation", value: "Smooth Manual / Whisper Automation" },
    ],
    features: [
      "Post-less 90° glass corner sliding connection",
      "Concealed soft-close braking damper",
      "High capacity sub-floor water drainage channel",
      "Ergonomic flush pull handles",
    ],
    applications: ["Poolside Lounges", "Terrace Openings", "Boutique Cafes", "Luxury Residences"],
    tag: "Pocket & Corner",
  },
  {
    id: "system-windows",
    categoryNumber: "06",
    name: "System Windows",
    subtitle: "Standardized European-spec structural aluminium profiles engineered for extreme performance.",
    description:
      "Modular system window configurations featuring standardized extrusions for acoustic isolation and monsoon defense.",
    longDescription:
      "System windows are systematically engineered profile solutions where every joint, gasket, corner bracket, and glass bead is precision manufactured according to strict European standard specifications. Tested against water pressure, high wind loads, and thermal stress.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Profile Alloy", value: "6063-T6 Architectural Grade Aluminium" },
      { label: "Structural Depth", value: "65mm, 75mm, 90mm System Series" },
      { label: "Water Tightness", value: "Tested up to 900 Pa" },
      { label: "Life Cycle", value: "Tested for 50,000+ cycle open/close" },
    ],
    features: [
      "Precision corner cleat crimping for zero joint gaps",
      "Continuous double EPDM rubber seals",
      "Standardized hardware compatibility",
      "High UV & salt-spray resistant powder coatings",
    ],
    applications: ["High-rise Towers", "Coastal Properties", "Commercial Complexes", "Luxury Homes"],
    tag: "Certified Engineering",
  },
  {
    id: "glass-solutions",
    categoryNumber: "07",
    name: "Glass Solutions",
    subtitle: "Custom architectural glass work, structural glazed walls, acoustic partitions & frameless glazing.",
    description:
      "High-performance glass work engineered for solar control, acoustic silencing, structural safety, and daylight transmission.",
    longDescription:
      "Glass is the core of modern architecture. Alucurve supplies and installs advanced glass solutions ranging from double Low-E glazed units that cut solar heat gain by up to 75% to acoustic PVB laminated partitions and frameless shower enclosures.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Glass Types", value: "Toughened, Laminated, Low-E, Tinted, Acoustic" },
      { label: "Thickness Range", value: "8mm to 39.52mm Structural SentryGlas" },
      { label: "Heat Cut", value: "Up to 78% Solar Heat Protection" },
      { label: "Safety Rating", value: "EN 12600 Class 1(B)1 Safety Standard" },
    ],
    features: [
      "Low-E coating reflects heat keeping interiors cool",
      "Acoustic PVB interlayer reduces city noise",
      "Custom ceramic print glass patterns",
      "Structural silicone sealant glass-to-glass joints",
    ],
    applications: ["Glass Partitions", "Skylights & Canopy", "Office Boardrooms", "Frameless Showers"],
    tag: "Solar & Acoustic",
  },
  {
    id: "curtain-wall-systems",
    categoryNumber: "08",
    name: "Curtain Wall Systems",
    subtitle: "Unitized & stick facade systems for commercial towers and high-impact building exteriors.",
    description:
      "Continuous external glass & aluminium facade envelopes that protect buildings from elements while creating striking exteriors.",
    longDescription:
      "Alucurve curtain wall systems allow architects to create soaring glass facades with minimal visible structural support. Available in stick-built systems for bespoke geometry or unitized factory-assembled modules for rapid tower installation.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "System Types", value: "Unitized Module & Stick Curtain Wall" },
      { label: "Facade Grid", value: "Caped, Semi-unitized, or Structural Glazed" },
      { label: "Seismic Rating", value: "Engineered for Zone IV / V Earthquakes" },
      { label: "Fire Resistance", value: "2-Hour Smoke & Edge Perimeter Stop" },
    ],
    features: [
      "Factory-controlled unitized assembly ensures leak-proof quality",
      "Thermal expansion joints built into transom connections",
      "Integrated exterior shading louvers & sunblades",
      "Fully compatible with automated operable vent sashes",
    ],
    applications: ["Corporate Headquarters", "IT Parks", "Shopping Malls", "Institutional Buildings"],
    tag: "High-Rise Facades",
  },
  {
    id: "custom-architectural-solutions",
    categoryNumber: "09",
    name: "Custom Architectural Solutions",
    subtitle: "Tailor-made aluminium extrusions, glass skywalks, motorized louvers, and bespoke enclosures.",
    description:
      "Bespoke engineering for complex architectural geometries, curved glass profiles, custom sunshades, and operable glass roofs.",
    longDescription:
      "When standard products fall short, Alucurve’s custom design division steps in. We work hand-in-hand with architects and structural engineers to conceptualize, mock up, and fabricate one-of-a-kind glass skywalks, motorized pergolas, curved window frames, and kinetic aluminium shading facades.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    specs: [
      { label: "Customization", value: "100% Bespoke Geometry & Profile Dies" },
      { label: "Engineering", value: "FEA Structural Analysis & Wind Tunnel Sim" },
      { label: "Automation", value: "BMS / Smart Home Motorized Integration" },
      { label: "Material Finish", value: "Custom RAL Colors, Anodized & Copper Look" },
    ],
    features: [
      "Prototyping & full-scale mock-up testing prior to production",
      "Kinetic moving glass & shading louvers",
      "Curved and double-bent glass installation",
      "Structural steel + aluminium hybrid engineering",
    ],
    applications: ["Luxury Villas", "Flagship Stores", "Museums & Art Galleries", "Architectural Skylights"],
    tag: "Bespoke Engineering",
  },
];
