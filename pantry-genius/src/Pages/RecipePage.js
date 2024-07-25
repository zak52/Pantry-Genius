import React, { useState } from 'react';
import '../StyleSheets/RecipePage.css';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { FiToggleLeft } from 'react-icons/fi';
import AppLogo from '../Assets/Logo.svg';

const mockRecipes = [
  { id: 1, name: 'Chicken Alfredo', image: 'chicken_alfredo.jpg', time: '30 Mins' },
  { id: 2, name: 'Chicken Alfredo', image: 'chicken_alfredo2.jpg', time: '30 Mins' },
  { id: 3, name: 'Chicken Alfredo', image: 'chicken_alfredo3.jpg', time: '30 Mins' },
  { id: 4, name: 'Chicken Alfredo', image: 'chicken_alfredo4.jpg', time: '30 Mins' },
  // Add more mock recipes as needed
];

const RecipePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleInStockToggle = () => {
    setInStockOnly(!inStockOnly);
  };

  return (
    <div className="my-recipe-page">
  <header className="header">
    <div className="header-title">
      <img src={AppLogo} alt="Chef Logo" className="chef-logo" />
      <h1 className="title">My Recipes</h1>
    </div>
    <div className="search-section">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input 
          type="text" 
          placeholder="Search Recipes..." 
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange} 
        />
      </div>
      <div className="controls">
        <div className="in-stock-toggle">
          <FiToggleLeft className="toggle-icon" />
          <span>In-Stock</span>
        </div>
        <FaFilter className="filter-icon" />
      </div>
    </div>
  </header>
  <div className="categories">
    {['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'].map(category => (
      <span 
        key={category} 
        className={`category ${selectedCategory === category ? 'active' : ''}`} 
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </span>
    ))}
  </div>
  <div className="recipes">
    {mockRecipes.map(recipe => (
      <div key={recipe.id} className="recipe-card">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <div className="recipe-details">
          <span className="recipe-name">{recipe.name}</span>
          <span className="recipe-time">{recipe.time}</span>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default RecipePage;