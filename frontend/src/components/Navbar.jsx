import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active-nav-link" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-red shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="brand-icon rounded-circle d-flex align-items-center justify-content-center">
            <span className="fw-bold">D</span>
          </div>
          <div>
            <div className="fw-bold fs-5">DocAppoint</div>
            <div className="small text-light-50">
              Book trusted doctors in minutes
            </div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/book")}`} to="/book">
                Book Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/doctors")}`} to="/doctors">
                View Doctors
              </Link>
            </li>
            <li className="nav-item d-none d-lg-block">
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
