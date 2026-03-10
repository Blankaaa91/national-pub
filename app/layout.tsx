import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingMenuButton } from "@/components/FloatingMenuButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "National Pub — Bevaix",
    template: "%s | National Pub Bevaix",
  },
  description:
    "Le pub convivial de Bevaix. Bières, cocktails, snacks, billard, babyfoot, fléchettes et air hockey. Consultez notre menu en ligne.",
  keywords: ["pub", "bar", "Bevaix", "National Pub", "Neuchâtel", "bières", "cocktails", "menu"],
  openGraph: {
    title: "National Pub — Bevaix",
    description: "Ambiance, boissons et bons moments au National Pub de Bevaix.",
    locale: "fr_CH",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${crimson.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingMenuButton />
      </body>
    </html>
  );
}
