import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Martin-rojo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/mart%C3%ADn-rojo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/youruserid" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
          <i className="fab fa-stack-overflow"></i>
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;