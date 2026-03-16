import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://evanbarbers.co.uk"),
  alternates: { canonical: "/" },
  verification: {
    google: "mawZf_IrG13FzkERTYRN9ie0Qbu6b0jm1rbYJdSC01E",
  },
  title: "Barbers in Wimbledon & Morden | Evan Barbers — Since 2009",
  description:
    "Walk-in barbers in Wimbledon (SW19) and Morden (SW20). Skin fades, haircuts, hot towel shaves and beard trims at Evan Barbers. No appointment needed. Open 7 days.",
  openGraph: {
    title: "Barbers in Wimbledon & Morden | Evan Barbers — Since 2009",
    description:
      "Walk-in barbers in Wimbledon (SW19) and Morden (SW20). Skin fades, haircuts, hot towel shaves and beard trims at Evan Barbers. No appointment needed. Open 7 days.",
    url: "https://evanbarbers.co.uk",
    siteName: "Evan Barbers",
    images: [{ url: "/evanbarbers/logo.webp", width: 800, height: 800 }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbers in Wimbledon & Morden | Evan Barbers — Since 2009",
    description:
      "Walk-in barbers in Wimbledon (SW19) and Morden (SW20). Skin fades, haircuts, hot towel shaves and beard trims at Evan Barbers. No appointment needed. Open 7 days.",
    images: ["/evanbarbers/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BarberShop",
      "@id": "https://evanbarbers.co.uk/#granddrive",
      name: "Evan Barbers - Grand Drive",
      description: "Premium men's grooming services since 2009",
      url: "https://evanbarbers.co.uk/grand-drive",
      telephone: "+447928186951",
      image: "https://evanbarbers.co.uk/evanbarbers/grand-drive-exterior.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "358 Grand Drive",
        postalCode: "SW20 9NQ",
        addressLocality: "London",
        addressCountry: "GB",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "17:00",
        },
      ],
      priceRange: "£",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.392,
        longitude: -0.225,
      },
      sameAs: [
        "https://maps.google.com/?q=Evan+Barbers,+358+Grand+Drive,+SW20+9NQ,+London",
        "https://www.facebook.com/Evanbarbers/",
        "https://www.instagram.com/evanbarbers/",
      ],
      hasMap:
        "https://maps.google.com/?q=Evan+Barbers,+358+Grand+Drive,+SW20+9NQ,+London",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
      },
    },
    {
      "@type": "BarberShop",
      "@id": "https://evanbarbers.co.uk/#wimbledon",
      name: "Evan Barbers - Wimbledon",
      description: "Premium men's grooming services since 2009",
      url: "https://evanbarbers.co.uk/wimbledon",
      telephone: "+447928186951",
      image: "https://evanbarbers.co.uk/evanbarbers/logo.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "95 The Broadway",
        postalCode: "SW19 1QG",
        addressLocality: "London",
        addressCountry: "GB",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "10:00",
          closes: "17:00",
        },
      ],
      priceRange: "£",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.4194,
        longitude: -0.2041,
      },
      sameAs: [
        "https://maps.google.com/?q=Evan+Barbers,+95+The+Broadway,+SW19+1QG,+London",
        "https://www.facebook.com/Evanbarbers/",
        "https://www.instagram.com/evanbarbers/",
      ],
      hasMap:
        "https://maps.google.com/?q=Evan+Barbers,+95+The+Broadway,+SW19+1QG,+London",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "4",
        bestRating: "5",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://evanbarbers.co.uk/#website",
      url: "https://evanbarbers.co.uk",
      name: "Evan Barbers",
      description:
        "Walk-in barbers in Wimbledon and Morden, South London. Skin fades, haircuts, hot towel shaves and beard trims since 2009.",
      publisher: {
        "@id": "https://evanbarbers.co.uk/#granddrive",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-4QFRLEGCFQ" />
    </html>
  );
}
