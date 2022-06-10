import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const user = 12;
  const handleLogout = () => {
    alert("youre logged out!")
  }
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to='/' className="link"><p className="navbar_logo_text">Hospitality</p></Link>
        </div>
        <div className="auth_btn">
          {
            user ? (
              <Link to='/login'><button className="btn btn-primary">Login</button></Link>
            ) : (
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            )
          }
        </div>
      </nav>
    </div>
  );
};
