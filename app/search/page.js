"use client";
import React, { useState } from "react";
import ImageCarousel from "./imgeCarousel";
import "./style.css";

function SearchBar() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [searchRecipes, setSearchRecipes] = useState("");

    const fetchRecipes = () => {
        fetch(`https://api.edamam.com/search?q=${searchRecipes}&app_id=f0e24019&app_key=b848797de300f8652711b1d7d215ee25&from=0&to=100`)
            .then((response) => response.json())
            .then((data) => {
                if (data.hits && data.hits.length > 0) {
                    setRecipes(data.hits);
                } else {
                    setError("No recipes found.");
                    setRecipes([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setError(error.toString());
                setRecipes([]);
            });
    };

    const handleSearchClear = () => {
        setSearchRecipes("");
        setRecipes([]);
        setError(null);
    };

    let content;
    if (error) {
        content = <p>Error: {error}</p>;
    } else if (recipes.length === 0 && searchRecipes) {
        content = <p>Loading recipes...</p>;
    } else if (recipes.length > 0) {
        content = (
            <ul className="recipe-list">
                {recipes.map((recipeItem, index) => (
                    <li key={index} className="recipe-item">
                        <div className="recipe-info">
                            <img src={recipeItem.recipe.image} alt={recipeItem.recipe.label} className="recipe-image" />
                            <div className="recipe-details">
                                <h6 className="recipeItem">{recipeItem.recipe.label}</h6>
                                {/* <p>{recipeItem.recipe.source}</p> */}
                            </div>
                        </div>
                        <button className="add-button">ADD</button>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="container">
        <h1>Recipes <img src="chocolate-cake.png"  style={{ width: "120px", height: "100px" }}/> </h1>
        <div className="inputBox">
            <input
                type="text"
                placeholder="Search recipes..."
                className="input_recipe"
                value={searchRecipes}
                onChange={(e) => setSearchRecipes(e.target.value)}
            />
            {searchRecipes && (
                <button className="clear-button" onClick={handleSearchClear}>
                    &times;
                </button>
            )}
            <button className="search_recipe" onClick={fetchRecipes}>
                <img src="search.png" alt="Search" />
            </button>
        </div>
        <ImageCarousel />
        {content}
    </div>
    
    
    );
}

export default SearchBar;





















