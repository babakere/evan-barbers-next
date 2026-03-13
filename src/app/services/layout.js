export const metadata = {
  title: "Services | Evan Barbers - Haircuts & Grooming Prices",
  description:
    "View all services and prices at Evan Barbers. Haircuts, hot towel shaves, beard trims and more at our Grand Drive and Wimbledon locations.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Evan Barbers - Haircuts & Grooming Prices",
    description:
      "View all services and prices at Evan Barbers across our Grand Drive and Wimbledon locations.",
    url: "https://evanbarbers.co.uk/services",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
