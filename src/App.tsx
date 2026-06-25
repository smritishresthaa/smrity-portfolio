// ============================================
// MAIN APP COMPONENT
// ============================================
// This is the root component of our React application
// Think of it as the foundation that holds everything together

// Import React - the library that makes this all work
import React from 'react';

// Import routing components - these help us navigate between different pages
// "as Router" means we're giving BrowserRouter a shorter name to use
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import HelmetProvider - helps manage the page title and meta tags (SEO)
import { HelmetProvider } from 'react-helmet-async';

// Import our custom theme provider - handles light/dark mode switching
import { ThemeProvider } from './hooks/useTheme';

// Import layout and utility components
import Layout from './components/Layout';           // The main page structure (header, footer, etc.)
import ScrollToTop from './components/ScrollToTop'; // Automatically scrolls to top when changing pages
import ErrorBoundary from './components/ErrorBoundary'; // Catches errors and shows friendly messages

// Import all the different pages of our website
import Home from './pages/Home';         // Homepage
import About from './pages/About';       // About page
import Work from './pages/Work';         // Portfolio/work showcase page
import Resume from './pages/Resume';     // Resume/CV page
import Contact from './pages/Contact';   // Contact form page
import NotFound from './pages/NotFound'; // 404 error page for invalid URLs

// Import the main CSS styles for the entire app
import './App.css';

/**
 * App Component - The Main Application
 * 
 * This is a React "functional component" - think of it like a function that returns HTML
 * It sets up the entire structure of our portfolio website
 * 
 * The components are nested like Russian dolls - each one wraps the next:
 * ErrorBoundary > HelmetProvider > ThemeProvider > Router > Layout > Routes
 */
function App() {
  // The "return" statement defines what this component displays
  // JSX (the HTML-like syntax) lets us write HTML inside JavaScript
  return (
    // ErrorBoundary: Catches any errors in the app and shows a friendly message instead of crashing
    <ErrorBoundary>
      {/* HelmetProvider: Manages the page title, description, and other head elements for SEO */}
      <HelmetProvider>
        {/* ThemeProvider: Provides light/dark theme functionality to all child components */}
        <ThemeProvider>
          {/* Router: Enables navigation between different pages without page refreshes */}
          <Router>
            {/* ScrollToTop: Automatically scrolls to the top when navigating to a new page */}
            <ScrollToTop />
            
            {/* Layout: Contains the header, navigation, footer, and main content area */}
            <Layout>
              {/* Routes: Defines which component to show for each URL path */}
              <Routes>
                {/* Each Route maps a URL path to a specific page component */}
                <Route path="/" element={<Home />} />           {/* Homepage - shows when URL is just the domain */}
                <Route path="/about" element={<About />} />     {/* About page - shows at /about */}
                <Route path="/work" element={<Work />} />       {/* Work page - shows at /work */}
                <Route path="/resume" element={<Resume />} />   {/* Resume page - shows at /resume */}
                <Route path="/contact" element={<Contact />} /> {/* Contact page - shows at /contact */}
                <Route path="*" element={<NotFound />} />       {/* Catch-all route - shows 404 page for any other URL */}
              </Routes>
            </Layout>
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

// Export the App component so other files can import and use it
// This is how main.tsx can import and render our App
export default App
