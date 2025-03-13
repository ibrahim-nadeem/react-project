import React from "react";
import "./cardetail.css";
import carImage from '../../image/jeep.jpg'; // Ensure the correct image path

const CarDetails = () => {
  return (
    <div className="car-details">
      {/* Banner Section */}
      <div className="banner">
        <img src={carImage} alt="jeep" className="jeep" />
        <div className="banner-overlay">
          <h2>Car Details</h2>
        </div>
      </div>

      {/* Car Info Section */}
      <div className="car-info">
        <div className="car-description">
          <div className="car-header">
            <img src={carImage} alt="jeep" className="car-thumbnail" />
            <div>
              <h2>Jeep 4x4</h2>
              <p>📍 Lyallpur Town 💰 4,500,000</p>
            </div>
          </div>

          <h3>Car Description</h3>
          <p>
            The Jeep 4x4 is a classic American  car that
            offers a blend of power, style, and open-air freedom. With its bold
            design and powerful engine options, it delivers an exhilarating
            driving experience.
          </p>

          <h3>Features</h3>
          <ul>
            <li>✔ 5.0L V8 engine with 450 horsepower</li>
            <li>✔ 10-speed automatic transmission</li>
            <li>✔ Rear-wheel drive</li>
            <li>✔ Leather-trimmed seats</li>
            <li>✔ 12-inch digital instrument cluster</li>
            <li>✔ SYNC 3 infotainment system</li>
            <li>✔ Adaptive cruise control</li>
          </ul>
        </div>

        {/* Advertisement Summary */}
        <div className="ad-summary">
          <h3>Advertisement Summary</h3>
          <ul>
            <li>➤ Usama Arif</li>
            <li>➤ 05/08/2024</li>
            <li>➤ Lyallpur Town</li>
            <li>➤ Price: 4,500,000</li>
            <li>➤ Contact: 123-456-7890</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;

// import React from "react";
// import "./cardetail.css";
// import jeepimage from '../../imagejeep.jpg' // Example car image
// import jeepimage from '../../image/jeep.jpg' // Example banner image

// const CarDetails = () => {
//   return (
//     <div className="car-details">
//       {/* Banner Section */}
//       <div className="banner">
//         <img src={jeepimage} alt="jeep" className="jeep" />
//         <div className="banner-overlay">
//           <h2>Car Details</h2>
//         </div>
//       </div>

//       {/* Car Info Section */}
//       <div className="car-info">
//         <div className="car-description">
//           <div className="car-header">
//             <img src={jeepimage} alt="jeep" className="car-thumbnail" />
//             <div>
//               <h2>Ford Mustang Convertible</h2>
//               <p>📍 Lyallpur Town 💰 4,500,000</p>
//             </div>
//           </div>

//           <h3>Car Description</h3>
//           <p>
//             The Ford Mustang Convertible is a classic American muscle car that
//             offers a blend of power, style, and open-air freedom. With its bold
//             design and powerful engine options, it delivers an exhilarating
//             driving experience.
//           </p>

//           <h3>Features</h3>
//           <ul>
//             <li>✔ 5.0L V8 engine with 450 horsepower</li>
//             <li>✔ 10-speed automatic transmission</li>
//             <li>✔ Rear-wheel drive</li>
//             <li>✔ Leather-trimmed seats</li>
//             <li>✔ 12-inch digital instrument cluster</li>
//             <li>✔ SYNC 3 infotainment system</li>
//             <li>✔ Adaptive cruise control</li>
//           </ul>
//         </div>

//         {/* Advertisement Summary */}
//         <div className="ad-summary">
//           <h3>Advertisement Summary</h3>
//           <ul>
//             <li>➤ Usama Arif</li>
//             <li>➤ 05/08/2024</li>
//             <li>➤ Lyallpur Town</li>
//             <li>➤ Price: 4,500,000</li>
//             <li>➤ Contact: 123-456-7890</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarDetails;