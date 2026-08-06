import { Star } from "lucide-react";
import styles from "./RatingBadge.module.css";

/**
 * Visible Google rating badge (gold stars + score + review count).
 * Figures come from src/data/locations.js, which is maintained manually —
 * refresh periodically from the shops' Google Business Profiles.
 */
export default function RatingBadge({ value, count, label }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;

  return (
    <div className={styles.badge}>
      <div className={styles.stars} aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFull = i < full;
          const isHalf = !isFull && i === full && hasHalf;
          return (
            <Star
              key={i}
              size={18}
              fill={isFull || isHalf ? "#FFB300" : "none"}
              color="#FFB300"
              strokeWidth={1.5}
            />
          );
        })}
      </div>
      <span className={styles.text}>
        <strong>{value.toFixed(1)}</strong>
        {" · "}
        {count} Google reviews
        {label ? ` (${label})` : ""}
      </span>
    </div>
  );
}
