/* POSTCSS CONFIGURATION FILE - CSS processing pipeline setup */
/* PostCSS is a tool that transforms CSS with JavaScript plugins */
/* It processes our CSS files and applies various transformations before the browser sees them */

/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */
/** WARNING: DON'T EDIT THIS FILE */

export default {
  /* PLUGINS - CSS processing tools that run in sequence */
  /* Each plugin transforms the CSS in a specific way */
  plugins: {
    /* TAILWIND CSS - Processes Tailwind utility classes */
    /* Converts classes like 'bg-blue-500' into actual CSS rules */
    /* This plugin injects all the Tailwind styles into our CSS */
    tailwindcss: {},
    
    /* AUTOPREFIXER - Automatically adds vendor prefixes to CSS */
    /* Adds prefixes like -webkit-, -moz-, -ms- for browser compatibility */
    /* Example: 'transform' becomes '-webkit-transform: ...; transform: ...' */
    autoprefixer: {},
  },
};
