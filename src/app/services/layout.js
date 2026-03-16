export const metadata = {
  title: "Haircuts & Grooming Prices | Evan Barbers Wimbledon & Morden",
  description:
    "View all haircut, skin fade, beard trim and grooming prices at Evan Barbers. Walk-in service at our Grand Drive (SW20) and Wimbledon (SW19) barbershops.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Haircuts & Grooming Prices | Evan Barbers Wimbledon & Morden",
    description:
      "View all haircut, skin fade, beard trim and grooming prices at Evan Barbers. Walk-in service at our Grand Drive (SW20) and Wimbledon (SW19) barbershops.",
    url: "https://evanbarbers.co.uk/services",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haircuts & Grooming Prices | Evan Barbers Wimbledon & Morden",
    description:
      "View all haircut, skin fade, beard trim and grooming prices at Evan Barbers. Walk-in service at our Grand Drive (SW20) and Wimbledon (SW19) barbershops.",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
