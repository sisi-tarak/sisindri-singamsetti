/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": { max: "424px" },
      xs: { min: "425px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      colors: {
        backgroundColor: "#121212",
        headColor: "#ffffff",
        textColor: "#c4c4c4",
        buttonBgColor: "#9c27b0",
        buttonBorder: "rgba(156, 39, 176, 0.5)",
        buttonTextColor: "#9c27b0",
        navlinkColor: "#ffffff",
        navlinkBg: "rgba(0,0,0,0.05)",
        navlinkActiveColor: "#5A56E8",
        iconColor: "#c4c2ff",
        iconBgColor: "#5956e8",
        footerBgColor: "#292930",
      },
    },
  },
  plugins: [],
};
