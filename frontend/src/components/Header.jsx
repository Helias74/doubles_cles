import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">DoubleAuto</Link>
      </h1>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/reservation">Réservation</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header