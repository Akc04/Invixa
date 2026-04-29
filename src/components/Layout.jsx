import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>

      <header className="nav">
        <div className="logo">Invixa</div>

        <nav className="links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="btn">Get Started</button>
      </header>

      {children}

      <footer className="footer">
        © 2026 Invixa — Systems that power growth
      </footer>

    </div>
  );
}