// Accessibility utilities for better user experience

// Focus management utilities
export const focusManagement = {
  // Trap focus within a container
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);
    return () => container.removeEventListener('keydown', handleTabKey);
  },

  // Focus first focusable element
  focusFirst: (container: HTMLElement) => {
    const focusableElement = container.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    if (focusableElement) {
      focusableElement.focus();
    }
  },

  // Save and restore focus
  saveFocus: () => {
    const activeElement = document.activeElement as HTMLElement;
    return () => {
      if (activeElement && activeElement.focus) {
        activeElement.focus();
      }
    };
  }
};

// Screen reader utilities
export const screenReader = {
  // Announce message to screen readers
  announce: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1000);
  },

  // Create visually hidden text for screen readers
  createSROnlyText: (text: string) => {
    const span = document.createElement('span');
    span.className = 'sr-only';
    span.textContent = text;
    return span;
  }
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation
  handleArrowKeys: (
    elements: NodeListOf<HTMLElement> | HTMLElement[],
    currentIndex: number,
    orientation: 'horizontal' | 'vertical' = 'horizontal'
  ) => {
    return (e: KeyboardEvent) => {
      let newIndex = currentIndex;
      const isHorizontal = orientation === 'horizontal';
      
      switch (e.key) {
        case isHorizontal ? 'ArrowRight' : 'ArrowDown':
          newIndex = (currentIndex + 1) % elements.length;
          break;
        case isHorizontal ? 'ArrowLeft' : 'ArrowUp':
          newIndex = currentIndex === 0 ? elements.length - 1 : currentIndex - 1;
          break;
        case 'Home':
          newIndex = 0;
          break;
        case 'End':
          newIndex = elements.length - 1;
          break;
        default:
          return;
      }
      
      e.preventDefault();
      elements[newIndex].focus();
    };
  },

  // Handle escape key
  handleEscape: (callback: () => void) => {
    return (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };
  }
};

// Color contrast utilities
export const colorContrast = {
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  },

  // Calculate contrast ratio
  getContrastRatio: (color1: [number, number, number], color2: [number, number, number]) => {
    const lum1 = colorContrast.getLuminance(...color1);
    const lum2 = colorContrast.getLuminance(...color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  },

  // Check if contrast meets WCAG standards
  meetsWCAG: (ratio: number, level: 'AA' | 'AAA' = 'AA') => {
    return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
  }
};

// Motion preferences
export const motionPreferences = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },

  // Respect motion preferences in animations
  respectMotionPreference: (normalDuration: number, reducedDuration: number = 0) => {
    return motionPreferences.prefersReducedMotion() ? reducedDuration : normalDuration;
  }
};

// ARIA utilities
export const aria = {
  // Generate unique IDs for ARIA relationships
  generateId: (prefix: string = 'aria') => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  },

  // Set ARIA expanded state
  setExpanded: (element: HTMLElement, expanded: boolean) => {
    element.setAttribute('aria-expanded', expanded.toString());
  },

  // Set ARIA selected state
  setSelected: (element: HTMLElement, selected: boolean) => {
    element.setAttribute('aria-selected', selected.toString());
  },

  // Set ARIA pressed state
  setPressed: (element: HTMLElement, pressed: boolean) => {
    element.setAttribute('aria-pressed', pressed.toString());
  },

  // Set ARIA hidden state
  setHidden: (element: HTMLElement, hidden: boolean) => {
    element.setAttribute('aria-hidden', hidden.toString());
  }
};

// Form accessibility utilities
export const formAccessibility = {
  // Associate label with form control
  associateLabel: (labelElement: HTMLLabelElement, controlId: string) => {
    labelElement.setAttribute('for', controlId);
  },

  // Add error message to form control
  addErrorMessage: (controlElement: HTMLElement, errorId: string, errorMessage: string) => {
    controlElement.setAttribute('aria-describedby', errorId);
    controlElement.setAttribute('aria-invalid', 'true');
    
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.setAttribute('role', 'alert');
    }
  },

  // Remove error state
  removeErrorState: (controlElement: HTMLElement, errorId: string) => {
    controlElement.removeAttribute('aria-describedby');
    controlElement.setAttribute('aria-invalid', 'false');
    
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.removeAttribute('role');
    }
  }
};

// Skip link utility
export const skipLink = {
  // Create skip to main content link
  createSkipLink: (targetId: string, text: string = 'Skip to main content') => {
    const skipLink = document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = text;
    skipLink.className = 'skip-link';
    
    // Add styles for skip link
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    
    if (!document.querySelector('style[data-skip-link]')) {
      style.setAttribute('data-skip-link', 'true');
      document.head.appendChild(style);
    }
    
    return skipLink;
  }
};

// High contrast mode detection
export const highContrast = {
  // Detect if high contrast mode is enabled
  isEnabled: () => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  },

  // Apply high contrast styles
  applyHighContrastStyles: () => {
    if (highContrast.isEnabled()) {
      document.body.classList.add('high-contrast');
    }
  }
};

// Export all utilities
export default {
  focusManagement,
  screenReader,
  keyboardNavigation,
  colorContrast,
  motionPreferences,
  aria,
  formAccessibility,
  skipLink,
  highContrast
};