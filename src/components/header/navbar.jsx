// navbar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
 
import Example from '../header/modal/postadv.jsx';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pakclassified</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">AboutUs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">Contactus</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">LUXURY</a></li>
                <li><a className="dropdown-item" href="#">SPORTS</a></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </li>
            <li className="nav-item">
         <Example/>
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true"></a>
            </li>
          </ul>
          <form className="d-flex">
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}


          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  // Default export
