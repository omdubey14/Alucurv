import { GlassSolution } from "@/types";

export const glassSolutionsData: GlassSolution[] = [
  {
    id: "toughened-glass",
    title: "Toughened & Tempered Safety Glass",
    subtitle: "5x stronger than standard glass, engineered for high wind load & safety compliance.",
    description:
      "Thermally toughened glass manufactured by heating clear glass to 650°C followed by rapid air quenching. When fractured, breaks into small harmless blunt particles.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "High thermal shock resistance (up to 250°C differential)",
      "High bending & impact strength rating",
      "Ideal for frameless glass facades & doors",
    ],
    thicknessOptions: "6mm, 8mm, 10mm, 12mm, 15mm, 19mm",
    applications: ["Glass Balustrades", "Frameless Doors", "Window Glass", "Façade Panels"],
  },
  {
    id: "double-glazed-igu",
    title: "Double & Triple Glazed Low-E Units (IGU)",
    subtitle: "Insulated glass units with Argon gas layer for solar heat reflection & energy savings.",
    description:
      "Double glazing units feature two glass panes separated by an aluminium spacer bar filled with desiccant and hermetically sealed with Argon gas to stop heat transmission.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Cuts air conditioning energy consumption by up to 40%",
      "Low-E coating reflects UV & infrared heat rays",
      "Eliminates internal glass condensation in humid weather",
    ],
    thicknessOptions: "18mm (6+6+6) to 32mm (6+12+6+6)",
    applications: ["Air-Conditioned Villas", "Green Buildings", "Hot Climate Residences", "High-Rise Apartments"],
  },
  {
    id: "acoustic-laminated-glass",
    title: "Acoustic PVB Laminated Glass",
    subtitle: "Multi-layer sound dampening glass that blocks urban traffic & outdoor noise.",
    description:
      "Two or more glass layers bonded under heat and pressure with a specialized acoustic PVB (Polyvinyl Butyral) interlayer that absorbs sound vibration frequencies.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Reduces noise levels by up to 44 dB",
      "99% UV radiation blocking protects interior furniture",
      "Remains adhered to interlayer if broken for anti-burglary safety",
    ],
    thicknessOptions: "10.76mm, 12.76mm, 17.52mm, 21.52mm SentryGlas",
    applications: ["Bedroom Windows", "Airport Adjacent Properties", "Executive Cabins", "Recording Studios"],
  },
  {
    id: "frameless-shower-office-partitions",
    title: "Architectural Office & Shower Partitions",
    subtitle: "Minimal glass walls, frameless enclosures & matte frosted privacy partitions.",
    description:
      "Precision-measured structural glass partition systems with minimalist stainless steel or brass fittings, available in ultra-clear Starphire, frosted, or tinted fluted glass.",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop",
    features: [
      "Nano-coated easy-clean glass repellent to water spots",
      "Custom fluted, frosted, or gradient privacy films",
      "Heavy-duty self-closing hydraulic hinges",
    ],
    thicknessOptions: "10mm, 12mm Toughened Glass",
    applications: ["Luxury Bathroom Showers", "Corporate Office Cabins", "Meeting Rooms", "Interior Dividers"],
  },
];
