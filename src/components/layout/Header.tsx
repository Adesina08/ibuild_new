import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { EXTERNAL_LINKS } from '../../assets';
import logoDark from '@/assets/ibuild-logo-dark.png';
import logoLight from '@/assets/ibuild-logo-light.png';

interface HeaderProps {
  onDemoClick: () => void;
}

export const Header = ({ onDemoClick }: HeaderProps) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleSolutionClick = (sectionId: string) => {
    if (location.pathname === '/solutions') {
      // Already on solutions page, scroll to section
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to solutions page with hash
      window.location.href = `/solutions#${sectionId}`;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={IMAGES.logo} alt="iBUILD" height="40" className="me-2" />
          <span className="fw-bold">iBUILD</span>
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link text-light border-0 p-2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu">
                <li><h6 className="dropdown-header">Solutions</h6></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('residential')}>Residential</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('multi-family')}>Multi-Family</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('land-development')}>Land Development</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">Communication Features</h6></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('todo')}>Todo</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('itinerary')}>Itinerary</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('discussion-feed')}>Discussion</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><h6 className="dropdown-header">Modules</h6></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('accounting')}>Accounting Integration</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('construction-scheduling')}>Construction</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('design')}>Design</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('estimating-qrs')}>Estimation/Purchasing</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('file-manager')}>File Manager</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('price-book')}>Pricebook</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('proforma-forecasting')}>Project Pro-Forma</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('sales')}>Sales</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('system-reports')}>System Reports</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('system-views')}>System Views</button></li>
                <li><button className="dropdown-item" onClick={() => handleSolutionClick('warranty')}>Warranty</button></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/plans') ? 'active' : ''}`} to="/plans">Plans & Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/support') ? 'active' : ''}`} to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <ThemeToggle />
            <button 
              className="btn btn-primary me-2" 
              onClick={onDemoClick}
            >
              Book a demo now
            </button>
            <a 
              href={EXTERNAL_LINKS.login}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};