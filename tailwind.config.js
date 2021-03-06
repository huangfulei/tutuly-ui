// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class", // or "class", "auto"
	theme: {
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.75rem" }],
			lg: ["1.125rem", { lineHeight: "2rem" }],
			xl: ["1.25rem", { lineHeight: "2rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["2rem", { lineHeight: "2.5rem" }],
			"4xl": ["2.5rem", { lineHeight: "3.5rem" }],
			"5xl": ["3rem", { lineHeight: "3.5rem" }],
			"6xl": ["3.75rem", { lineHeight: "1" }],
			"7xl": ["4.5rem", { lineHeight: "1.1" }],
			"8xl": ["6rem", { lineHeight: "1" }],
			"9xl": ["8rem", { lineHeight: "1" }],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#000000",
			white: "#ffffff",
			gray: {
				100: "#EDF2F7",
				200: "#E2E8F0",
				300: "#CBD5E0",
				400: "#A0AEC0",
				500: "#718096",
				600: "#4A5568",
				700: "#2D3748",
				800: "#1A2138",
				900: "#12202A",
			},
			red: {
				100: "#FED7D7",
				200: "#FBA9A9",
				300: "#F0777F",
				400: "#EC5E5E",
				500: "#E12D2D",
				600: "#CF1124",
				700: "#AB091E",
				800: "#8A041A",
				900: "#610316",
			},
			orange: {
				100: "#FEEBC8",
				200: "#FBD38D",
				300: "#F6AD55",
				400: "#ED9C24",
				500: "#E67E00",
				600: "#CF6200",
				700: "#A75100",
				800: "#853200",
				900: "#5F1F00",
			},
			yellow: {
				100: "#FEFCBF",
				200: "#FDF089",
				300: "#FCE300",
				400: "#F8C900",
				500: "#F0A000",
				600: "#E08600",
				700: "#C26A00",
				800: "#934A00",
				900: "#6F2D00",
			},
			green: {
				100: "#C6F6D5",
				200: "#9AE6B4",
				300: "#76DCA0",
				400: "#52C476",
				500: "#00B14A",
				600: "#00A650",
				700: "#009750",
				800: "#008B43",
				900: "#007735",
			},
			blue: {
				100: "#BEE3F8",
				200: "#90CDF4",
				300: "#63B3ED",
				400: "#3A9FEA",
				500: "#0076E1",
				600: "#0062D1",
				700: "#004CB1",
				800: "#003691",
				900: "#002F7F",
			},
			indigo: {
				100: "#C4F1F9",
				200: "#9DECF9",
				300: "#76E4F7",
				400: "#5ED0F7",
				500: "#00B0F5",
				600: "#00A0E9",
				700: "#0090D9",
				800: "#0080C2",
				900: "#006E9E",
			},
			purple: {
				100: "#E9D8FD",
				200: "#D0B0FC",
				300: "#B97FFA",
				400: "#9A67F5",
				500: "#8654ED",
				600: "#723BE5",
				700: "#5D2ADC",
				800: "#4E1CCD",
				900: "#3D18C6",
			},
			pink: {
				100: "#FED7E2",
				200: "#FBB6CE",
				300: "#F78FB3",
				400: "#F16991",
				500: "#EC5778",
				600: "#D8446A",
				700: "#B82E5D",
				800: "#A01352",
				900: "#820046",
			},
		},
		extend: {
			borderRadius: {
				"4xl": "2rem",
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				display: ["Lexend", ...defaultTheme.fontFamily.sans],
			},
			maxWidth: {
				"2xl": "40rem",
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("@tailwindcss/forms")],
};
