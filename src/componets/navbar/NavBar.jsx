import  { useState } from 'react';
import './navbar.css';
import logo from '/cargologo.png';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3 '>
    <div className="container-fluid">
     
      <img src={logo} alt="Upfront Courier Logo" className="logo-img" />
  
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}  id="navbarNav">
        <ul className='navbar-nav ms-auto'>
          <li className="nav-item">
              HOME
          </li>
          <li className="nav-item">
            TRACK A SHIPMENT
          </li>
          <li className="nav-item">
            CONTACT US
          </li>
          <li className="nav-item">
            MAKE PAYMENT
          </li>
          <li>
          <button className="track-btn btn-btn-danger">
         Track
          </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
