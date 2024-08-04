import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToCustomerPortal = () => {
    navigate("/customer-portal");
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">CustoPro</div>
        <div className="nav-links">
          <button onClick={navigateToCustomerPortal} className="nav-cta">
            Log In
          </button>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Revolutionize Your Customer Management</h1>
        <p>
          Streamline operations, boost engagement, and drive growth with our
          cutting-edge customer portal solution.
        </p>
        <button onClick={navigateToCustomerPortal} className="cta-button">
          Start Free Trial
        </button>
      </header>

      <main className="main-content">
        <h2>Welcome to CustoPro</h2>
        <p>
          Our platform provides you with the best tools to manage your customers
          efficiently and effectively.
        </p>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 CustoPro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
