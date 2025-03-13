import React from "react";
import { useParams } from "react-router-dom";
import carData from "./carData";

function CategoryPage() {
  const { name } = useParams();
  const filteredCars = carData.filter((car) => car.category.toLowerCase() === name);

  return (
    <div>
      <h2>{name.toUpperCase()} Cars</h2>
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <div key={car.name} style={{ display: "flex", border: "1px solid black", margin: "10px", padding: "10px" }}>
            <img src={require(`../image/${car.image}`)} alt={car.name} style={{ width: "100px", height: "100px", marginRight: "10px" }} />
            <div>
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <button>View Details</button>
            </div>
          </div>
        ))
      ) : (
        <p>No cars available in this category.</p>
      )}
    </div>
  );
}

export default CategoryPage;