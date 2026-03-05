import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found | Evan Barbers",
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.message}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className={styles.btn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
