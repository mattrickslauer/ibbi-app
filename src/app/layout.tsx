import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "IBBI — Iglesia Bíblica Bautista Internacional | Punta Arenas, Chile",
  description:
    "Iglesia Bíblica Bautista Internacional en Punta Arenas, Patagonia, Chile. Una comunidad de fe, esperanza y amor.",
  keywords: ["iglesia", "bautista", "Punta Arenas", "Chile", "IBBI", "cristiana"],
  openGraph: {
    title: "IBBI — Iglesia Bíblica Bautista Internacional",
    description: "Una comunidad de fe, esperanza y amor en Punta Arenas, Chile.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
