import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav/nav";
import Footer from "@/components/nav/footer";
import { Cinzel, Cinzel_Decorative, Teachers } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const teachers = Teachers({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap"
});

const deco = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  preload: true,
  display: "swap"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Golden Retreat Lombok Villa",
  description: "Official page for Golden Retreat Lombok Villas"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${deco.className} ${cinzel.className} ${teachers.className} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
