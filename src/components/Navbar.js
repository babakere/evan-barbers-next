"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={styles.navbar}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <Image
            src="/evanbarbers/logo.webp"
            alt="Evan Barbers Logo"
            width={44}
            height={44}
          />
          <span>Evan Barbers</span>
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          id="nav-links"
          className={`${styles.links} ${menuOpen ? styles.open : ""}`}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={pathname === href ? styles.active : ""}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
