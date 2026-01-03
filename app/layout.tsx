import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com");

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "Excel Expert | Data Cleaning, Automation & Dashboards",
    template: "%s | Excel Expert",
  },

  description:
    "Excel Expert specializing in data cleaning, Excel automation, dashboards, and business reporting. Helping businesses turn raw data into actionable insights.",

  keywords: [
    "Excel Expert",
    "Microsoft Excel Specialist",
    "Excel Automation",
    "Excel Dashboards",
    "Excel Data Cleaning",
    "Excel VBA",
    "Power Query",
    "Business Reporting",
  ],

  authors: [{ name: "Waheed Arshad" }],
  creator: "Waheed Arshad",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Excel Expert Portfolio",
    title: "Excel Expert | Data Cleaning, Automation & Dashboards",
    description:
      "Professional Excel expert helping businesses automate reports, clean data, and build dashboards.",
    images: [
      {
        url: "/og.jpeg", // put this in /public/og.jpg
        width: 1200,
        height: 630,
        alt: "Waheed Arshad - Excel Expert Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Excel Expert | Data Cleaning, Automation & Dashboards",
    description:
      "Professional Excel expert helping businesses automate reports, clean data, and build dashboards.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    // optional:
    // apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
