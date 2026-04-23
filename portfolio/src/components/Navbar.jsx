import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          Ayoub<span>Dev</span>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;