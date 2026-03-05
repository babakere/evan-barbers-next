import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, Mail } from "lucide-react";
import { locations } from "@/data/locations";
import styles from "./Footer.module.css";

export default function Footer() {
  const grandDrive = locations.grandDrive;
  const wimbledon = locations.wimbledon;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand + Nav + Socials */}
        <div className={`${styles.column} ${styles.brandColumn}`}>
          <h3 className={styles.brand}>Evan Barbers</h3>
          <p className={styles.tagline}>Finest Cuts Since 2009</p>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a href="mailto:evanbabaker@hotmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a
              href="https://wa.me/447928186951"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Grand Drive — hidden on mobile */}
        <div className={`${styles.column} ${styles.locationColumn}`}>
          <h4>Grand Drive</h4>
          <p>
            <MapPin size={13} />
            <a href={grandDrive.mapLink} target="_blank" rel="noopener noreferrer" className={styles.addressLink}>
              {grandDrive.address}
            </a>
          </p>
          <p>
            <Phone size={13} />
            <a href={`tel:${grandDrive.phone.replace(/\s/g, "")}`} className={styles.addressLink}>
              {grandDrive.phone}
            </a>
          </p>
          <div className={styles.hours}>
            <Clock size={13} />
            <div>
              <p>{grandDrive.hours.display.closed}</p>
              <p>{grandDrive.hours.display.weekday}</p>
              <p>{grandDrive.hours.display.sunday}</p>
            </div>
          </div>
        </div>

        {/* Wimbledon — hidden on mobile */}
        <div className={`${styles.column} ${styles.locationColumn}`}>
          <h4>Wimbledon</h4>
          <p>
            <MapPin size={13} />
            <a href={wimbledon.mapLink} target="_blank" rel="noopener noreferrer" className={styles.addressLink}>
              {wimbledon.address}
            </a>
          </p>
          <p>
            <Phone size={13} />
            <a href={`tel:${wimbledon.phone.replace(/\s/g, "")}`} className={styles.addressLink}>
              {wimbledon.phone}
            </a>
          </p>
          <div className={styles.hours}>
            <Clock size={13} />
            <div>
              <p>{wimbledon.hours.display.weekday}</p>
              <p>{wimbledon.hours.display.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Evan Barbers. All rights reserved.</p>
      </div>
    </footer>
  );
}
