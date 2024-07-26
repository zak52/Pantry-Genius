import React from "react";
import { FaArrowLeft, FaEdit, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import '../StyleSheets/RecipeCardPage.css';
import AppLogo from '../Assets/Logo.svg';
import { FaClock, FaTimesCircle } from 'react-icons/fa';
import { FaShareAlt, FaCheckCircle } from 'react-icons/fa';

const RecipeCardPage = ({ recipe, onBack }) => {
    return (
        <div className="recipe-detail-page">
            <div className="header-div">
                <div className="recipe-buttons">
                    <button className="back-button" onClick={onBack}>
                        <FaArrowLeft /> Back
                    </button>
                    <button className="edit-button">
                        <FaEdit /> EDIT
                    </button>
                </div>
                <header className="recipe-detail-header">
                    <div className="recipe-title">
                    <img src={AppLogo} alt="Chef Logo" className="chef-logo" />
                    <h1 className="title">{recipe.name}</h1>
                    </div>
                </header>
            </div>
        <div className="recipe-section">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
          <div className="recipe-info">
            <div className="tags">
              Tags: {recipe.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <div className="rating">
                {Array(Math.floor(recipe.rating)).fill().map((_, i) => (
                <FaStar key={i} />
              ))}
              {recipe.rating % 1 !== 0 && <FaStarHalfAlt />}
            </div>
            <div className="cooktime-secton">
                <FaClock className="clock-icon"/>
                <div className="times-headers">
                    <p><strong>Prep:</strong> </p>
                    <p><strong>Cook:</strong> </p>
                    <p><strong>Total:</strong></p>
                </div>
            </div>
            <div className="times">
                    <p>{recipe.prepTime}</p>
                    <p>{recipe.cookTime}</p>
                    <p>{recipe.totalTime}</p>
                </div>
            <div className="servings">
              <p><strong>Servings:</strong> {recipe.servings} servings</p>
            </div>
            <button className="share-button">Share <FaShareAlt className="share-icon"/> </button>
            <p className="sub-section description">
              <h3 className="sub-section-title">
                description
              </h3>
              <hr class="custom-line"></hr>
              <span>{recipe.description}</span>
            </p>
          </div>
            <div className="recipe-ingredients sub-section">
                    <h3>Ingredients</h3>
                    <hr class="custom-line"></hr>
                    <button className="add-to-list">Add to List</button>
                    <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                        {ingredient.available ? <FaCheckCircle className="icon-available" /> : <FaTimesCircle className="icon-unavailable" />}
                        {ingredient.name}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="recipe-instructions sub-section">
                    <h3>Instructions</h3>
                    <hr class="custom-line"></hr>
                    <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>
                        <span className="instruction-step">{index + 1}</span> {instruction}
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        </div>
      );
}; export default RecipeCardPage;