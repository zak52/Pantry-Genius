import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import AppLogo from '../Assets/Logo.svg';
import '../StyleSheets/ShoppingListPage.css';
import Swipeablelistitem from '../Components/Swipeable-List-item';
import Modal from '../Components/ShoppingListModal';

const ShoppingListPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', inPantry: false },
    { id: 2, name: 'Item 2', inPantry: false },
    // Add more items as needed
  ]);

  const [showModal, setShowModal] = useState(false);

  const addItemToPantry = (itemId) => {
    setShowModal(true);
    // Add logic to update the item in the pantry or show modal options
  };

  const deleteItemFromList = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  const handleAddManually = () => {
    console.log("Adding manually");
    // Logic to add item manually
    setShowModal(false);
  };

  const handleScanItem = () => {
    console.log("Scanning item");
    // Logic to scan item
    setShowModal(false);
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
      {showModal && (
        <Modal>
          <div className="modal-content">
            <h2>Add Item to Pantry</h2>
            <button onClick={handleAddManually}>Add Manually</button>
            <button onClick={handleScanItem}>Scan Item</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ShoppingListPage;