/* VITE CONFIGURATION FILE - Build tool settings for the portfolio website */
/* Vite is a fast build tool that bundles our code for production and serves it during development */

// Import Vite's configuration function
import { defineConfig } from 'vite'
// Import React plugin for JSX support and React-specific optimizations
import react from '@vitejs/plugin-react'
// Import plugin to resolve TypeScript path aliases (like @/components)
import tsconfigPaths from "vite-tsconfig-paths";

// Official Vite documentation: https://vite.dev/config/

/* EXPORT VITE CONFIGURATION */
/* This configuration tells Vite how to build and serve our portfolio website */
export default defineConfig({
  /* BUILD SETTINGS - How to create the production version */
  build: {
    sourcemap: 'hidden',  // Generate source maps for debugging but don't expose them publicly
                          // Source maps help developers debug minified code by mapping it back to original code
  },
  
  /* PLUGINS - Extensions that add functionality to Vite */
  plugins: [
    /* REACT PLUGIN - Enables React development features */
    react({
      /* BABEL CONFIGURATION - JavaScript/TypeScript transformation settings */
      babel: {
        plugins: [
          'react-dev-locator',  // Helps locate React components in development tools
                               // Makes it easier to find which file contains a specific component
        ],
      },
    }),
 
    /* TYPESCRIPT PATHS PLUGIN - Resolves import aliases */
    /* Allows us to use @/components instead of ../../../components */
    /* Makes imports cleaner and easier to maintain */
    tsconfigPaths()
  ],
})
