import React from 'react';
import '../StyleSheets/PantryPage.css';
import '../App.css';
import { FaShoppingBasket, FaBook, FaShoppingCart, FaCog, FaCaretRight, FaSearch, FaBarcode } from 'react-icons/fa';
import Logo from "../Assets/Logo.svg";

const PantryPage = () => {
  return (
    <div className="pantry-page">
      <header className="header">
        <div className="header-title">
          <div className="header-classification">Home</div>
          <div className='title-logo'>
            <h1 className="title">Pantry Genius</h1>
            <img src={Logo} alt="Logo" className="pantry-logo" />
          </div>
        </div>
      </header>
      <div className="profile-section">
        <div className="profile-icon">
          <span>R</span>
        </div>
      </div>
      <div className="search-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search Pantry" className="search-input" />
          <FaBarcode className="barcode-icon" />
        </div>
        <div className="tags">
          <span className="tag fresh">Fresh</span>
          <span className="tag frozen">Frozen</span>
          <span className="tag gmo">GMO</span>
          <span className="tag organic">Organic</span>
        </div>
      </div>
      <div className="category-section">
        <div className="category">
          <div className='category-title'>
            Expiring Soon
          </div>
          <FaCaretRight className="category-caret" />
          <div className='category-imgs'>

          </div>
        </div>
        <div className="category">
          <div className='category-title'>
            Protien
          </div>
          <FaCaretRight className="category-caret" />
          <div className='category-imgs'>

          </div>
        </div>
        <div className="category">
          <div className='category-title'>
            Fruits & Vegetables
          </div>
          <FaCaretRight className="category-caret" />
          <div className='category-imgs'>

          </div>
        </div>
        <div className="category">
          <div className='category-title'>
            Dairy
          </div>
          <FaCaretRight className="category-caret" />
          <div className='category-imgs'>

          </div>
        </div>
        <div className="category">
          <div className='category-title'>
            Baking
          </div>
          <FaCaretRight className="category-caret" />
          <div className='category-imgs'>

          </div>
        </div>
      </div>
      <footer className="footer">
        <FaShoppingBasket className="footer-icon" />
        <FaBook className="footer-icon" />
        <div className="add-button">+</div>
        <FaShoppingCart className="footer-icon" />
        <FaCog className="footer-icon" />
      </footer>
    </div>
  );
};

export default PantryPage;