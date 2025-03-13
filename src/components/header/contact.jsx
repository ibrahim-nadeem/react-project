import React from "react";
import "./contact.css"; // Import the CSS file
import contactImage from "../../image/jeep.jpg"; // Ensure the correct path
import locationIcon from '../../image/location.png' 
import emailIcon from  '../../image/email.png'
import phoneIcon from  '../../image/phone.png'

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="banner">
        <img src={contactImage} alt="Contact Banner" className="banner-image" />
        <div className="banner-overlay">
          <h2>Contact</h2>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="contact-card">
          <img src={locationIcon} alt="Location" />
          <p>Gulberg III, Lahore</p>
        </div>
        <div className="contact-card">
          <img src={emailIcon} alt="Email" />
          <p>evs@gmail.com</p>
        </div>
        <div className="contact-card">
          <img src={phoneIcon} alt="Phone" />
          <p>0300 1 387 387</p>
        </div>
      </div>

      {/* Map & Contact Form Section */}
      <div className="contact-content">
        <div className="map">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.173512755961!2d74.35874757526697!3d31.520369374947707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919056d84b9f5fd%3A0x713c74a6e5ec9045!2sEVS%20Training%20Institute!5e0!3m2!1sen!2s!4v1645364151423!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-form">
          <p>
            For any inquiries, assistance, or feedback, please fill out the form
            below. Our team is committed to responding promptly.
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Leave a message here" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import './contact.css'; // Import the CSS file
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import contactImage from "../../image/jeep.jpg"; // Ensure the correct path
// import locationIcon from "../../image/location-icon.png";
// import emailIcon from "../../image/email-icon.png";
// import phoneIcon from "../../image/phone-icon.png";

// const Contact = () => {
//   return (
//     <div className="contact-page">
//       {/* Banner Section */}
//       <div className="banner">
//         <img src={contactImage} alt="Contact Banner" className="banner-image" />
//         <div className="banner-overlay">
//           <h2>Contact</h2>
//         </div>
//       </div>

//       {/* Contact Info Section */}
//       <div className="contact-info">
//         <div className="contact-card">
//           <img src={locationIcon} alt="Location" />
//           <p>Gulberg III, Lahore</p>
//         </div>
//         <div className="contact-card">
//           <img src={emailIcon} alt="Email" />
//           <p>evs@gmail.com</p>
//         </div>
//         <div className="contact-card">
//           <img src={phoneIcon} alt="Phone" />
//           <p>0300 1 387 387</p>
//         </div>
//       </div>

//       {/* Map & Contact Form Section */}
//       <div className="contact-content">
//         <div className="map">
//           <iframe
//             title="Google Maps"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.173512755961!2d74.35874757526697!3d31.520369374947707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919056d84b9f5fd%3A0x713c74a6e5ec9045!2sEVS%20Training%20Institute!5e0!3m2!1sen!2s!4v1645364151423!5m2!1sen!2s"
//             width="100%"
//             height="300"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>

//         <div className="contact-form">
//           <p>
//             For any inquiries, assistance, or feedback, please fill out the form
//             below. Our team is committed to responding promptly.
//           </p>
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <input type="text" placeholder="Subject" required />
//             <textarea placeholder="Leave a message here" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;