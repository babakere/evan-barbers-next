import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { locations } from "@/data/locations";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Home | Evan Barbers - Finest Cuts Since 2009",
  description:
    "Welcome to Evan Barbers, offering premium men's grooming since 2009. Discover our locations, services, and quality haircuts.",
  openGraph: {
    title: "Evan Barbers | Finest Cuts Since 2009",
    description:
      "Experience top-notch grooming services and stylish haircuts at Evan Barbers.",
    url: "https://www.evanbarbers.org/",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
};

export default function Home() {
  const grandDrive = locations.grandDrive;
  const wimbledon = locations.wimbledon;

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Evan Barbers</h1>
          <p className={styles.heroSubtitle}>
            Experience the Finest Cuts Since 2009
          </p>
          <Image
            src="/evanbarbers/logo.webp"
            alt="Evan Barbers brand logo"
            width={100}
            height={100}
            className={styles.heroLogo}
          />

          {/* Locations Box */}
          <div className={styles.locationsBox}>
            <h2 className={styles.locationsTitle}>Our Locations</h2>
            <div className={styles.locationsGrid}>
              {/* Grand Drive */}
              <div className={styles.locationCard}>
                <h3 className={styles.locationName}>
                  <MapPin size={20} />
                  Grand Drive
                </h3>
                <p>
                  <strong>Address:</strong> {grandDrive.address}
                </p>
                <div className={styles.hoursBlock}>
                  <Clock size={16} />
                  <strong>Opening Hours:</strong>
                </div>
                <p>{grandDrive.hours.display.closed}</p>
                <p>{grandDrive.hours.display.weekday}</p>
                <p>{grandDrive.hours.display.sunday}</p>
              </div>

              {/* Wimbledon */}
              <div className={styles.locationCard}>
                <h3 className={styles.locationName}>
                  <MapPin size={20} />
                  Wimbledon
                </h3>
                <p>
                  <strong>Address:</strong> {wimbledon.address}
                </p>
                <div className={styles.hoursBlock}>
                  <Clock size={16} />
                  <strong>Opening Hours:</strong>
                </div>
                <p>{wimbledon.hours.display.weekday}</p>
                <p>{wimbledon.hours.display.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>More Than Just a Haircut</h2>
            <p>
              Since 2009, Evan Barbers has been providing top-notch grooming
              services, blending classic cuts with modern style. We pride
              ourselves on creating a welcoming atmosphere and delivering
              precision to every client.
            </p>
            <Link href="/about" className={styles.ctaButton}>
              Learn More About Us
            </Link>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/evanbarbers/Evan_interior.webp"
              alt="The interior of Evan Barbers"
              width={800}
              height={600}
              className={styles.roundedImage}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Clients Say</h2>
        <div className={styles.testimonialGrid}>
          {[
            {
              name: "John D.",
              text: "Great atmosphere and skilled barbers. I always leave looking sharp!",
            },
            {
              name: "Mark T.",
              text: "Evan Barbers never disappoints. The perfect blend of classic and modern styles.",
            },
            {
              name: "Alex R.",
              text: "Friendly staff and top-notch service. Highly recommended!",
            },
          ].map((t, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <p className={styles.testimonialName}>- {t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <h2>Visit Our Locations</h2>
        <div className={styles.mapContainer}>
          <iframe
            title="Map showing Evan Barbers locations in London"
            src={grandDrive.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
