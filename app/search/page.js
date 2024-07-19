"use client";
import React, { useState } from "react";
import Header from "../header";
import ImageCarousel from "./imgeCarousel";
import RecipeList from "./recipeList";
import InputBox from "./inputBox"
// import"../globals.css";
import "./style.css";


function Page() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);
    const [searchRecipes, setSearchRecipes] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchRecipes = () => {
        setIsLoading(true);
        console.log("Fetching recipes");
        fetch(`https://api.edamam.com/search?q=${searchRecipes}&app_id=f0e24019&app_key=b848797de300f8652711b1d7d215ee25&from=0&to=100`)
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                if (data.hits && data.hits.length > 0) {
                    setRecipes(data.hits);
                } else {
                    setError("No recipes found.");
                    setRecipes([]);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                console.error("Error fetching recipes:", error);
                setError(error.toString());
                setRecipes([]);
            });
    };

    const handleSearchClear = () => {
        setSearchRecipes("");
        setRecipes([]);
        setError(null);
        setIsLoading(false);
    };


    let content;
    if (error) {
        content = <p>Error: {error}</p>;
    } else if (isLoading) {
        content = <p>Loading recipes...</p>;
    } else {
        content = <RecipeList recipes={recipes} />;
    }
    return (
        <div className="container">
            <Header />
            <InputBox
                fetchRecipes={fetchRecipes}
                searchRecipes={searchRecipes}
                setSearchRecipes={setSearchRecipes}
                handleSearchClear={handleSearchClear}
            />
            <ImageCarousel />
            {content}
        </div>
    );
}
export default Page;








