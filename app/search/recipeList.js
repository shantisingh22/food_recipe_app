"use client";
import React, { useState } from 'react';
import Pagination from './pagination';
import "./style.css";

function getRandomRating() {
    return (Math.random() * 5).toFixed(1); 
}

function RecipeList({ recipes }) {
    const [currentPage, setCurrentPage] = useState(1);

    if (recipes.length === 0) {
        return null;
    }

    const singlePageItem = 10;
    const displayRecipes = recipes.slice((currentPage - 1) * singlePageItem, currentPage * singlePageItem);
    const totalPages = Math.ceil(recipes.length / singlePageItem);

    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    return (
        <>
            <ul className="recipe-list">
                {displayRecipes.map((recipeItem, index) => {
                    const rating = getRandomRating();
                    return (
                        <li key={index} className="recipe-item">
                            <div className="recipe-info">
                                <img src={recipeItem.recipe.image} alt={recipeItem.recipe.label} className="recipe-image" />
                                <div className="recipe-details">
                                    <h6 className="recipe-label">{recipeItem.recipe.label}</h6>
                                </div>
                            </div>
                            <div className="recipe-rating">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i} className={i < Math.round(rating) ? "star filled" : "star"}>
                                        &#9733;
                                    </span>
                                ))}
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Pagination
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </>
    );
}

export default RecipeList;
