/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Dark Blue
        accent: "#10B981", // Green
        alert: "#EF4444", // Red
        backgroundLight: "#F9FAFB", // Light Gray
        backgroundDark: "#1F2937", // Dark Gray
        textLight: "#111827", // Dark Gray for Text
        textDark: "#D1D5DB", // Light Gray for Dark Mode Text
        highlight: "#F59E0B", // Yellow for Highlights
        secondary: "#6B7280", // G
      },
    },
  },
  plugins: [],
};
