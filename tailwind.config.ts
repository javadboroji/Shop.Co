import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  darkMode: ["class", 'class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		xs: '530px',
  		sm: '576px',
  		md: '768px',
  		lg: '992px',
  		xl: '1200px',
  		xxl: '1400px'
  	},
  	extend: {
  		display: [
  			'group-hover'
  		],
  		colors: {
  			'ec-black': '#000000',
  			'ec-gray': '#F0F0F0',
  			'ec-yellow': '#FFC633',
  			'ec-green': '#01AB31',
  			'ec-gray-text': 'rgba(0, 0, 0, 0.6)',
  			'ec-gray-bg-product': 'F0EEED',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
