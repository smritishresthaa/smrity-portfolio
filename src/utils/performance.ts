// ============================================
// PERFORMANCE OPTIMIZATION UTILITIES
// ============================================
// This file contains helper functions to make the website faster and more efficient
// These utilities help with loading components, images, and managing user interactions

// Import React utilities for component management
import React, { lazy, ComponentType } from 'react';

// LAZY LOADING UTILITY
// This function helps load components only when they're needed (not all at once)
// Think of it like opening a book - you only read one page at a time, not the whole book
export function lazyLoad<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>, // Function that loads the component
  fallback?: ComponentType // Backup component to show if loading fails
) {
  // Create a "lazy" version of the component that loads on-demand
  const LazyComponent = lazy(async () => {
    try {
      // Try to load the component
      return await importFunc();
    } catch (error) {
      // If loading fails, log the error for debugging
      console.error('Failed to load component:', error);
      // Show a fallback component if one was provided
      if (fallback) {
        return { default: fallback };
      }
      // If no fallback, let the error bubble up
      throw error;
    }
  });

  return LazyComponent; // Return the lazy-loaded component
}

// IMAGE LAZY LOADING UTILITY
// This creates a smart image loader that remembers which images it has already loaded
// Like having a photo album - once you've seen a photo, you don't need to look for it again
export function createImageLoader() {
  // Create a "cache" (memory storage) to remember loaded images
  const imageCache = new Map<string, Promise<string>>();

  // Return a function that can load images efficiently
  return function loadImage(src: string): Promise<string> {
    // Check if we've already loaded this image before
    if (imageCache.has(src)) {
      return imageCache.get(src)!; // Return the cached version (faster!)
    }

    // Create a promise to handle the image loading process
    const promise = new Promise<string>((resolve, reject) => {
      const img = new Image(); // Create a new image element
      img.onload = () => resolve(src); // When image loads successfully, resolve with the source
      img.onerror = () => reject(new Error(`Failed to load image: ${src}`)); // Handle loading errors
      img.src = src; // Start loading the image by setting its source
    });

    // Store this loading promise in our cache for future use
    imageCache.set(src, promise);
    return promise; // Return the promise so caller can wait for loading
  };
}

// DEBOUNCE UTILITY
// This prevents a function from running too often - like a "cooldown" period
// Example: When user types in search box, wait until they stop typing before searching
// This saves resources and prevents overwhelming the system with requests
export function debounce<T extends (...args: any[]) => any>(
  func: T, // The function to control
  wait: number // How long to wait (in milliseconds) before allowing the function to run
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout; // Timer to track the waiting period
  
  // Return a new function that controls when the original function runs
  return function executedFunction(...args: Parameters<T>) {
    // Define what happens after the wait period
    const later = () => {
      clearTimeout(timeout); // Clear the timer
      func(...args); // Finally run the original function
    };
    
    // Cancel any previous timer (reset the cooldown)
    clearTimeout(timeout);
    // Start a new timer - function will run after 'wait' milliseconds
    timeout = setTimeout(later, wait);
  };
}

// THROTTLE UTILITY
// This limits how often a function can run - like speed limits for functions
// Example: On scroll events, only run the function once every 100ms instead of 60 times per second
// This prevents the browser from getting overwhelmed with too many function calls
export function throttle<T extends (...args: any[]) => any>(
  func: T, // The function to limit
  limit: number // Minimum time (in milliseconds) between function calls
): (...args: Parameters<T>) => void {
  let inThrottle: boolean; // Flag to track if we're in the "cooldown" period
  
  // Return a new function that enforces the speed limit
  return function executedFunction(...args: Parameters<T>) {
    // Only run the function if we're not in the cooldown period
    if (!inThrottle) {
      func(...args); // Run the original function
      inThrottle = true; // Start the cooldown period
      // After the limit time, allow the function to run again
      setTimeout(() => (inThrottle = false), limit);
    }
    // If we're in cooldown, ignore this call (that's the throttling!)
  };
}

// INTERSECTION OBSERVER UTILITY
// This watches when elements come into view on the screen (like a security camera)
// Perfect for lazy loading images or triggering animations when user scrolls to content
// Only loads/shows things when the user can actually see them
export function createIntersectionObserver(
  callback: (entries: IntersectionObserverEntry[]) => void, // Function to run when elements enter/leave view
  options?: IntersectionObserverInit // Optional settings to customize the observer
) {
  // Default settings for the observer
  const defaultOptions: IntersectionObserverInit = {
    root: null, // Use the browser window as the viewing area
    rootMargin: '50px', // Start loading 50px before element is visible (preload)
    threshold: 0.1, // Trigger when 10% of the element is visible
    ...options // Allow custom options to override defaults
  };

  // Create and return the observer with our settings
  return new IntersectionObserver(callback, defaultOptions);
}

