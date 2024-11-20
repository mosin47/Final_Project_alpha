import React, { useState } from 'react';

const categories = [
  {
    name: 'Table',
    subcategories: ['Dining Table', 'Coffee Table', 'Study Table'],
  },
  {
    name: 'Chair',
    subcategories: [
      'Sofa Chair',
      'Club Chair',
      'Wing Chair',
      'Deck Chair',
      'Sleeper Chair',
      'Cantilever Chair',
      'Swing Chair',
    ],
  },
  {
    name: 'Sofa',
    subcategories: ['Sectional Sofa', 'Loveseat', 'Sleeper Sofa'],
  },
];

const CategorySidebar = () => {
  // Set the initial state to "Chair" so it's open by default
  const [expandedCategory, setExpandedCategory] = useState('Chair');

  // Toggle expand/collapse for a category
  const toggleCategory = (categoryName) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null); // Collapse if the category is already expanded
    } else {
      setExpandedCategory(categoryName); // Expand the selected category
    }
  };

  return (
    <div className="mb-10 mx-9 border px-2 border-gray-100 bg-gray-50">
      <h2 className="text-lg bg-gray-100 font-semibold mb-2 text-center ">Shop By Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.name} className="mb-4">
            {/* Main category */}
            <button
              onClick={() => toggleCategory(category.name)}
              className="flex justify-between w-full text-left text-gray-700 font-medium hover:text-gray-900"
            >
              {category.name}
              <span>{expandedCategory === category.name ? '-' : '+'}</span>
            </button>
            {/* Subcategories */}
            {expandedCategory === category.name && (
              <ul className="pl-4 mt-2">
                {category.subcategories.map((sub) => (
                  <li key={sub} className="text-gray-600 hover:text-gray-800">
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
