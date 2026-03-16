import Link from "next/link";
import { locations } from "@/data/locations";
import styles from "./page.module.css";

export const metadata = {
  title: "Barbers in Wimbledon | Evan Barbers — 95 The Broadway, SW19",
  description:
    "Visit Evan Barbers Wimbledon at 95 The Broadway, SW19 1QG. Walk-in barbers offering skin fades, haircuts, beard trims and hot towel shaves. Open Monday to Sunday.",
  alternates: { canonical: "/wimbledon" },
  openGraph: {
    title: "Barbers in Wimbledon | Evan Barbers — 95 The Broadway, SW19",
    description:
      "Visit Evan Barbers Wimbledon at 95 The Broadway, SW19 1QG. Walk-in barbers offering skin fades, haircuts, beard trims and hot towel shaves. Open Monday to Sunday.",
    url: "https://evanbarbers.co.uk/wimbledon",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbers in Wimbledon | Evan Barbers — 95 The Broadway, SW19",
    description:
      "Visit Evan Barbers Wimbledon at 95 The Broadway, SW19 1QG. Walk-in barbers offering skin fades, haircuts, beard trims and hot towel shaves. Open Monday to Sunday.",
  },
};

const wimbledonServices = [
  { name: "Haircut", price: "£17" },
  { name: "Scissor Cut", price: "£17" },
  { name: "Skin Fade", price: "£19" },
  { name: "Wet Shave", price: "£15" },
  { name: "Beard Trim Only", price: "£7" },
  { name: "Beard Trim & Shape Up", price: "£9" },
  { name: "O.A.P (Mon–Thu)", price: "£13" },
  { name: "Kids (Under 12, Mon–Thu)", price: "£14" },
  { name: "Crew Cut (No 1–4, Mon–Thu)", price: "£14" },
];

export default function WimbledonPage() {
  const wimbledon = locations.wimbledon;

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>
        Barbers in Wimbledon — 95 The Broadway, SW19
      </h1>

      {/* About this branch */}
      <section className={styles.section}>
        <p>
          Evan Barbers Wimbledon is located at 95 The Broadway, SW19 1QG —
          right in the heart of Wimbledon town centre, a short walk from
          Wimbledon station and Wimbledon Theatre. We are a walk-in barbershop
          open seven days a week, serving clients from across Wimbledon, Raynes
          Park, South Wimbledon and Colliers Wood.
        </p>
        <p>
          Whether you are after a sharp skin fade, a classic scissor cut, a
          traditional wet shave or a beard trim, our experienced barbers deliver
          consistent, quality results at honest prices. We have been part of the
          South London barbering scene since 2009, building a loyal following
          among locals who value skill, reliability and a relaxed atmosphere.
          Kids and seniors are very welcome, with discounted rates available
          Monday to Thursday.
        </p>
        <p>
          No appointment is ever needed — simply walk in during opening hours
          and one of our barbers will take care of you.
        </p>
        <div className={styles.linkList}>
          <Link href="/services" className={styles.ctaButton}>
            View Full Price List
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services & Prices */}
      <section className={styles.section}>
        <h2>Services &amp; Prices at Wimbledon</h2>
        <div className={styles.infoBox}>
          {wimbledonServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <span>{service.name}</span>
              <span className={styles.servicePrice}>{service.price}</span>
            </div>
          ))}
        </div>
        <p>
          Walk-ins only — no appointment needed.{" "}
          <Link href="/grand-drive">Also visit our Morden branch</Link> on Grand
          Drive (SW20).
        </p>
      </section>

      {/* Opening Hours */}
      <section className={styles.section}>
        <h2>Opening Hours</h2>
        <div className={styles.infoBox}>
          <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
          <p>Sunday: 10:00 AM – 5:00 PM</p>
        </div>
      </section>

      {/* How to Find Us */}
      <section className={styles.section}>
        <h2>How to Find Us</h2>
        <div className={styles.infoBox}>
          <p>
            <strong>Address:</strong>{" "}
            <a
              href={wimbledon.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              95 The Broadway, Wimbledon, SW19 1QG
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${wimbledon.phone.replace(/\s/g, "")}`}>
              {wimbledon.phone}
            </a>
          </p>
          <p>
            We are on The Broadway in Wimbledon town centre, close to Wimbledon
            station (National Rail and District line) and Wimbledon Theatre.
            Buses along The Broadway stop nearby.
          </p>
        </div>
        <div className={styles.linkList}>
          <Link href="/about" className={styles.ctaSecondary}>
            About Evan Barbers
          </Link>
          <Link href="/grand-drive" className={styles.ctaSecondary}>
            Our Morden Branch
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
