import Nav from './Nav';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Martin Rojo</h1>
        <Nav />
      </div>
    </header>
  );
}

export default Header;