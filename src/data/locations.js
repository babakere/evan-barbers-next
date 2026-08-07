// Single source of truth for both branches: address, geo, hours, ratings and
// service/price lists. Everything on the site and in the JSON-LD structured
// data (src/app/layout.js) is derived from here — update this file, not the
// pages or the JSON-LD, so they can never drift apart.
//
// NOTE: Google review ratings below are maintained MANUALLY (not pulled from
// any API). Refresh them periodically from each shop's Google Business Profile.

// Structured postal addresses (schema.org PostalAddress fields, minus @type).
// The human-readable `address` string on each branch is derived from these.
const grandDriveAddress = {
  streetAddress: "358 Grand Drive",
  postalCode: "SW20 9NQ",
  addressLocality: "London",
  addressCountry: "GB",
};

const wimbledonAddress = {
  streetAddress: "95 The Broadway",
  postalCode: "SW19 1QG",
  addressLocality: "London",
  addressCountry: "GB",
};

const formatAddress = ({ streetAddress, postalCode, addressLocality }) =>
  `${streetAddress}, ${postalCode}, ${addressLocality}`;

export const locations = {
  grandDrive: {
    name: "Grand Drive",
    rating: { value: 4.9, count: 327 },
    postalAddress: grandDriveAddress,
    address: formatAddress(grandDriveAddress),
    geo: { latitude: 51.392, longitude: -0.225 },
    phone: "+44 7928 186951",
    mapLink:
      "https://maps.google.com/?q=Evan+Barbers,+358+Grand+Drive,+SW20+9NQ,+London",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6044565022166!2d-0.2252890230223906!3d51.39194737178735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608f9d74afb23%3A0xc5dc96046b1bed73!2sEvan%20Barbers!5e0!3m2!1sen!2suk!4v1733606843716!5m2!1sen!2suk",
    hours: {
      regular: { open: 9, close: 19 },
      sunday: { open: 10, close: 17 },
      closedDays: [1], // Monday
      display: {
        weekday: "Tue-Sat: 9 AM - 7 PM",
        sunday: "Sun: 10 AM - 5 PM",
        closed: "Mon: Closed",
      },
    },
    services: [
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
    ],
  },
  wimbledon: {
    name: "Wimbledon",
    rating: { value: 4.6, count: 188 },
    postalAddress: wimbledonAddress,
    address: formatAddress(wimbledonAddress),
    geo: { latitude: 51.4194, longitude: -0.2041 },
    phone: "+44 7928 186951",
    mapLink:
      "https://maps.google.com/?q=Evan+Barbers,+95+The+Broadway,+SW19+1QG,+London",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1129657419215!2d-0.20414962338520065!3d51.419351471793426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608ba8e7e4c4f%3A0x178ec97031c70f9b!2sEvan%20Barbers!5e0!3m2!1sen!2suk!4v1733790264851!5m2!1sen!2suk",
    hours: {
      regular: { open: 9, close: 19 },
      sunday: { open: 10, close: 17 },
      closedDays: [],
      display: {
        weekday: "Mon-Sat: 9 AM - 7 PM",
        sunday: "Sun: 10 AM - 5 PM",
        closed: null,
      },
    },
    services: [
      {
        name: "Haircut",
        price: "£18",
        description: "A classic haircut tailored to your style.",
      },
      {
        name: "Skin Fade",
        price: "£20",
        description: "Sharp and modern skin fade style.",
      },
      {
        name: "Beard Trim Only",
        price: "£8",
        description: "Quick and precise beard trim.",
      },
      {
        name: "Beard Trim & Shape Up",
        price: "£10",
        description: "Detailed beard trim with shaping.",
      },
      {
        name: "Hair Cut & Beard Trim",
        price: "£27",
        description: "Detailed Haircut & beard trim with shaping.",
      },
      {
        name: "Skin Fade & Beard Trim",
        price: "£29",
        description: "Skin fade haircut with a detailed beard trim.",
      },
      {
        name: "O.A.P (Mon–Thu)",
        price: "£14",
        description: "Special haircut for seniors.",
      },
      {
        name: "Kids (Under 12, Mon–Thu)",
        price: "£15",
        description: "A tailored haircut for children under 12.",
      },
      {
        name: "Crew Cut (No 1–4, Mon–Thu)",
        price: "£15",
        description: "Classic crew cut with length options.",
      },
      {
        name: "Nose Wax",
        price: "£4",
        description: "Painless nose hair wax.",
      },
    ],
  },
};

// Combined rating across both branches, shown on the homepage.
// Maintained manually — see the note above; refresh from Google alongside the
// per-branch figures (currently the weighted blend of Grand Drive + Wimbledon).
export const combinedRating = { value: 4.8, count: 515 };

export const specialClosures = [
  new Date(new Date().getFullYear(), 11, 25).toDateString(),
  new Date(new Date().getFullYear(), 11, 26).toDateString(),
  new Date(new Date().getFullYear() + 1, 0, 1).toDateString(),
  new Date(new Date().getFullYear() + 1, 0, 2).toDateString(),
];
