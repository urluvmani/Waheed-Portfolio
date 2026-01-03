export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Waheed Arshad",
    jobTitle: "Excel Expert",
    description:
      "Excel expert specializing in data cleaning, automation, dashboards, and business reporting.",
    knowsAbout: [
      "Microsoft Excel",
      "Excel Automation",
      "Excel VBA",
      "Power Query",
      "Data Analysis",
      "Business Reporting",
    ],
    url: "https://yourdomain.com",
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Excel Consulting Services",
    areaServed: "Worldwide",
    serviceType: [
      "Excel Data Cleaning",
      "Excel Automation",
      "Excel Dashboards",
      "Excel Reporting",
    ],
    provider: {
      "@type": "Person",
      name: "Waheed Arshad",
    },
  };
}
