import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    // Use instant scroll for better mobile compatibility
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    
    // Fallback for older browsers or mobile devices
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;