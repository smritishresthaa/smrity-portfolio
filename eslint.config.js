/* ESLINT CONFIGURATION FILE - Code quality and style checking rules */
/* ESLint is a tool that analyzes your code and finds problems, errors, and style issues */
/* It helps maintain consistent code quality and catches bugs before they reach production */

// Import ESLint's core JavaScript rules
import js from '@eslint/js'
// Import global variable definitions for different environments (browser, node, etc.)
import globals from 'globals'
// Import React Hooks specific linting rules (ensures proper hook usage)
import reactHooks from 'eslint-plugin-react-hooks'
// Import React Fast Refresh rules (ensures components can hot-reload properly)
import reactRefresh from 'eslint-plugin-react-refresh'
// Import TypeScript ESLint integration (adds TypeScript-specific rules)
import tseslint from 'typescript-eslint'

/* EXPORT ESLINT CONFIGURATION */
/* This configuration tells ESLint how to check our portfolio website code */
export default tseslint.config(
  /* IGNORE PATTERNS - Files and folders ESLint should skip */
  { ignores: ['dist'] },  // Skip the 'dist' folder (contains built/compiled files)
  
  /* MAIN CONFIGURATION OBJECT */
  {
    /* EXTENDS - Base rule sets to build upon */
    extends: [
      js.configs.recommended,           // Basic JavaScript best practices
      ...tseslint.configs.recommended   // TypeScript-specific rules and type checking
    ],
    
    /* FILES - Which files this configuration applies to */
    files: ['**/*.{ts,tsx}'],  // Apply to all TypeScript (.ts) and React TypeScript (.tsx) files
    
    /* LANGUAGE OPTIONS - JavaScript/TypeScript language settings */
    languageOptions: {
      ecmaVersion: 2020,        // Use ES2020 JavaScript features (modern syntax)
      globals: globals.browser, // Define browser globals (window, document, etc.)
    },
    
    /* PLUGINS - Additional rule sets and functionality */
    plugins: {
      'react-hooks': reactHooks,     // Rules for proper React Hooks usage
      'react-refresh': reactRefresh, // Rules for React Fast Refresh compatibility
    },
    
    /* RULES - Specific linting rules and their severity levels */
    rules: {
      /* REACT HOOKS RULES - Ensures hooks are used correctly */
      ...reactHooks.configs.recommended.rules,  // Import all recommended React Hooks rules
      
      /* REACT REFRESH RULE - Ensures components can hot-reload */
      'react-refresh/only-export-components': [
        'warn',  // Show warning (not error) if rule is violated
        { allowConstantExport: true },  // Allow exporting constants alongside components
      ],
    },
  },
)
