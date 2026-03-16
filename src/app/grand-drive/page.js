import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";
import styles from "./page.module.css";

export const metadata = {
  title: "Barbers in Morden | Evan Barbers — 358 Grand Drive, SW20",
  description:
    "Visit Evan Barbers Grand Drive at 358 Grand Drive, Morden, SW20 9NQ. Walk-in barbers offering skin fades, haircuts, beard trims and hot towel shaves. Open Tuesday to Sunday.",
  alternates: { canonical: "/grand-drive" },
  openGraph: {
    title: "Barbers in Morden | Evan Barbers — 358 Grand Drive, SW20",
    description:
      "Visit Evan Barbers Grand Drive at 358 Grand Drive, Morden, SW20 9NQ. Walk-in barbers offering skin fades, haircuts, beard trims and hot towel shaves. Open Tuesday to Sunday.",
    url: "https://evanbarbers.co.uk/grand-drive",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbers in Morden | Evan Barbers — 358 Grand Drive, SW20",
    description:
      "Visit Evan Barbers Grand Drive at 358 Grand Drive, Morden, SW20 9NQ. Walk-in barbers offering skin fades, haircuts, beard trims and hot towel shaves. Open Tuesday to Sunday.",
  },
};

const grandDriveServices = [
  { name: "Haircut", price: "£16" },
  { name: "Wash Cut & Blow Dry", price: "£20" },
  { name: "Hot Towel Shave", price: "£15" },
  { name: "Head Shave", price: "£15" },
  { name: "Boys Under 12 (Tue–Thu)", price: "£13" },
  { name: "O.A.P.'s (Tue–Thu, 65 & Over)", price: "£12" },
  { name: "Crew Cut (Tue–Thu)", price: "£13" },
  { name: "Skinfade", price: "£19" },
  { name: "Beard Trim Only", price: "£7" },
  { name: "Beard Trim & Shape Up", price: "£9" },
  { name: "Ear Wax", price: "£4" },
  { name: "Nose Wax", price: "£4" },
  { name: "Face Mask", price: "£5" },
];

export default function GrandDrivePage() {
  const grandDrive = locations.grandDrive;

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>
        Barbers in Morden — 358 Grand Drive, SW20
      </h1>

      <div className={styles.heroBanner}>
        <Image
          src="/evanbarbers/grand-drive-exterior.webp"
          alt="Evan Barbers Grand Drive shopfront at 358 Grand Drive, Morden"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 860px"
          className={styles.heroBannerImg}
        />
      </div>

      {/* About this branch */}
      <section className={styles.section}>
        <p>
          Evan Barbers Grand Drive is located at 358 Grand Drive, Morden, SW20
          9NQ — a well-established walk-in barbershop serving the local
          community across Morden, St Helier, Merton Park and Raynes Park. Open
          Tuesday to Sunday, we offer precision haircuts, skin fades, hot towel
          shaves and beard trims at honest prices.
        </p>
        <p>
          Close to Morden town centre and well connected by local buses, Grand
          Drive is a convenient stop for anyone looking for a reliable barber in
          SW20. We have been serving this part of South London since 2009,
          building a reputation for consistent quality and a friendly,
          no-fuss environment. Whether you are a regular or visiting for the
          first time, there is never any need to book — just walk in and we
          will take care of you.
        </p>
        <p>
          We offer special rates for boys under 12 and OAPs on Tuesday to
          Thursday, making us a great choice for families and seniors in the
          Morden area.
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
        <h2>Services &amp; Prices at Grand Drive</h2>
        <div className={styles.infoBox}>
          {grandDriveServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <span>{service.name}</span>
              <span className={styles.servicePrice}>{service.price}</span>
            </div>
          ))}
        </div>
        <p>
          Walk-ins only — no appointment needed.{" "}
          <Link href="/wimbledon">Also visit our Wimbledon branch</Link> on The
          Broadway (SW19).
        </p>
      </section>

      {/* Interior image */}
      <div className={styles.interiorBanner}>
        <Image
          src="/evanbarbers/grand-drive-interior.webp"
          alt="Inside Evan Barbers Grand Drive — barber chairs and modern interior"
          fill
          sizes="(max-width: 768px) 100vw, 860px"
          className={styles.heroBannerImg}
        />
      </div>

      {/* Opening Hours */}
      <section className={styles.section}>
        <h2>Opening Hours</h2>
        <div className={styles.infoBox}>
          <p>Monday: Closed</p>
          <p>Tuesday – Saturday: 9:00 AM – 6:00 PM</p>
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
              href={grandDrive.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              358 Grand Drive, Morden, SW20 9NQ
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${grandDrive.phone.replace(/\s/g, "")}`}>
              {grandDrive.phone}
            </a>
          </p>
          <p>
            We are situated on Grand Drive, a short distance from Morden town
            centre and Morden tube station (Northern line). Local buses on Grand
            Drive stop nearby.
          </p>
        </div>
        <div className={styles.linkList}>
          <Link href="/about" className={styles.ctaSecondary}>
            About Evan Barbers
          </Link>
          <Link href="/wimbledon" className={styles.ctaSecondary}>
            Our Wimbledon Branch
          </Link>
          <Link href="/contact" className={styles.ctaSecondary}>
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
