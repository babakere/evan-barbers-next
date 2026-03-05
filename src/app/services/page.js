"use client";

import { CheckCircle, Scissors } from "lucide-react";
import { isBranchOpen, getNextOpenTime } from "@/utils/branchStatus";
import styles from "./page.module.css";

const grandDriveServices = [
  {
    name: "Haircut",
    price: "£16",
    description: "A classic haircut tailored to your style.",
  },
  {
    name: "Wash Cut & Blow Dry",
    price: "£20",
    description: "Includes a relaxing wash and styled blow dry.",
  },
  {
    name: "Hot Towel Shave",
    price: "£15",
    description: "Traditional shave with a hot towel finish.",
  },
  {
    name: "Head Shave",
    price: "£15",
    description: "Full head shave for a clean and fresh look.",
  },
  {
    name: "Boys Under 12 (Tue–Thu)",
    price: "£13",
    description: "A tailored haircut for boys under 12.",
  },
  {
    name: "O.A.P.'s (Tue–Thu, 65 & Over)",
    price: "£12",
    description: "Special haircut for seniors.",
  },
  {
    name: "Crew Cut (Tue–Thu)",
    price: "£13",
    description: "A simple and sharp crew cut style.",
  },
  {
    name: "Skinfade",
    price: "£19",
    description: "Sharp and modern skin fade style.",
  },
  {
    name: "Beard Trim Only",
    price: "£7",
    description: "Quick and precise beard trim.",
  },
  {
    name: "Beard Trim & Shape Up",
    price: "£9",
    description: "Detailed beard trim with shaping.",
  },
  {
    name: "Ear Wax",
    price: "£4",
    description: "Quick and effective ear wax removal.",
  },
  { name: "Nose Wax", price: "£4", description: "Painless nose hair wax." },
  {
    name: "Face Mask",
    price: "£5",
    description: "Rejuvenating face mask for clean, smooth skin.",
  },
];

const wimbledonServices = [
  {
    name: "Haircut",
    price: "£17",
    description: "A classic haircut tailored to your style.",
  },
  {
    name: "Scissor Cut",
    price: "£17",
    description: "A precision scissor cut for a refined look.",
  },
  {
    name: "Skin Fade",
    price: "£19",
    description: "Sharp and modern skin fade style.",
  },
  {
    name: "Wet Shave",
    price: "£15",
    description: "Traditional shave with a hot towel finish.",
  },
  {
    name: "Beard Trim Only",
    price: "£7",
    description: "Quick and precise beard trim.",
  },
  {
    name: "Beard Trim & Shape Up",
    price: "£9",
    description: "Detailed beard trim with shaping.",
  },
  {
    name: "O.A.P (Mon–Thu)",
    price: "£13",
    description: "Special haircut for seniors.",
  },
  {
    name: "Kids (Under 12, Mon–Thu)",
    price: "£14",
    description: "A tailored haircut for children under 12.",
  },
  {
    name: "Crew Cut (No 1–4, Mon–Thu)",
    price: "£14",
    description: "Classic crew cut with length options.",
  },
];

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
      <h1 className={styles.pageTitle}>Our Services</h1>
      <p className={styles.subtitle}>
        No appointments necessary! Walk-ins welcome at both branches.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h2 className={styles.branchName}>Grand Drive</h2>
          <BranchStatus branch="grandDrive" />
          <ServiceList services={grandDriveServices} />
        </div>

        <div className={styles.card}>
          <h2 className={styles.branchName}>Wimbledon</h2>
          <BranchStatus branch="wimbledon" />
          <ServiceList services={wimbledonServices} />
        </div>
      </div>

      <p className={styles.tagline}>
        "Your trusted grooming destination since 2009."
      </p>
    </div>
  );
}
