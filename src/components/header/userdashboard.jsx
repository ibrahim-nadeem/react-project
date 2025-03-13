import React from "react";
import './userdashboard.css'; // Create this file for styling
import userimage from  '../../image/user.png'
import mercedesimage from  '../../image/mercedes.jpg'
import lexusimage from '../../image/lexus.jpg'
import sedanimage from '../../image/sedan.jpg'
import mustangimage from '../../image/mustang.jpg'

const ads = [
  {
    id: 1,
    title: "Mercedes-Benz C- 180",
    description: "A luxurious convertible with advanced technology and premium materials.",
    price: "6,000,000",
    location: "Pakki Valley",
    image: mercedesimage,
  },
  {
    id: 2,
    title: "lexus",
    description: "A reliable crossover with a perfect blend of performance, comfort, and safety.",
    price: "4,700,000",
    location: "Jinnah",
    image: lexusimage,
  },
  {
    id: 3,
    title: "audi a4",
    description: "A practical crossover with spacious interiors and modern features.",
    price: "5,600,000",
    location: "Mallapur",
    image: sedanimage,
  },
  {
    id: 4,
    title: "mustang",
    description: "A versatile SUV with innovative features and a comfortable ride.",
    price: "6,000,000",
    location: "Gulberg",
    image: mustangimage ,
  },
];

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      {/* Banner */}
      <div className="banner">
        <h2>User Dashboard</h2>
      </div>

      {/* User Info */}
      <div className="user-info">
        <img src={userimage} alt="User" className="profile-pic" />
        <h3>Ibrahim nadeem</h3>
        <p>Email: ibu03312004@gmail.com</p>
        <p>Contact: 03319670664</p>
        <p>Birth Date: 2004-07-013</p>
        <button className="edit-btn">Edit Info</button>
        <button className="logout-btn">Logout</button>
      </div>

      {/* Posted Ads */}
      <h2 className="section-title">Posted Advertisements</h2>
      <div className="ads-container">
        {ads.map((ad) => (
          <div key={ad.id} className="ad-card">
            <img src={ad.image} alt={ad.title} className="ad-image" />
            <div className="ad-content">
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
              <p><strong>Price:</strong> {ad.price}</p>
              <p><strong>City Area:</strong> {ad.location}</p>
              <div className="buttons">
                <button className="delete-btn">Delete</button>
                <button className="edit-btn">Edit</button>
                <button className="view-btn">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;