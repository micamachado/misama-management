import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets:["latin"], variable:"--font-display", weight:["500","600"] });
const sans = Manrope({ subsets:["latin"], variable:"--font-sans" });

export const metadata: Metadata = {
  title: "MISAMA Studio | Wellness, self-care & brand building",
  description: "MISAMA est un studio luxembourgeois spécialisé dans le développement, la commercialisation et le commerce de marques wellness et self-care.",
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>}
