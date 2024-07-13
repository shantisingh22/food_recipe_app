"use client";
import React, { useEffect, useState } from "react";
import "./style.css";

function SearchBar() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [searchRecipes, setsearchRecipes] = useState("");

    const fetchRecipes = () => {
        fetch(`https://api.edamam.com/search?q=${searchRecipes}&app_id=f0e24019&app_key=b848797de300f8652711b1d7d215ee25&from=0&to=100`)
            .then((response) => response.json())
            .then((data) => {
                if (data.hits) {
                    setRecipes(data.hits);
                } else {
                    setError("No recipes found.");
                }
            })
            .catch((error) => {
                console.error("Error fetching recipes:", error);
                setError(error.toString());
            });
    };

    useEffect(() => {

    }, []);

    const handleSearchClear = () => {
        setsearchRecipes("");
    };


    let content;
    if (error) {
        content = <p>Error: {error}</p>;
    } else if (recipes.length === 0) {
        content = <p>Loading recipes...</p>;
    } else {
        content = (
            <ul>
                {recipes.map((recipeItem, index) => (
                    <li key={index}>
                        <h2>{recipeItem.recipe.label}</h2>
                        <img src={recipeItem.recipe.image} alt={recipeItem.recipe.label} width="100" />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="container">
            <h1>Recipes</h1>
            <div className="inputBox">
                <input
                    type="text"
                    placeholder="Password"
                    className="input_recipe"
                    value={searchRecipes}
                    onChange={(e) => setsearchRecipes(e.target.value)}
                />
                {searchRecipes && (
                    <button className="clear-button" onClick={handleSearchClear}>
                        &times;
                    </button>
                )}
                <button className="search_recipe" onClick={fetchRecipes}>
                    <img src="search.png" />
                </button>
            </div>
            {content}
        </div>
    );
}

export default SearchBar;
