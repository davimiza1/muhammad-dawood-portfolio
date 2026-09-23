import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { BRAND } from "@/data/content";
import "./globals.css";

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-dawood-portfolio.vercel.app"),
  title: `${BRAND.name} | ${BRAND.role}`,
  description: BRAND.bio,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${BRAND.name} | ${BRAND.role}`,
    description: BRAND.bio,
    siteName: BRAND.name,
    type: "website",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable} h-full`}>
      <body className="min-h-full">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
