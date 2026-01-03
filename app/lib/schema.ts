export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://yourdomain.com/#person",

    name: "Waheed Arshad",
    jobTitle: "Excel Expert & Automation Consultant",
    description:
      "Excel expert with 20+ years of experience in data cleaning, automation, dashboards, VBA, and business reporting.",

    url: "https://yourdomain.com",
    sameAs: [
      "https://www.linkedin.com/in/waheed-arshad",
      "https://www.fiverr.com/yourusername",
    ],

    knowsAbout: [
      "Microsoft Excel",
      "Excel VBA Automation",
      "Power Query",
      "Data Cleaning",
      "Dashboard Design",
      "Business Reporting",
    ],
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://yourdomain.com/#services",

    name: "Excel Consulting & Automation Services",
    description:
      "Professional Excel consulting services including automation, data cleaning, dashboards, and business reporting.",

    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },

    provider: {
      "@type": "Person",
      "@id": "https://yourdomain.com/#person",
      name: "Waheed Arshad",
    },

    serviceType: [
      "Excel Data Cleaning",
      "Excel Automation",
      "Excel VBA",
      "Excel Dashboards",
      "Excel Reporting",
    ],
  };
}
