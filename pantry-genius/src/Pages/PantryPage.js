import React, { useState } from 'react';
import '../StyleSheets/PantryPage.css';
import '../App.css';
import { FaCaretRight, FaSearch, FaBarcode } from 'react-icons/fa';
import Logo from "../Assets/Logo.svg";
import NavigationBar from '../Components/Navigation-Bar';
import PantrySubPage from './PantrySubPage';

const mockItems = [
  { id: 1, name: 'Milk', tags: ['Dairy', 'Fresh'] },
  { id: 2, name: 'Chicken Breast', tags: ['Protein', 'Frozen'] },
  { id: 3, name: 'Apple', tags: ['Fruits & Vegetables', 'Fresh'] },
  { id: 4, name: 'Flour', tags: ['Baking'] },
  { id: 5, name: 'Cheese', tags: ['Dairy', 'Fresh'] },
  { id: 6, name: 'Frozen Peas', tags: ['Fruits & Vegetables', 'Frozen'] },
];

const PantryPage = () => {
  const [showSubPage, setShowSubPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const items = mockItems.filter(item => item.tags.includes(category));
    setFilteredItems(items);
    setShowSubPage(true);
  };

  const handleTagClick = (tag) => {
    setSelectedCategory(tag);
    const items = mockItems.filter(item => item.tags.includes(tag));
    setFilteredItems(items);
    setShowSubPage(true);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      const items = mockItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredItems(items);
      setShowSubPage(true);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBack = () => {
    setShowSubPage(false);
    setSearchTerm('');
  };

  return (
    <div className="pantry-page">
      {showSubPage ? (
        <PantrySubPage onBack={handleBack} items={filteredItems} searchTerm={searchTerm} category={selectedCategory} />
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
              <input 
                type="text" 
                placeholder="Search Pantry" 
                className="search-input" 
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleSearchKeyPress}
              />
              <FaBarcode className="barcode-icon" />
            </div>
            <div className="tags">
              <span className="tag fresh" onClick={() => handleTagClick('Fresh')}>Fresh</span>
              <span className="tag frozen" onClick={() => handleTagClick('Frozen')}>Frozen</span>
              <span className="tag gmo" onClick={() => handleTagClick('GMO')}>GMO</span>
              <span className="tag organic" onClick={() => handleTagClick('Organic')}>Organic</span>
            </div>
          </div>
          <div className="category-section">
            <div className="category" onClick={() => handleCategoryClick('Expiring Soon')}>
              <div className='category-title'>
                Expiring Soon
              </div>
              <FaCaretRight className="category-caret" />
            </div>
            <div className="category" onClick={() => handleCategoryClick('Protein')}>
              <div className='category-title'>
                Protein
              </div>
              <FaCaretRight className="category-caret" />
            </div>
            <div className="category" onClick={() => handleCategoryClick('Fruits & Vegetables')}>
              <div className='category-title'>
                Fruits & Vegetables
              </div>
              <FaCaretRight className="category-caret" />
            </div>
            <div className="category" onClick={() => handleCategoryClick('Dairy')}>
              <div className='category-title'>
                Dairy
              </div>
              <FaCaretRight className="category-caret" />
            </div>
            <div className="category" onClick={() => handleCategoryClick('Baking')}>
              <div className='category-title'>
                Baking
              </div>
              <FaCaretRight className="category-caret" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PantryPage;