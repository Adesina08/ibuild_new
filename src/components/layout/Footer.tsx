import { Link } from 'react-router-dom';
import { IMAGES } from '../../assets';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Product Column */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/solutions" className="text-light text-decoration-none">Solutions</Link></li>
              <li className="mb-2"><Link to="/plans" className="text-light text-decoration-none">Pricing</Link></li>
              <li className="mb-2"><a href="#features" className="text-light text-decoration-none">Features</a></li>
              <li className="mb-2"><a href="#integrations" className="text-light text-decoration-none">Integrations</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/support" className="text-light text-decoration-none">Customer Support</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li className="mb-2"><a href="#documentation" className="text-light text-decoration-none">Documentation</a></li>
              <li className="mb-2"><a href="#training" className="text-light text-decoration-none">Training</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">News</Link></li>
              <li className="mb-2"><Link to="/about" className="text-light text-decoration-none">Career</Link></li>
              <li className="mb-2"><a href="#partners" className="text-light text-decoration-none">Partners</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons and Bottom Bar */}
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center mb-3 mb-md-0">
              <img src={IMAGES.logo} alt="iBUILD" height="30" className="me-3" />
              <div className="d-flex gap-3">
                <a href="#" className="text-light">
                  <img src={IMAGES.facebook} alt="Facebook" width="24" height="24" />
                </a>
                <a href="#" className="text-light">
                  <img src={IMAGES.linkedin} alt="LinkedIn" width="24" height="24" />
                </a>
                <a href="#" className="text-light">
                  <img src={IMAGES.youtube} alt="YouTube" width="24" height="24" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small">
              © 2024 iBUILD Applications. All rights reserved.
              <span className="mx-2">|</span>
              <a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a>
              <span className="mx-2">|</span>
              <a href="#terms" className="text-light text-decoration-none">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};