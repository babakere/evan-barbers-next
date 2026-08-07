"use client";

import Link from "next/link";
import { CheckCircle, Scissors } from "lucide-react";
import { isBranchOpen, getNextOpenTime } from "@/utils/branchStatus";
import { locations } from "@/data/locations";
import styles from "./page.module.css";

function BranchStatus({ branch }) {
  const { status, closesAt } = isBranchOpen(branch);

  if (status === "Open Now") {
    return (
      <div className={styles.statusOpen}>
        <CheckCircle size={18} />
        Open Now {closesAt && `(Closes at ${closesAt})`}
      </div>
    );
  }

  return (
    <div className={styles.statusClosed}>
      <span className={styles.closedText}>
        {status === "Closed for Holiday" ? status : "Closed"}
      </span>
      <span className={styles.nextOpen}>{getNextOpenTime(branch)}</span>
    </div>
  );
}

function ServiceList({ services }) {
  return services.map((service, index) => (
    <div
      key={index}
      className={styles.serviceItem}
      style={{
        borderBottom: index !== services.length - 1 ? "1px solid #ddd" : "none",
      }}
    >
      <div className={styles.serviceRow}>
        <span className={styles.serviceName}>
          <Scissors size={14} />
          {service.name}
        </span>
        <span className={styles.servicePrice}>{service.price}</span>
      </div>
      {service.description && (
        <p className={styles.serviceDesc}>{service.description}</p>
      )}
    </div>
  ));
}

export default function Services() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>
        Haircuts, Fades &amp; Grooming — Prices for Grand Drive &amp; Wimbledon
      </h1>
      <p className={styles.subtitle}>
        No appointments necessary! Walk-ins welcome at both branches.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2 className={styles.branchName}>Grand Drive</h2>
          <BranchStatus branch="grandDrive" />
          <ServiceList services={locations.grandDrive.services} />
        </div>

        <div className={styles.card}>
          <h2 className={styles.branchName}>Wimbledon</h2>
          <BranchStatus branch="wimbledon" />
          <ServiceList services={locations.wimbledon.services} />
        </div>
      </div>

      <p className={styles.tagline}>
        &ldquo;Your trusted grooming destination since 2009.&rdquo;
      </p>
      <p className={styles.subtitle}>
        Have a question about our services?{" "}
        <Link href="/contact">Get in touch</Link> or just walk in — no
        appointment needed.
      </p>
    </div>
  );
}
