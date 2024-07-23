import React, { useState } from 'react';
import '../StyleSheets/PantryPage.css';
import '../App.css';
import { FaCaretRight, FaSearch, FaBarcode } from 'react-icons/fa';
import Logo from "../Assets/Logo.svg";
import NavigationBar from '../Components/Navigation-Bar';
import PantrySubPage from './PantrySubPage';

const PantryPage = () => {
  const [showSubPage, setShowSubPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowSubPage(true);
  };

  const handleBack = () => {
    setShowSubPage(false);
  };

  return (
    <div className="pantry-page">
      {showSubPage ? (
        <PantrySubPage onBack={handleBack} category={selectedCategory} />
      ) : (
        <>
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
            <div className="category" onClick={() => handleCategoryClick('Expiring Soon')}>
              <div className='category-title'>
                Expiring Soon
              </div>
              <FaCaretRight className="category-caret" />
              <div className='category-imgs'>
                {/* Add category images or items here */}
              </div>
            </div>
            <div className="category" onClick={() => handleCategoryClick('Protein')}>
              <div className='category-title'>
                Protein
              </div>
              <FaCaretRight className="category-caret" />
              <div className='category-imgs'>
                {/* Add category images or items here */}
              </div>
            </div>
            <div className="category" onClick={() => handleCategoryClick('Fruits & Vegetables')}>
              <div className='category-title'>
                Fruits & Vegetables
              </div>
              <FaCaretRight className="category-caret" />
              <div className='category-imgs'>
                {/* Add category images or items here */}
              </div>
            </div>
            <div className="category" onClick={() => handleCategoryClick('Dairy')}>
              <div className='category-title'>
                Dairy
              </div>
              <FaCaretRight className="category-caret" />
              <div className='category-imgs'>
                {/* Add category images or items here */}
              </div>
            </div>
            <div className="category" onClick={() => handleCategoryClick('Baking')}>
              <div className='category-title'>
                Baking
              </div>
              <FaCaretRight className="category-caret" />
              <div className='category-imgs'>
                {/* Add category images or items here */}
              </div>
            </div>
          </div>
          <NavigationBar />
        </>
      )}
    </div>
  );
};

export default PantryPage;