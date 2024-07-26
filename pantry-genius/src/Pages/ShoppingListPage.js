import React, { useState } from 'react';
import { FaSearch, FaPlus, FaBarcode } from 'react-icons/fa';
import { MdAddShoppingCart, MdDelete } from 'react-icons/md';
import AppLogo from '../Assets/Logo.svg'; // Replace with your logo path
import '../StyleSheets/ShoppingListPage.css';
import Swipeablelistitem from '../Components/Swipeable-List-item';

const ShoppingListPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', inPantry: false },
    { id: 2, name: 'Item 2', inPantry: false },
    { id: 2, name: 'Item 2', inPantry: false },
    { id: 2, name: 'Item 2', inPantry: false },
    { id: 2, name: 'Item 2', inPantry: false },
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
        {/*
                    {items.map(item => (
                <div key={item.id} className='shopping-item'>
                    <span className='item-name'>{item.name}</span>
                    <div className="barcode-section">
                        <button className="barcode-button">
                        <FaBarcode />
                        </button>
                    </div>
                </div>
            ))}
        
        */}
        <div className='shopping-list'>
          {
            items.map(item=> (
              <div className="shopping-item">
                <Swipeablelistitem className="shopping-item" itemName={item.name}/>
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default ShoppingListPage;