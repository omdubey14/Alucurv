export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string; // E.164 format without +
  whatsappFormatted: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  googleMapsUrl: string;
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  stats: {
    label: string;
    value: string;
    suffix: string;
    description: string;
  }[];
}

export const companyConfig: CompanyConfig = {
  name: "Alucurve System Window Pvt. Ltd.",
  shortName: "ALUCURVE",
  tagline: "Aluminium Systems. Architectural Glass. Modern Living.",
  description:
    "Alucurve System Window Pvt. Ltd. is a premier aluminium solutions company specializing in manufacturing, engineering, and installing high-performance aluminium system windows, minimal sliding doors, and structural curtain walls.",
  phone: "+91 75669 31008",
  phoneRaw: "+917566931008",
  whatsappNumber: "917566931008", // Clean E.164 digits without + or spaces
  whatsappFormatted: "+91 75669 31008",
  email: "info@alucurve.com",
  address: {
    street: "Flat No. 107, High Street Apartment",
    area: "Omaxe City 2",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "453771",
    country: "India",
    full: "Flat No. 107, High Street Apartment, Omaxe City 2, Indore, Madhya Pradesh - 453771",
  },
  googleMapsUrl: "https://maps.google.com/?q=High+Street+Apartment+Omaxe+City+2+Indore+453771",
  businessHours: {
    weekdays: "09:30 AM – 07:00 PM",
    saturday: "10:00 AM – 07:00 PM",
    sunday: "Closed (By Appointment)",
  },
  social: {
    instagram: "https://instagram.com/alucurve_official",
    facebook: "https://facebook.com/alucurvesystems",
    linkedin: "https://linkedin.com/company/alucurve",
    youtube: "https://youtube.com/@alucurvesystems",
  },
  stats: [
    {
      label: "Years of Craft",
      value: "10",
      suffix: "+",
      description: "Dedicated to precision aluminium engineering",
    },
    {
      label: "Installations",
      value: "500",
      suffix: "+",
      description: "Residential villas & architectural commercial spaces",
    },
    {
      label: "Custom Solutions",
      value: "100",
      suffix: "%",
      description: "Tailored profile depths, colors & high-spec glass",
    },
    {
      label: "Warranty Coverage",
      value: "25",
      suffix: " Yrs",
      description: "25-year durable warranty on structural performance & weather sealing",
    },
  ],
};

/**
 * Generate a direct WhatsApp link with pre-filled context-aware message
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultText =
    "Hello Alucurve team, I would like to enquire about your premium aluminium system windows and architectural solutions. Please share more details.";
  const encodedText = encodeURIComponent(message || defaultText);
  
  // Strip any spaces, dashes, brackets or symbols so WhatsApp receives valid digits
  let cleanNumber = (companyConfig.whatsappNumber || "").replace(/\D/g, "");
  
  // If 10 digits (standard Indian mobile), automatically prepend India country code 91
  if (cleanNumber.length === 10) {
    cleanNumber = `91${cleanNumber}`;
  }

  return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;
}

export function getProductWhatsAppUrl(productName: string): string {
  const text = `Hello Alucurve team, I am interested in your ${productName}. Please share technical details, custom options, and pricing estimation.`;
  return getWhatsAppUrl(text);
}

export function getProjectWhatsAppUrl(projectTitle: string): string {
  const text = `Hello Alucurve team, I saw your project '${projectTitle}' on your website and would like a similar aluminium & architectural solution for my project.`;
  return getWhatsAppUrl(text);
}
