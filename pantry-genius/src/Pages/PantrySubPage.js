import React from 'react';
import { FaArrowLeft, FaSearch, FaBarcode } from 'react-icons/fa';
import '../StyleSheets/PantrySubPage.css';
import Logo from "../Assets/Logo.svg";
import NavigationBar from '../Components/Navigation-Bar';

const PantrySubPage = ({ onBack, items, searchTerm, category }) => {
  return (
    <div className="pantry-sub-page">
      <button className="back-button" onClick={onBack}>
        <FaArrowLeft /> Back
      </button>
      <header className="header">
        <div className="header-title">
          <div className="header-classification">{searchTerm ? `Search` : category}</div>
          <div className='title-logo'>
            <h1 className="title">Pantry Genius</h1>
            <img src={Logo} alt="Logo" className="pantry-logo" />
          </div>
        </div>
      </header>
      <div className='search-results'>{searchTerm ? `Search results for "${searchTerm}"` : ''} </div>
      <div className="sub-content">
        {items.length > 0 ? items.map(item => (
          <div key={item.id} className="item">{item.name}</div>
        )) : (
          <div className="no-results">No items found</div>
        )}
      </div>
      <div className='nav-bar'>
        <NavigationBar />
      </div>
    </div>
  );
};

export default PantrySubPage;