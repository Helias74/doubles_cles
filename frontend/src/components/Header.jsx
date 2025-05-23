import './Header.css'

function Header() {
  return (
    <header className="header">
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
  )
}

export default Header;