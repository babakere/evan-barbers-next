export const locations = {
  grandDrive: {
    name: "Grand Drive",
    address: "358 Grand Drive, SW20 9NQ, London",
    phone: "+44 7928 186951",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6044565022166!2d-0.2252890230223906!3d51.39194737178735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487608f9d74afb23%3A0xc5dc96046b1bed73!2sEvan%20Barbers!5e0!3m2!1sen!2suk!4v1733606843716!5m2!1sen!2suk",
    hours: {
      regular: { open: 9, close: 18 },
      sunday: { open: 10, close: 17 },
      closedDays: [1], // Monday
      display: {
        weekday: "Tue-Sat: 9 AM - 6 PM",
        sunday: "Sun: 10 AM - 5 PM",
        closed: "Mon: Closed",
      },
    },
  },
  wimbledon: {
    name: "Wimbledon",
    address: "95 The Broadway, SW19 1QG, London",
    phone: "+44 7928 186951",
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
  },
};

export const specialClosures = [
  new Date(new Date().getFullYear(), 11, 25).toDateString(),
  new Date(new Date().getFullYear(), 11, 26).toDateString(),
  new Date(new Date().getFullYear() + 1, 0, 1).toDateString(),
  new Date(new Date().getFullYear() + 1, 0, 2).toDateString(),
];
