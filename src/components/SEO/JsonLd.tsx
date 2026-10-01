import React from "react";
import { companyConfig } from "@/config/company";

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyConfig.name,
    "alternateName": companyConfig.shortName,
    "url": "https://www.alucurve.in",
    "logo": "https://www.alucurve.in/icon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyConfig.phone,
      "email": companyConfig.email,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      companyConfig.social.instagram,
      companyConfig.social.facebook,
      companyConfig.social.linkedin,
      companyConfig.social.youtube
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyConfig.name,
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    "@id": "https://www.alucurve.in",
    "url": "https://www.alucurve.in",
    "telephone": companyConfig.phone,
    "email": companyConfig.email,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${companyConfig.address.street}, ${companyConfig.address.area}`,
      "addressLocality": companyConfig.address.city,
      "addressRegion": companyConfig.address.state,
      "postalCode": companyConfig.address.pincode,
      "addressCountry": companyConfig.address.country
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "19:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
};
