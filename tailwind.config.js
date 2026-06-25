/* TAILWIND CSS CONFIGURATION FILE */
/* This file customizes Tailwind CSS for our portfolio website */
/* Tailwind is a utility-first CSS framework that provides pre-built classes */
/* Instead of writing custom CSS, we use classes like 'text-center' and 'bg-blue-500' */

/** @type {import('tailwindcss').Config} */
/* TypeScript type annotation to provide autocomplete and error checking */

export default {
  /* DARK MODE CONFIGURATION */
  /* 'class' means dark mode is toggled by adding 'dark' class to HTML element */
  /* Alternative would be 'media' which uses system preference automatically */
  darkMode: "class",
  
  /* CONTENT PATHS - Where Tailwind should look for classes being used */
  /* Tailwind scans these files to see which CSS classes are actually needed */
  /* This helps keep the final CSS file small by only including used styles */
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  /* THEME CONFIGURATION - Customize Tailwind's default design system */
  theme: {
    /* CONTAINER SETTINGS - How the main content container behaves */
    container: {
      center: true,        /* Automatically center containers horizontally */
      padding: "2rem",     /* Add 2rem (32px) padding inside containers */
      screens: {
        "2xl": "1400px",   /* Maximum width for extra large screens */
      },
    },
    
    /* EXTEND - Add custom values without overriding Tailwind's defaults */
    /* This keeps all of Tailwind's built-in classes while adding our own */
    extend: {
      /* CUSTOM COLOR PALETTE - Brand colors for the portfolio */
      /* Each color has shades from 50 (lightest) to 900 (darkest) */
      colors: {
        /* PRIMARY COLOR - Main brand color (Lavender theme) */
        /* Used for buttons, links, and primary UI elements */
        primary: {
          DEFAULT: "#A78BFA", /* Default shade - used when you write 'bg-primary' */
          50: "#F3F0FF",       /* Lightest shade - almost white with hint of lavender */
          100: "#E9E5FF",      /* Very light lavender */
          200: "#D6CFFF",      /* Light lavender */
          300: "#BFB3FF",      /* Medium-light lavender */
          400: "#A78BFA",      /* Medium lavender (same as DEFAULT) */
          500: "#8B5CF6",      /* Medium-dark lavender */
          600: "#7C3AED",      /* Dark lavender */
          700: "#6D28D9",      /* Darker lavender */
          800: "#5B21B6",      /* Very dark lavender */
          900: "#4C1D95",      /* Darkest shade - almost purple */
        },
        
        /* ACCENT COLOR - Secondary brand color for highlights and emphasis */
        /* Deep violet that complements the primary lavender */
        accent: {
          DEFAULT: "#7C3AED", /* Deep violet for accents and highlights */
          50: "#F5F3FF",       /* Very light violet */
          100: "#EDE9FE",      /* Light violet */
          200: "#DDD6FE",      /* Medium-light violet */
          300: "#C4B5FD",      /* Medium violet */
          400: "#A78BFA",      /* Medium-dark violet */
          500: "#8B5CF6",      /* Dark violet */
          600: "#7C3AED",      /* Darker violet (same as DEFAULT) */
          700: "#6D28D9",      /* Very dark violet */
          800: "#5B21B6",      /* Extremely dark violet */
          900: "#4C1D95",      /* Darkest violet */
        },
        
        /* SECONDARY COLOR - Complementary color for variety and visual interest */
        /* Blush pink that adds warmth to the cool lavender/violet palette */
        secondary: {
          DEFAULT: "#F9A8D4", /* Soft blush pink for secondary elements */
          50: "#FDF2F8",       /* Very light pink */
          100: "#FCE7F3",      /* Light pink */
          200: "#FBCFE8",      /* Medium-light pink */
          300: "#F9A8D4",      /* Medium pink (same as DEFAULT) */
          400: "#F472B6",      /* Medium-dark pink */
          500: "#EC4899",      /* Dark pink */
          600: "#DB2777",      /* Darker pink */
          700: "#BE185D",      /* Very dark pink */
          800: "#9D174D",      /* Extremely dark pink */
          900: "#831843",      /* Darkest pink */
        },
        
        /* MINT COLOR - Fresh accent color for success states and highlights */
        /* Green mint color that provides good contrast with the purple theme */
        mint: {
          DEFAULT: "#34D399", /* Fresh mint green for success and positive actions */
          50: "#ECFDF5",       /* Very light mint */
          100: "#D1FAE5",      /* Light mint */
          200: "#A7F3D0",      /* Medium-light mint */
          300: "#6EE7B7",      /* Medium mint */
          400: "#34D399",      /* Medium-dark mint (same as DEFAULT) */
          500: "#10B981",      /* Dark mint */
          600: "#059669",      /* Darker mint */
          700: "#047857",      /* Very dark mint */
          800: "#065F46",      /* Extremely dark mint */
          900: "#064E3B",      /* Darkest mint */
        },
        
        /* BACKGROUND COLORS - Main page background colors for light and dark modes */
        background: {
          light: "#FDFBFF",    /* Very light lavender-tinted white for light mode */
          dark: "#0F0A19",     /* Very dark purple for dark mode background */
        },
        
        /* NEUTRAL COLORS - Text colors that work well with our color scheme */
        neutral: {
          heading: "#1F1B24",     /* Dark color for headings and important text */
          body: "#6B7280",        /* Medium gray for body text in light mode */
          "body-dark": "#D1D5DB", /* Light gray for body text in dark mode */
        },
      },
      
      /* CUSTOM FONT FAMILY - Typography settings for the website */
      fontFamily: {
        /* Sans-serif font stack - clean, modern fonts for body text */
        /* Inter is a professional font, with system fonts as fallbacks */
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      
      /* CUSTOM ANIMATIONS - Predefined animations for smooth interactions */
      /* These can be used with classes like 'animate-fade-in' */
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",     /* Smooth fade in effect */
        "slide-up": "slideUp 0.5s ease-out",     /* Element slides up while fading in */
        "float": "float 3s ease-in-out infinite", /* Continuous floating motion */
      },
      
      /* KEYFRAMES - Define the actual animation steps */
      /* These describe how elements should move and change over time */
      keyframes: {
        /* FADE IN - Gradually appear from transparent to visible */
        fadeIn: {
          "0%": { opacity: "0" },   /* Start completely transparent */
          "100%": { opacity: "1" }, /* End completely visible */
        },
        
        /* SLIDE UP - Move up while fading in (great for page content) */
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" }, /* Start 20px down and transparent */
          "100%": { transform: "translateY(0)", opacity: "1" },   /* End in normal position and visible */
        },
        
        /* FLOAT - Gentle up and down movement (great for decorative elements) */
        float: {
          "0%, 100%": { transform: "translateY(0px)" },  /* Start and end at normal position */
          "50%": { transform: "translateY(-10px)" },     /* Move up 10px at the middle */
        },
      },
    },
  },
  
  /* PLUGINS - Additional Tailwind functionality */
  /* Currently empty, but this is where you'd add plugins like forms, typography, etc. */
  plugins: [],
};
