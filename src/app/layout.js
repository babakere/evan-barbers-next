import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.evanbarbers.org"),
  title: "Evan Barbers | Your Trusted Grooming Destination",
  description:
    "Evan Barbers offers premium men's grooming services. Find us at Grand Drive and Wimbledon locations.",
  keywords: "Barbers, Grooming, Haircuts, London Barbers, Men's Grooming",
  openGraph: {
    title: "Evan Barbers | Your Trusted Grooming Destination",
    description: "Evan Barbers offers premium men's grooming services.",
    url: "https://www.evanbarbers.org",
    siteName: "Evan Barbers",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
