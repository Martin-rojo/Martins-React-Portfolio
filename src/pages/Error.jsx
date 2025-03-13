import { Link } from 'react-router-dom';
import '../styles/Error.css';

function Error() {
  return (
    <section className="error-section">
      <h2 className="error-title">404 - Page Not Found</h2>
      <p className="error-message">The page you are looking for does not exist.</p>
      <Link to="/" className="home-link">Return to Home</Link>
    </section>
  );
}

export default Error;