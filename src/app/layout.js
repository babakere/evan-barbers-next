import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
  metadataBase: new URL("https://www.evanbarbers.org"),
  title: "Evan Barbers | Your Trusted Grooming Destination",
  description:
    "Evan Barbers offers premium men's grooming services since 2009. Walk-ins welcome at our Grand Drive and Wimbledon locations in London.",
  keywords:
    "Barbers, Grooming, Haircuts, London Barbers, Men's Grooming, Morden Barbers, Wimbledon Barbers, SW20, SW19",
  openGraph: {
    title: "Evan Barbers | Your Trusted Grooming Destination",
    description:
      "Evan Barbers offers premium men's grooming services since 2009.",
    url: "https://www.evanbarbers.org",
    siteName: "Evan Barbers",
    images: [{ url: "/evanbarbers/logo.webp", width: 800, height: 800 }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Barbers | Your Trusted Grooming Destination",
    description: "Premium men's grooming services since 2009 in London.",
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
      "@id": "https://www.evanbarbers.org/#granddrive",
      name: "Evan Barbers - Grand Drive",
      description: "Premium men's grooming services since 2009",
      url: "https://www.evanbarbers.org",
      telephone: "+447928186951",
      image: "https://www.evanbarbers.org/evanbarbers/logo.webp",
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
    },
    {
      "@type": "BarberShop",
      "@id": "https://www.evanbarbers.org/#wimbledon",
      name: "Evan Barbers - Wimbledon",
      description: "Premium men's grooming services since 2009",
      url: "https://www.evanbarbers.org",
      telephone: "+447928186951",
      image: "https://www.evanbarbers.org/evanbarbers/logo.webp",
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
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebasNeue.variable}`}
    >
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
      </body>
    </html>
  );
}
