import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Navigation } from "lucide-react";
import { locations } from "@/data/locations";
import styles from "./page.module.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Home | Evan Barbers - Finest Cuts Since 2009",
  description:
    "Welcome to Evan Barbers — premium men's grooming since 2009. Walk-ins welcome at our Grand Drive (SW20) and Wimbledon (SW19) locations.",
  openGraph: {
    title: "Evan Barbers | Finest Cuts Since 2009",
    description:
      "Experience top-notch grooming services and stylish haircuts at Evan Barbers.",
    url: "https://www.evanbarbers.org/",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
};

const galleryImages = [
  { src: "/evanbarbers/haircut1.webp", alt: "Precision fade haircut" },
  { src: "/evanbarbers/haircut2.webp", alt: "Classic taper cut" },
  { src: "/evanbarbers/haircut3.webp", alt: "Modern skin fade" },
  { src: "/evanbarbers/haircut4.webp", alt: "Sharp lined up cut" },
  { src: "/evanbarbers/haircut5.webp", alt: "Scissor cut and style" },
  { src: "/evanbarbers/haircut6.webp", alt: "Textured crop style" },
];

export default function Home() {
  const grandDrive = locations.grandDrive;
  const wimbledon = locations.wimbledon;

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/evanbarbers/supra.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Evan Barbers</h1>
          <p className={styles.heroSubtitle}>
            Experience the Finest Cuts Since 2009
          </p>
          <Image
            src="/evanbarbers/logo.webp"
            alt="Evan Barbers brand logo"
            width={90}
            height={90}
            className={styles.heroLogo}
          />

          <div className={styles.heroCtas}>
            <Link href="/services" className={styles.ctaPrimary}>
              View Services & Prices
            </Link>
            <Link href="/contact" className={styles.ctaSecondary}>
              Get in Touch
            </Link>
          </div>

          {/* Locations Box */}
          <div className={styles.locationsBox}>
            <h2 className={styles.locationsTitle}>Our Locations</h2>
            <div className={styles.locationsGrid}>
              {/* Grand Drive */}
              <div className={styles.locationCard}>
                <h3 className={styles.locationName}>
                  <MapPin size={18} />
                  Grand Drive
                </h3>
                <p>
                  <strong>Address:</strong> {grandDrive.address}
                </p>
                <div className={styles.hoursBlock}>
                  <Clock size={15} />
                  <strong>Opening Hours:</strong>
                </div>
                <p>{grandDrive.hours.display.closed}</p>
                <p>{grandDrive.hours.display.weekday}</p>
                <p>{grandDrive.hours.display.sunday}</p>
              </div>

              {/* Wimbledon */}
              <div className={styles.locationCard}>
                <h3 className={styles.locationName}>
                  <MapPin size={18} />
                  Wimbledon
                </h3>
                <p>
                  <strong>Address:</strong> {wimbledon.address}
                </p>
                <div className={styles.hoursBlock}>
                  <Clock size={15} />
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

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <h2>Our Work</h2>
        <p className={styles.gallerySubtitle}>
          Precision cuts and styles crafted for every client
        </p>
        <div className={styles.galleryGrid}>
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={styles.galleryItem}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className={styles.galleryImg}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
        <Link href="/services" className={styles.ctaButton}>
          View All Services &amp; Prices
        </Link>
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
                <p className={styles.testimonialQuote}>&ldquo;</p>
                <p className={styles.testimonialText}>{t.text}</p>
                <p className={styles.testimonialName}>— {t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Find Us Section */}
      <section className={styles.findUsSection}>
        <h2>Find Us</h2>
        <p className={styles.findUsSubtitle}>Walk-ins welcome — no appointment needed</p>
        <div className={styles.findUsGrid}>
          {[grandDrive, wimbledon].map((loc) => (
            <div key={loc.name} className={styles.findUsCard}>
              <h3 className={styles.findUsName}>{loc.name}</h3>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.findUsAddress}
              >
                <MapPin size={16} />
                {loc.address}
              </a>
              <div className={styles.findUsHours}>
                <Clock size={15} />
                <div>
                  {loc.hours.display.closed && <p>{loc.hours.display.closed}</p>}
                  <p>{loc.hours.display.weekday}</p>
                  <p>{loc.hours.display.sunday}</p>
                </div>
              </div>
              <a
                href={loc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionsBtn}
              >
                <Navigation size={15} />
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
