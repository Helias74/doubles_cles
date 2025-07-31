import './Header.css';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'transparent' : ''}`}>
      <h1 className="logo">
        <a href="#accueil">DoubleAuto</a>
      </h1>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
        &#9776; {/* Hamburger icon */}
      </button>

      <nav>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#accueil" className="accueil-link" onClick={() => setMenuOpen(false)}>Accueil</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#reservation" onClick={() => setMenuOpen(false)}>Réservation</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;