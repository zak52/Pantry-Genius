import React from "react";
import "../App.css";
import { FaShoppingBasket, FaBook, FaShoppingCart, FaCog, FaCaretRight, FaSearch, FaBarcode } from 'react-icons/fa';

const NavigationBar = () => {
    return (
        <div>
            <footer className="footer">
                <div className="grocery-icon">
                    <FaShoppingBasket className="footer-icon" />
                    Grocery
                </div>
                <div className="recipe-icon">
                    <FaBook className="footer-icon" />
                    Recipes
                </div>
                <div className="add-button">+</div>
                <div className="shopping-list-icon">
                    <FaShoppingCart className="footer-icon" />
                    Shopping
                </div>
                <div className="settings-icon">
                    <FaCog className="footer-icon" />
                    More
                </div>
            </footer>
        </div>
    );
};
export default NavigationBar;