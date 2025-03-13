import React from "react";
import "./CarCategories.css"; // Ensure the CSS file is in the correct location
import SuvImage from '../../image/suv.jpg';
import Sedanimage from '../../image/sedan.jpg';
import Crossoverimage from '../../image/crossover.jpg';
import Hatchbackimage from '../../image/hatchback.jpg';
import Gwagonimage from '../../image/Gwagon.jpg';
import Sportsimage from '../../image/sports.jpg';
import Hybridimage from '../../image/hybrid.jpg';
 import ConvertibleImage from '../../image/convertible .jpg'
 

const categories = [
  { name: "SUV", count: 11, image: SuvImage },
  { name: "Sedan", count: 14, image: Sedanimage },
  { name: "Crossover", count: 14, image: Crossoverimage },
  { name: "Hatchback", count: 10, image: Hatchbackimage },
  { name: "GWagon", count: 12, image: Gwagonimage },
  { name: "Sports", count: 1, image: Sportsimage },
  { name: "Hybrid", count: 12, image: Hybridimage },
  { name: "Convertible", count: 11, image: ConvertibleImage },
   
 ];

const CarCategories = () => {
  return (
    <>

    <div className="categories-container">
      <h2>Explore By Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.count} Cars</p>
          </div>
            


            




        ))}
 
            


            




     
      </div>
    </div>
    
    

    
    </>
  );
};

export default CarCategories;




 