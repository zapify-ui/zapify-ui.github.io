import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <nav>
          <Link className="nav-link" to="/" style={{fontSize:'2em'}}>
            ZapifyUI
          </Link>
          <Link className="nav-link" to="/install">
            Installation
          </Link>
          <Link className="nav-link" to="/components/accordion">
            Components
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
