import React, { useState } from "react";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { keyword, category, city });
    // You can add API call logic here
  };

  return (
    <div className="bg-seagreen p-4 flex justify-center items-center gap-4">
      {/* Keyword Input */}
      <input
        type="text"
        placeholder="Keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="p-2 rounded-md border border-gray-300 w-1/4"
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-md border border-gray-300 w-1/4"
      >
        <option value="">Select Category</option>
        <option value="category1">Sport</option>
        <option value="category2">Luxury</option>
      </select>

      {/* City Dropdown */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded-md border border-gray-300 w-1/4"
      >
        <option value="">Select City Area</option>
        <option value="city1">Lahore</option>
        <option value="city2">Islamabad</option>
      </select>

      {/* Search Button */}
      <button>search</button>
    </div>
  );
};

export default SearchBar;
 