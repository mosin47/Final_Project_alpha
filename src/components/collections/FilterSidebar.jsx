import React, { useState } from 'react';

const FilterSidebar = () => {
  // State to manage filter selections (optional)
  const [filters, setFilters] = useState({
    availability: [],
    priceFrom: '',
    priceTo: '',
    brand: '',
    color: '',
    size: '',
  });

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      availability: [],
      priceFrom: '',
      priceTo: '',
      brand: '',
      color: '',
      size: '',
    });
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50 mx-9">
      {/* Clear All Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter by</h2>
        <button
          onClick={clearFilters}
          className="bg-yellow-300 hidden text-gray-800 px-3 py-1 rounded-md font-medium hover:bg-yellow-400"
        >
          CLEAR ALL
        </button>
      </div>

      {/* Availability Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Availability</h3>
        <label className="flex items-center mb-1 text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={filters.availability.includes('In stock')}
            onChange={() => {
              setFilters((prevFilters) => ({
                ...prevFilters,
                availability: prevFilters.availability.includes('In stock')
                  ? prevFilters.availability.filter((item) => item !== 'In stock')
                  : [...prevFilters.availability, 'In stock'],
              }));
            }}
          />
          In stock
        </label>
        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={filters.availability.includes('Out of stock')}
            onChange={() => {
              setFilters((prevFilters) => ({
                ...prevFilters,
                availability: prevFilters.availability.includes('Out of stock')
                  ? prevFilters.availability.filter((item) => item !== 'Out of stock')
                  : [...prevFilters.availability, 'Out of stock'],
              }));
            }}
          />
          Out of stock
        </label>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="From"
            className="border px-2 py-1 rounded w-full"
            value={filters.priceFrom}
            onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
          />
          <input
            type="text"
            placeholder="To"
            className="border px-2 py-1 rounded w-full"
            value={filters.priceTo}
            onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
          />
        </div>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Brand</h3>
        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={filters.brand === 'creative'}
            onChange={() => {
              setFilters((prevFilters) => ({
                ...prevFilters,
                brand: prevFilters.brand === 'creative' ? '' : 'creative',
              }));
            }}
          />
          creative
        </label>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Color</h3>
        <div className="flex space-x-2">
          {['gray', 'blue', 'red', 'black', 'green', 'yellow', 'pink', 'purple', 'orange'].map((color) => (
            <span
              key={color}
              onClick={() => setFilters({ ...filters, color })}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                filters.color === color ? 'border-black' : 'border-transparent'
              } bg-${color}-400`}
            ></span>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="flex space-x-2">
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setFilters({ ...filters, size })}
              className={`border px-3 py-1 rounded ${
                filters.size === size ? 'bg-gray-300' : 'bg-white'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
