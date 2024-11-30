import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/nav/nav";
import Footer from "@/components/nav/footer";
import { Cinzel, Cinzel_Decorative } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL("https://goldenretreatinternational.com"),
  title: {
    default: "Golden Retreat Lombok Villas | Luxury Villa Investment",
    template: "%s | Golden Retreat Lombok Villas"
  },
  description:
    "A property development offering luxurious Villas set in the heart ofLombok’s best attractions.",
  keywords: [
    "Lombok villas",
    "luxury villa investment",
    "Teluk Kode",
    "private pool villa",
    "Indonesia property investment"
  ],
  authors: [{ name: "Golden Retreat International" }],
  creator: "Golden Retreat International",
  publisher: "Golden Retreat International",
  category: "investment",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goldenretreatinternational.com",
    siteName: "Golden Retreat Lombok Villas",
    title: "Golden Retreat Lombok Villas | Luxury Villa Investment in Paradise",
    description:
      "Discover exclusive villa investment opportunities in Teluk Kode, Lombok. Modern tropical villas with private pools in a pristine beachfront location.",
    images: [
      {
        url: "https://utfs.io/f/dJLJpH9Hrkw3F8fdEjY3NDtBULj4yZxze2nb6wR7gl1iPYX0",
        width: 1200,
        height: 630,
        alt: "Golden Retreat Lombok Villas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Retreat Lombok Villas | Luxury Villa Investment",
    description:
      "Exclusive villa investment opportunities in Teluk Kode, Lombok. Modern tropical villas with private pools.",
    images: [
      "https://utfs.io/f/dJLJpH9Hrkw3F8fdEjY3NDtBULj4yZxze2nb6wR7gl1iPYX0"
    ]
  },
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/apple-icon.png" }]
  },
  alternates: {
    canonical: "https://goldenretreatinternational.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${deco.className} ${cinzel.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
      <GoogleAnalytics gaId="G-D6ZSFR1KNS" />
    </html>
  );
}
