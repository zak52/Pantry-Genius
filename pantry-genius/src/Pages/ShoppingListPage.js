import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import AppLogo from '../Assets/Logo.svg';
import '../StyleSheets/ShoppingListPage.css';
import Swipeablelistitem from '../Components/Swipeable-List-item';

const ShoppingListPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', inPantry: false },
    { id: 2, name: 'Item 2', inPantry: false },
    // Add more items as needed
  ]);

  const addItemToPantry = (itemId) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, inPantry: true } : item
    ));
  };

  const deleteItemFromList = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="shopping-list-page">
      <header className="header">
        <div className="header-title">
          <img src={AppLogo} alt="App Logo" className="app-logo" />
          <h1 className="title">Shopping List</h1>
        </div>
      </header>
      <div className="search-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Or Add to List..." className="search-input" />
          <FaPlus className="add-icon" />
        </div>
      </div>
      <div className="shopping-list">
        {items.map(item => (
          <div className='shopping-item'>
            <Swipeablelistitem
              key={item.id}
              itemName={item.name}
              onLeft={() => deleteItemFromList(item.id)}
              onRight={() => addItemToPantry(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingListPage;