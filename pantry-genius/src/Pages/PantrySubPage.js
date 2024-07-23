import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import '../StyleSheets/PantrySubPage.css';
import Logo from "../Assets/Logo.svg";
import { FaSearch, FaBarcode } from 'react-icons/fa';

const PantrySubPage = ({ onBack, category }) => {
  return (
    <div className="pantry-sub-page">
        <button className="back-button" onClick={onBack}>
          <FaArrowLeft /> Back
        </button>
        <header className="header">
            <div className="header-title">
              <div className="header-classification">{category}</div>
              <div className='title-logo'>
                <h1 className="title">Pantry Genius</h1>
                <img src={Logo} alt="Logo" className="pantry-logo" />
              </div>
            </div>
          </header>
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
      <div className="sub-content">
      </div>
    </div>
  );
};

export default PantrySubPage;