"use client";
import React from "react";
import "./style.css";

function InputBox({ fetchRecipes, searchRecipes, setSearchRecipes, handleSearchClear }) {
    return (
        <>
            <h1>
                Recipes <img src="chocolate-cake.png" style={{ width: "120px", height: "100px" }} alt="Chocolate Cake" />
            </h1>
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
