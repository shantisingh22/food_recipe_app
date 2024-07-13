import React from 'react';
import "./style.css";

function Cart() {
  return (
    <div>
      <h1> Cart</h1>
    </div>
  );
}

export default Cart;







// "use client";
// import React, { useEffect, useState } from "react";

// function SearchBar() {
//   const [recipes, setRecipes] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchRecipes, setSearchRecipes] = useState("");

//   const fetchRecipes = () => {
//     fetch(`https://api.edamam.com/search?q=${searchRecipes}&app_id=f0e24019&app_key=b848797de300f8652711b1d7d215ee25&from=0&to=100`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.hits && data.hits.length > 0) {
//           setRecipes(data.hits);
//         } else {
//           setError("No recipes found.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching recipes:", error);
//         setError("Error fetching recipes.");
//       });
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const handleSearchClear = () => {
//     setSearchRecipes("");
//   };

//   let content;
//   if (error) {
//     content = <p>Error: {error}</p>;
//   } else if (recipes.length === 0) {
//     content = <p>Loading recipes...</p>;
//   } else {
//     content = (
//       <ul>
//         {recipes.map((recipeItem, index) => (
//           <li key={index}>
//             <h2>{recipeItem.recipe.label}</h2>
//             <img src={recipeItem.recipe.image} alt={recipeItem.recipe.label} width="100" />
//             <p>Source: {recipeItem.recipe.source}</p>
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search for recipes..."
//             className="input_recipe"
//             value={searchRecipes}
//             onChange={(e) => setSearchRecipes(e.target.value)}
//           />
//           {searchRecipes && (
//             <button className="clear-button" onClick={handleSearchClear}>
//               &times;
//             </button>
//           )}
//           <button className="search_recipe" onClick={fetchRecipes}>
//             Search
//           </button>
//         </div>
//       </div>
//       <div className="content">
//         <h1>Recipes</h1>
//         {content}
//       </div>
//     </div>
//   );
// }

// export default SearchBar;
