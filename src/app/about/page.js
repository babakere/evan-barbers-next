import Image from "next/image";
import { Star, Gamepad2, Tv, Sofa } from "lucide-react";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us | Evan Barbers - Our Story Since 2009",
  description:
    "Learn about Evan Barbers, providing premium men's grooming since 2009. Discover our story, mission, and what makes us different.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Evan Barbers | Our Story Since 2009",
    description:
      "Learn about Evan Barbers, providing premium men's grooming since 2009.",
    url: "https://evanbarbers.co.uk/about",
    images: [{ url: "/evanbarbers/logo.webp" }],
    type: "website",
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
      <h1 className={styles.pageTitle}>About Us</h1>

      {/* Our Story */}
      <section className={styles.section}>
        <div className={styles.textBlock}>
          <h2>Our Story</h2>
          <p>
            Since 2009, Evan Barbers has been providing top-notch grooming
            services, blending classic cuts with modern style. We pride
            ourselves on creating a welcoming atmosphere and delivering
            precision to every client.
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
          <h2>Our Mission</h2>
          <p>
            Our mission is to redefine the barbering experience by combining
            exceptional craftsmanship with outstanding customer service. At Evan
            Barbers, every client leaves feeling confident and satisfied.
          </p>
        </div>
        <Image
          src="/evanbarbers/amg.webp"
          alt="Barber tools and a modern setting representing Evan Barbers' mission"
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
