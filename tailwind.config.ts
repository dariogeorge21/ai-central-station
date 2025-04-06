import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["var(--font-jetbrains)"],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#d1d5db', // text-gray-300
            a: {
              color: '#60a5fa', // text-blue-400
              '&:hover': {
                color: '#93c5fd', // text-blue-300
              },
            },
            strong: {
              color: '#f9fafb', // text-white
            },
            h1: {
              color: '#f9fafb', // text-white
            },
            h2: {
              color: '#f9fafb', // text-white
            },
            h3: {
              color: '#f9fafb', // text-white
            },
            h4: {
              color: '#f9fafb', // text-white
            },
            blockquote: {
              color: '#9ca3af', // text-gray-400
            },
            code: {
              color: '#60a5fa', // text-blue-400
              backgroundColor: 'rgba(15, 23, 42, 0.5)', // bg-gray-900/50
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
            pre: {
              backgroundColor: 'rgba(15, 23, 42, 0.7)', // bg-gray-900/70
            },
            hr: {
              borderColor: 'rgba(75, 85, 99, 0.5)', // border-gray-600/50
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};

export default config; 