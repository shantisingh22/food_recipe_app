"use client";
import React from "react";
import "./style.css";

function InputBox({ fetchRecipes, searchRecipes, setSearchRecipes, handleSearchClear }) {
    return (
        <>
            <div className="recipesText"> 
                <h1> Recipes Search ....
            </h1>
            </div>
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
        </>
    );
}

export default InputBox;
