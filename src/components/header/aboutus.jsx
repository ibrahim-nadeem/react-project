import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import mercedesimage from "../../image/mercedes.jpg"; // Ensure this path is correct
import jeepimage from "../../image/jeep.jpg";
import jaguarimage from "../../image/jaguar.jpg";
import lexusimage from "../../image/lexus.jpg";
import suzukiimage from "../../image/suzuki.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Banner Section */}
      <div className="about-banner">
        <img src={jeepimage} alt="SUV" className="jeep" />
        <div className="overlay">
          <h2>About Us</h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        {/* Image Gallery */}
        <div className="about-images">
          <img src={mercedesimage} alt="Mercedes" />
          <img src={suzukiimage} alt="Suzuki" />
          <img src={lexusimage} alt="Lexus" />
          <img src={jaguarimage} alt="Jaguar" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>
            PakClassified is a comprehensive online platform where users can browse, buy, sell, and compare cars.
          </h2>
          <p>
            Welcome to PakClassified, your premier destination for all things automotive in Pakistan.
            Our platform is designed to offer a seamless experience for users looking to browse,
            buy, sell, and compare cars. Whether you are a car enthusiast or a first-time buyer,
            PakClassified is committed to making your car shopping journey smooth and hassle-free.
          </p>
          <ul>
            <li>✔ Customer Support</li>
            <li>✔ Technical Assistance</li>
            <li>✔ Feedback and Suggestions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./AboutUs.css"; // Import CSS for styling
// import revoimage from "../../image/revo.jpg"; // Update with the actual banner image path
// import hyundaiimage from "../../image/hyundai.jpg";
// import mercedesimage from "../../image/mercedes.jpg";
// import lexusimage from "../../image/lexus.jpg";
// import suzukiimage from "../../image/suzuki.jpg";

// const AboutUs = () => {
//   return (
//     <div className="about-container">
//       {/* Banner Section */}
//       <div  className="banner">
//         <img src={revoimage} alt="revo" />
//         <div className="banner-text">About Us</div>
//       </div>

//       {/* Content Section */}
//       <div className="content">
//         <h2>PakClassified is a comprehensive online platform</h2>
//         <p>
//           Welcome to PakClassified, your premier destination for all things
//           automotive in Pakistan. Our platform is designed to offer a seamless
//           experience for users looking to browse, buy, sell, and compare cars.
//         </p>

//         <ul className="features">
//           <li>✅ Customer Support</li>
//           <li>✅ Technical Assistance</li>
//           <li>✅ Feedback and Suggestions</li>
//         </ul>

//         {/* Image Gallery */}
//         <div className="image-gallery">
//           <img src={mercedesimage} alt="Mercedes" />
//           <img src={hyundaiimage} alt="Hyundai" />
//           <img src={suzukiimage} alt="Suzuki" />
//           <img src={lexusimage} alt="Lexus" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React from 'react';
// import revoimage from '../../../image/revo.jpg';
// import havalimage from '../../../image/havel.jpg';
// import hondacityimage from '../../../image/hondacity.jpg';
// import suzukiimage from '../../../image/suzuki.jpg';
// import lexusimage from '../../../image/lexus.jpg';

 
//  // Fixed import issue
// import './aboutus.css';

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <div className="hero">
//         <img src={revoimage} alt="Hero Car" className="hero-image" /> {/* Fixed undefined car1 */}
//         <h2 className="title">About Us</h2>
//       </div>
//       <div className="content">
//         <h1>PakClassified is a comprehensive online platform</h1>
//         <p>
//           Welcome to PakClassified, your premier destination for all things automotive in Pakistan.
//           Our platform is designed for users to browse, buy, sell, and compare cars easily.
//         </p>
//         <ul>
//           <li>✅ Customer Support</li>
//           <li>✅ Technical Assistance</li>
//           <li>✅ Feedback and Suggestions</li>
//         </ul>
//       </div>
//       <div className="image-gallery">
//         <img src={havalimage} alt="Car 2" />  {/* Fixed undefined car2 */}
//         <img src={hondacityimage} alt="Car 3" /> {/* Fixed undefined car3 */}
//         <img src={suzukiimage} alt="Car 4" /> {/* Fixed undefined car4 */}
//         <img src={lexusimage} alt="Car 5" /> {/* Fixed undefined car5 */}
//       </div>
//       <Link to="/">Go Back Home</Link>
//     </div>
//   );
// };

// export default AboutUs;

// import React from "react";
// import { Link } from "react-router-dom";
// import revoimage from '../../image/revo.jpg'
// import havalimage from  '../../image/havel.jpg'
// import hondacityimage from '../../image/hondacity.jpg'
// import suzukiimage from '../../image/suzuki.jpg'
// import lexuximage from '../../image/lexus,jpg'
// import './aboutus.css'

// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <div className="hero">
//         <img src={car1} alt="Hero Car" className="hero-image" />
//         <h2 className="title">About Us</h2>
//       </div>
//       <div className="content">
//         <h1>PakClassified is a comprehensive online platform</h1>
//         <p>
//           Welcome to PakClassified, your premier destination for all things automotive in Pakistan.
//           Our platform is designed for users to browse, buy, sell, and compare cars easily.
//         </p>
//         <ul>
//           <li>✅ Customer Support</li>
//           <li>✅ Technical Assistance</li>
//           <li>✅ Feedback and Suggestions</li>
//         </ul>
//       </div>
//       <div className="image-gallery">
//         <img src={car2} alt="Car 2" />
//         <img src={car3} alt="Car 3" />
//         <img src={car4} alt="Car 4" />
//         <img src={car5} alt="Car 5" />
//       </div>
//       <Link to="/">Go Back Home</Link>
//     </div>
//   );
// };

// export default AboutUs;