import React, { useState } from 'react';
import '../StyleSheets/RecipePage.css';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { FiToggleLeft } from 'react-icons/fi';
import AppLogo from '../Assets/Logo.svg';
import RecipeCardPage from './RecipeCardPage';

const mockRecipes = [
  { id: 1, name: 'Chicken Alfredo', image: 'chicken_alfredo.jpg', time: '30 Mins', tags: ['Lunch', 'Dinner'], rating: 4.5, prepTime: '10 mins', cookTime: '20 mins', totalTime: '30 mins', servings: 4, description: 'A classic Italian pasta dish.' ,
    ingredients: [
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: true },
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: false }
    ],
    instructions: [
      'Heat the olive oil in a pan over medium heat.',
      'Add the diced onion and sauté until translucent.',
      'Add the bell pepper and cook for another 5 minutes.',
      'Serve over cooked pasta and enjoy!'
    ]},
  { id: 2, name: 'Chicken Alfredo', image: 'chicken_alfredo2.jpg', time: '30 Mins', tags: ['Lunch', 'Dinner'], rating: 4, prepTime: '10 mins', cookTime: '20 mins', totalTime: '30 mins', servings: 4, description: 'A creamy pasta dish with chicken.' ,
    ingredients: [
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: true },
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: false }
    ],
    instructions: [
      'Heat the olive oil in a pan over medium heat.',
      'Add the diced onion and sauté until translucent.',
      'Add the bell pepper and cook for another 5 minutes.',
      'Serve over cooked pasta and enjoy!'
    ]},
  { id: 3, name: 'Chicken Alfredo', image: 'chicken_alfredo3.jpg', time: '30 Mins', tags: ['Lunch', 'Dinner'], rating: 4.5, prepTime: '10 mins', cookTime: '20 mins', totalTime: '30 mins', servings: 4, description: 'A delicious and easy pasta recipe.',
    ingredients: [
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: true },
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: false }
    ],
    instructions: [
      'Heat the olive oil in a pan over medium heat.',
      'Add the diced onion and sauté until translucent.',
      'Add the bell pepper and cook for another 5 minutes.',
      'Serve over cooked pasta and enjoy!'
    ] },
  { id: 4, name: 'Chicken Alfredo', image: 'chicken_alfredo4.jpg', time: '30 Mins', tags: ['Lunch', 'Dinner'], rating: 5, prepTime: '10 mins', cookTime: '20 mins', totalTime: '30 mins', servings: 4, description: 'Perfect for a quick dinner.',
    ingredients: [
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: true },
      { name: '2 tablespoons olive oil', available: true },
      { name: '1 medium onion, diced', available: true },
      { name: '1 red bell pepper, seeded and diced', available: false }
    ],
    instructions: [
      'Heat the olive oil in a pan over medium heat.',
      'Add the diced onion and sauté until translucent.',
      'Add the bell pepper and cook for another 5 minutes.',
      'Serve over cooked pasta and enjoy!'
    ]},
  // Add more mock recipes as needed
];

const RecipePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State for the selected recipe

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleInStockToggle = () => {
    setInStockOnly(!inStockOnly);
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Set the selected recipe
  };

  const handleBack = () => {
    setSelectedRecipe(null); // Go back to the recipe list
  };

  return (
    <div className="my-recipe-page">
      {selectedRecipe ? (
        <RecipeCardPage recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <>
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
              <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
                <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                <div className="recipe-details">
                  <span className="recipe-tag">AI</span>
                  <span className="recipe-time">{recipe.time}</span>
                  <span className="recipe-name">{recipe.name}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RecipePage;