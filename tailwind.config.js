/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		container: {
			center: true,
			screens: {
				"2xl": "1400px",
			},
			padding: {
				DEFAULT: "2rem",
				sm: "1.5rem",
				md: "2rem",
				lg: "3rem",
				xl: "4rem",
				"2xl": "5rem",
			},
		},
		extend: {
			fontFamily: {
				heading: ["Montserrat", "system-ui", "sans-serif"],
				body: ["Inter", "Open Sans", "system-ui", "sans-serif"],
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: "hsl(var(--card))",
				primary: "hsl(var(--primary))",
				"primary-foreground": "hsl(var(--primary-foreground))",
				accent: "hsl(var(--accent))",
				"accent-foreground": "hsl(var(--accent-foreground))",
				muted: "hsl(var(--muted))",
				"muted-foreground": "hsl(var(--muted-foreground))",
				border: "hsl(var(--border))",
			},
			borderRadius: {
				lg: "0.5rem",
			},
			boxShadow: {
				soft: "0 2px 8px rgba(0,0,0,0.08)",
				medium: "0 4px 16px rgba(0,0,0,0.12)",
				large: "0 8px 32px rgba(0,0,0,0.16)",
			},
			transitionTimingFunction: {
				soft: "cubic-bezier(0.4, 0, 0.2, 1)",
			},
			keyframes: {
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(30px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				"fade-in-up": "fade-in-up 0.6s ease-out both",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}

