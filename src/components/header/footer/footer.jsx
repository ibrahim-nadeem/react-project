import React from "react";
import "./Footer.css"; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="footer-col">
            <h4>Company</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-col">
            <h4>Contact</h4>
            <p>📍 Ferozepur Road, Gulberg II, Lahore</p>
            <p>📞 0300 1 387 387</p>
            <p>📧 evs@gmail.com</p>
            <div className="social-links">
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates and news.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="footer-bottom">
          <p>© PakClassified, All Rights Reserved. Designed by <a href="#">Team EVS</a></p>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;