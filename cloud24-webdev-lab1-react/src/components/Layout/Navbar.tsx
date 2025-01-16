import {Link} from "react-router";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">The Chuckling Abyss</Link>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;