// PERFORMANCE MONITORING UTILITIES
// These tools help measure how fast different parts of the website are running
// Like a stopwatch for code - helps identify what's slow and needs improvement
export const performance = {
  // MARK PERFORMANCE TIMING
  // Place a "timestamp" marker at a specific point in code execution
  // Like putting a flag at the start line of a race
  mark: (name: string) => {
    // Check if the browser supports performance marking
    if ('performance' in window && 'mark' in window.performance) {
      window.performance.mark(name); // Create a named timestamp
    }
  },

  // MEASURE PERFORMANCE BETWEEN MARKS
  // Calculate how much time passed between two markers
  // Like timing how long it took to run from start flag to finish flag
  measure: (name: string, startMark: string, endMark?: string) => {
    // Check if the browser supports performance measuring
    if ('performance' in window && 'measure' in window.performance) {
      window.performance.measure(name, startMark, endMark); // Calculate duration
    }
  },

  // GET PERFORMANCE ENTRIES
  // Retrieve all the timing data that has been collected
  // Like getting a report of all race times
  getEntries: (type?: string) => {
    // Check if the browser supports getting performance data
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      return type 
        ? window.performance.getEntriesByType(type) // Get specific type of data
        : window.performance.getEntries(); // Get all performance data
    }
    return []; // Return empty array if not supported
  },

  // CLEAR PERFORMANCE MARKS AND MEASURES
  // Reset all the timing data (clean slate)
  // Like clearing the scoreboard for a new game
  clear: () => {
    if ('performance' in window) {
      // Clear all timing markers
      if ('clearMarks' in window.performance) {
        window.performance.clearMarks();
      }
      // Clear all duration measurements
      if ('clearMeasures' in window.performance) {
        window.performance.clearMeasures();
      }
    }
  }
};

// MEMORY USAGE MONITORING (FOR DEVELOPMENT)
// This function checks how much computer memory the website is using
// Like checking how much space your photos take up on your phone
// Helps developers identify memory leaks and optimize resource usage
export function getMemoryUsage() {
  // Check if the browser provides memory information (Chrome/Edge do, Firefox doesn't)
  if ('memory' in performance) {
    const memory = (performance as any).memory; // Get memory information
    return {
      usedJSHeapSize: memory.usedJSHeapSize, // How much memory is currently being used
      totalJSHeapSize: memory.totalJSHeapSize, // Total memory allocated to JavaScript
      jsHeapSizeLimit: memory.jsHeapSizeLimit, // Maximum memory JavaScript can use
      usedPercentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100) // Percentage of memory used
    };
  }
  return null; // Return null if memory info is not available
}

// Bundle size analyzer (for development)
export function logBundleInfo() {
  if (process.env.NODE_ENV === 'development') {
    console.group('📦 Bundle Information');
    console.log('Environment:', process.env.NODE_ENV);
    console.log('React Version:', React.version);
    
    const memoryInfo = getMemoryUsage();
    if (memoryInfo) {
      console.log('Memory Usage:', `${memoryInfo.usedPercentage}%`);
      console.log('JS Heap Size:', `${(memoryInfo.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`);
    }
    
    console.groupEnd();
  }
}

// BUNDLE SIZE ANALYSIS (FOR DEVELOPMENT)
// This function examines all the JavaScript and CSS files loaded by the website
// Like taking inventory of all the ingredients in a recipe
// Helps developers understand what files are being loaded and optimize loading strategy
export function analyzeBundleSize() {
  // Find all JavaScript files loaded on the page
  const scripts = Array.from(document.querySelectorAll('script[src]'));
  // Find all CSS stylesheets loaded on the page
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  // Create a detailed report of all loaded resources
  const analysis = {
    // Information about each JavaScript file
    scripts: scripts.map(script => ({
      src: (script as HTMLScriptElement).src, // File location/URL
      async: (script as HTMLScriptElement).async, // Whether it loads asynchronously (non-blocking)
      defer: (script as HTMLScriptElement).defer // Whether it waits for HTML to finish loading
    })),
    // Information about each CSS file
    stylesheets: stylesheets.map(link => ({
      href: (link as HTMLLinkElement).href, // File location/URL
      media: (link as HTMLLinkElement).media // Media query (e.g., 'screen', 'print')
    })),
    totalScripts: scripts.length, // Count of JavaScript files
    totalStylesheets: stylesheets.length // Count of CSS files
  };
  
  return analysis; // Return the complete analysis report
}

// RESOURCE PRELOADING UTILITIES
// This function tells the browser to start downloading important files early
// Like preparing ingredients before you start cooking - everything's ready when you need it
// Improves website speed by loading critical resources in advance
export function preloadResource(href: string, as: string, crossorigin?: string) {
  // Create a new link element for preloading
  const link = document.createElement('link');
  link.rel = 'preload'; // Tell browser this is for preloading
  link.href = href; // The file URL to preload
  link.as = as; // What type of resource it is (font, image, script, etc.)
  
  // Handle cross-origin resources (files from other domains)
  if (crossorigin) {
    link.crossOrigin = crossorigin; // Set CORS policy
  }
  
  // Add the preload instruction to the page header
  document.head.appendChild(link);
}

// RESOURCE PREFETCHING UTILITY
// This function tells the browser to download files that might be needed later
// Like having snacks ready in case guests get hungry - not urgent, but nice to have
// Downloads resources during idle time for future pages or interactions
export function prefetchResource(href: string) {
  // Create a new link element for prefetching
  const link = document.createElement('link');
  link.rel = 'prefetch'; // Tell browser this is for future use
  link.href = href; // The file URL to prefetch
  
  // Add the prefetch instruction to the page header
  document.head.appendChild(link);
}

// DNS PREFETCH FOR EXTERNAL DOMAINS
// This function tells the browser to look up the address of external websites early
// Like looking up someone's address before you need to visit them
// Speeds up connections to external services (Google Fonts, APIs, etc.)
export function prefetchDNS(hostname: string) {
  // Create a new link element for DNS prefetching
  const link = document.createElement('link');
  link.rel = 'dns-prefetch'; // Tell browser to resolve DNS early
  link.href = `//${hostname}`; // The domain to look up (e.g., 'fonts.googleapis.com')
  
  // Add the DNS prefetch instruction to the page header
  document.head.appendChild(link);
}