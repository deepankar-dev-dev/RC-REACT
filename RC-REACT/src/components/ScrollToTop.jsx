import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi route (path) badlega, scroll screen ke sabse upar chala jayega
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Bina delay ke instant top par bhejega
    });
  }, [pathname]);

  return null;
}
