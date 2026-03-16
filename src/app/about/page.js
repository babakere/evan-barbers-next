import Image from "next/image";
import Link from "next/link";
import { Star, Gamepad2, Tv, Sofa } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "About Evan Barbers | Barbershops in South London Since 2009",
  description:
    "Learn about Evan Barbers — two barbershop locations in Wimbledon and Morden, South London. Serving the community with precision haircuts, skin fades and grooming since 2009.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Evan Barbers | Barbershops in South London Since 2009",
    description:
      "Learn about Evan Barbers — two barbershop locations in Wimbledon and Morden, South London. Serving the community with precision haircuts, skin fades and grooming since 2009.",
    url: "https://evanbarbers.co.uk/about",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Evan Barbers | Barbershops in South London Since 2009",
    description:
      "Learn about Evan Barbers — two barbershop locations in Wimbledon and Morden, South London. Serving the community with precision haircuts, skin fades and grooming since 2009.",
  },
};

const reviews = [
  {
    name: "Prush",
    text: "Best barbers in Morden/Wimbledon, consistent and quality! Great team at Evan, highly recommend!",
    rating: 5,
  },
  {
    name: "Timmy",
    text: "Best barber shop in the area, wouldn't go anywhere else. Definitely recommend!",
    rating: 5,
  },
  {
    name: "Amy",
    text: "Brilliant with special needs children thank you again.",
    rating: 5,
  },
  {
    name: "Marshall",
    text: "Quality barbering, friendly and good price for service. Would recommend to anyone looking for a new barber.",
    rating: 5,
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      <h1 className={styles.pageTitle}>About Evan Barbers — South London Barbershops Since 2009</h1>

      {/* Our Story */}
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2>Our Story — Barbering in Wimbledon &amp; Morden Since 2009</h2>
          <p>
            Evan Barbers has been part of the South London barbering scene since
            2009. What started as a single chair in Wimbledon has grown into two
            well-established barbershops — one on The Broadway in Wimbledon
            (SW19) and one on Grand Drive in Morden (SW20). Over the years we
            have built a loyal client base across Merton, Raynes Park, Colliers
            Wood and South Wimbledon, serving everyone from professionals heading
            to work to kids getting their first proper haircut. We take pride in
            delivering consistent, quality cuts in a relaxed, walk-in
            environment — no appointments, no pretence, just good barbering.
          </p>
          <p>
            <Link href="/services">Explore our full range of services and prices</Link>, or{" "}
            <Link href="/contact">visit us at either of our two locations</Link> — no booking required.
          </p>
        </div>
        <Image
          src="/evanbarbers/wimbledon.webp"
          alt="Exterior view of Evan Barbers Wimbledon branch"
          width={800}
          height={600}
          className={styles.sectionImage}
        />
      </section>

      {/* Our Mission */}
      <section className={styles.sectionReverse}>
        <div className={styles.textBlock}>
          <h2>Our Mission as Local Barbers</h2>
          <p>
            Our mission is simple: provide precision haircuts, clean skin fades,
            sharp beard trims and traditional hot towel shaves at honest prices.
            Every barber at Evan Barbers is trained to blend classic technique
            with modern styles — whether you are after a textured crop, a zero
            fade or a full grooming service. We believe a great barbershop is
            about more than the cut — it is about the experience, the
            conversation and leaving the chair feeling your best.
          </p>
        </div>
        <Image
          src="/evanbarbers/grand-drive-exterior.webp"
          alt="Evan Barbers Grand Drive shopfront at 358 Grand Drive, Morden"
          width={800}
          height={600}
          className={styles.sectionImage}
        />
      </section>

      {/* Waiting Area */}
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2>Spacious Waiting Area</h2>
          <p>
            Relax in our spacious waiting area, designed for your comfort. Enjoy
            entertainment options like a PlayStation, TV, and cozy seating,
            ensuring a pleasant experience for you and your family.
          </p>
          <div className={styles.amenityIcons}>
            <Gamepad2 size={36} color="#d32f2f" />
            <Tv size={36} color="#d32f2f" />
            <Sofa size={36} color="#d32f2f" />
          </div>
        </div>
        <Image
          src="/evanbarbers/Evan_interior.webp"
          alt="The interior waiting area of Evan Barbers"
          width={800}
          height={600}
          className={styles.sectionImage}
        />
      </section>

      {/* Reviews */}
      <section className={styles.reviewsSection}>
        <h2>What Our Customers Say</h2>
        <div className={styles.reviewGrid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <p className={styles.reviewText}>"{review.text}"</p>
              <p className={styles.reviewName}>- {review.name}</p>
              <div className={styles.stars}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <h2>Leave a Review</h2>
        <p>
          We love hearing from our customers! Share your experience and help us
          grow.
        </p>
        <a
          href="https://reviewthis.biz/square-wind-9605"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Write a Review
        </a>
      </section>
    </div>
  );
}
