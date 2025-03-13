import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;