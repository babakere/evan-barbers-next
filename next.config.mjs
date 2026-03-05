/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent browsers from guessing MIME types (blocks content-sniffing attacks)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Prevent the site being embedded in iframes on other domains (clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Force HTTPS for 2 years (once on a real HTTPS host)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Control referrer info sent to external sites
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Disable browser features this site never uses
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Block Flash/PDF cross-domain policy files
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
  // Content Security Policy — restricts what can load on the page
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for its own hydration scripts + our JSON-LD
      "script-src 'self' 'unsafe-inline'",
      // CSS modules and styled-jsx use inline styles
      "style-src 'self' 'unsafe-inline'",
      // Images: self-hosted + data URIs for Next.js image optimisation
      "img-src 'self' data: blob:",
      // Fonts are self-hosted via next/font
      "font-src 'self'",
      // Google Maps iframes
      "frame-src https://www.google.com https://maps.google.com",
      // No plugins (Flash etc.)
      "object-src 'none'",
      // No media files needed
      "media-src 'none'",
      // Restrict form submissions to same origin
      "form-action 'self'",
      // Prevent base tag hijacking
      "base-uri 'self'",
      // Upgrade insecure requests where possible
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
