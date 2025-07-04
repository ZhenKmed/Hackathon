import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Zap className="logo-icon" />
          <span className="logo-text">EcoWatt</span>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Accueil
          </Link>
          <Link 
            to="/quiz" 
            className={`nav-link ${location.pathname === '/quiz' ? 'active' : ''}`}
          >
            Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;