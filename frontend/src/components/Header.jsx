import './Header.css';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'transparent' : ''}`}>
      <h1 className="logo">
        <a href="#accueil">DoubleAuto</a>
      </h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#reservation">Réservation</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;