import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "Waheed Arshad" }],
  creator: "Waheed Arshad",
  openGraph: {
    type: "website",
    title: "Excel Expert | Data Automation & Reporting",
    description:
      "Professional Excel expert helping businesses automate reports, clean data, and build dashboards.",
    url: "https://yourdomain.com",
    siteName: "Excel Expert Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}</body>
    </html>
  );
}
