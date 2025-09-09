import { IMAGES } from '../assets';

interface LandingProps {
  onDemoClick: () => void;
}

export const Landing = ({ onDemoClick }: LandingProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Multi-Family, Single-Family and Land Development Platform
              </h1>
              <p className="lead mb-4">
                iBUILD, a Multi-Family Residential Construction cloud software service provider has introduced
                an AI-Driven Multi-Family Project Proforma Financial Forecasting Proprietary Tool that revolutionizes the process of securing
                investment financing for your mega projects.
              </p>
              <button className="btn btn-light btn-lg me-3" onClick={onDemoClick}>
                Book a demo now
              </button>
            </div>
            <div className="col-lg-6">
              <img src={IMAGES.img26} alt="iBUILD Platform" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Elevating Beyond the Ordinary */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-5">Elevating Beyond the Ordinary</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-unstyled fs-5">
                <li className="mb-3">
                  <strong>Loyalty:</strong> We prioritize client satisfaction above all else.
                </li>
                <li className="mb-3">
                  <strong>User-Friendly:</strong> Our system is designed for ease of use, ensuring smooth implementation, management, and maintenance.
                </li>
                <li className="mb-3">
                  <strong>Complete Package:</strong> iBUILD offers a comprehensive suite of Business Solutions, covering everything from sales to warranty and accounting.
                </li>
                <li className="mb-3">
                  <strong>Price Book Management:</strong> Easily manage assembly pricing and materials.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img src={IMAGES.img27} alt="Team Work" className="img-fluid" />
              <h6 className="text-center mt-2">TEAM WORK</h6>
            </div>
          </div>
        </div>
      </section>

      {/* Simplifying the Challenges */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">
                Simplifying the Challenges in Navigating Acquisition Financing for Major Construction Projects
              </h2>
              <p className="lead text-center mb-5">
                It's all about your proforma presentations and the speed at which your mega-project financial forecasts can be created and modified.
              </p>
              
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <p className="fs-5">
                    <strong>Automated Data Aggregation:</strong> The AI tool streamlines data collection by automatically aggregating information from internal systems, historical data, external sources, and proprietary databases.
                  </p>
                </div>
                <div className="col-lg-6 mb-4">
                  <p className="fs-5">
                    <strong>Predictive Patterns Detection:</strong> By analyzing multidimensional data sets, the AI identifies subtle predictive patterns. This enables more accurate financial projections.
                  </p>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-6">
                  <img src={IMAGES.img31} alt="Data Analytics" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                  <img src={IMAGES.img32} alt="Financial Forecasting" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipping Your Business */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-5 fw-bold text-center mb-5">
                Equipping Your Business for Success
              </h2>
              <div className="row">
                <div className="col-lg-4 text-center mb-4">
                  <h4>Smartphone Integration</h4>
                  <p>Access your projects anywhere, anytime with our mobile-first approach.</p>
                </div>
                <div className="col-lg-4 text-center mb-4">
                  <h4>Price Book Management</h4>
                  <p>Comprehensive pricing database for accurate cost estimation.</p>
                </div>
                <div className="col-lg-4 text-center mb-4">
                  <h4>NO LIMITS</h4>
                  <p>Unlimited projects, unlimited possibilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unlimited Ideas */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Unlimited Ideas, Unlimited Growth</h2>
              <p className="lead mb-4">
                Transform your construction business with our comprehensive suite of tools designed for the modern builder.
              </p>
              <button className="btn btn-light btn-lg" onClick={onDemoClick}>
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Section */}
      <section className="py-4 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 className="mb-0">Follow iBUILD for Updates</h5>
            </div>
            <div className="col-lg-6 text-lg-end">
              <div className="d-flex gap-3 justify-content-lg-end justify-content-start">
                <a href="#" className="text-white">
                  <img src={IMAGES.facebook} alt="Facebook" width="32" height="32" />
                </a>
                <a href="#" className="text-white">
                  <img src={IMAGES.linkedin} alt="LinkedIn" width="32" height="32" />
                </a>
                <a href="#" className="text-white">
                  <img src={IMAGES.youtube} alt="YouTube" width="32" height="32" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};