import React from "react";
import { companyConfig } from "@/config/company";

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": companyConfig.name,
    "alternateName": companyConfig.shortName,
    "url": "https://www.alucurv.com",
    "logo": "https://www.alucurv.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyConfig.phone,
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
    "@id": "https://www.alucurv.com",
    "url": "https://www.alucurv.com",
    "telephone": companyConfig.phone,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyConfig.address.street,
      "addressLocality": companyConfig.address.city,
      "addressRegion": companyConfig.address.state,
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
