import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { locations } from "@/data/locations";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us | Evan Barbers - Get in Touch",
  description:
    "Contact Evan Barbers for inquiries about our services or general questions. Find our locations and opening hours.",
  openGraph: {
    title: "Contact Evan Barbers",
    description:
      "Reach out to Evan Barbers for inquiries, services, and locations.",
    url: "https://www.evanbarbers.org/contact",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
};

export default function Contact() {
  const grandDrive = locations.grandDrive;
  const wimbledon = locations.wimbledon;

  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>Contact Us</h1>

      {/* WhatsApp CTA */}
      <section className={styles.whatsappSection}>
        <h2>Get in Touch</h2>
        <p>Have a question? Message us directly on WhatsApp.</p>
        <a
          href="https://wa.me/447928186951?text=Hi%20Evan%20Barbers%2C%20I%20have%20a%20question"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          <MessageCircle size={20} />
          Message Us on WhatsApp
        </a>
        <div className={styles.directContact}>
          <p>Or reach us directly:</p>
          <a href="tel:+447928186951" className={styles.contactLink}>
            <Phone size={16} /> +44 7928 186951
          </a>
        </div>
      </section>

      {/* Location Cards */}
      <div className={styles.locationGrid}>
        <div className={styles.locationCard}>
          <h2>Grand Drive</h2>
          <p>
            <MapPin size={16} />
            <strong>Address:</strong> {grandDrive.address}
          </p>
          <p>
            <Phone size={16} />
            <strong>Phone:</strong> {grandDrive.phone}
          </p>
          <div className={styles.hours}>
            <Clock size={16} />
            <strong>Opening Hours:</strong>
          </div>
          <p>{grandDrive.hours.display.closed}</p>
          <p>{grandDrive.hours.display.weekday}</p>
          <p>{grandDrive.hours.display.sunday}</p>
        </div>

        <div className={styles.locationCard}>
          <h2>Wimbledon</h2>
          <p>
            <MapPin size={16} />
            <strong>Address:</strong> {wimbledon.address}
          </p>
          <p>
            <Phone size={16} />
            <strong>Phone:</strong> {wimbledon.phone}
          </p>
          <div className={styles.hours}>
            <Clock size={16} />
            <strong>Opening Hours:</strong>
          </div>
          <p>{wimbledon.hours.display.weekday}</p>
          <p>{wimbledon.hours.display.sunday}</p>
        </div>
      </div>

      {/* Maps */}
      <div className={styles.mapsGrid}>
        <div className={styles.mapBox}>
          <iframe
            title="Grand Drive Map"
            src={grandDrive.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className={styles.mapBox}>
          <iframe
            title="Wimbledon Map"
            src={wimbledon.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
