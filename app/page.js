import React from "react";
import DummyData from './recipeData';
import "./globals.css";

const FoodList = () => {
  return (
    <div className="container">
      <h2>What's on your mind?</h2>
      <div className="row flex-row flex-nowrap overflow-auto">
        {DummyData.map((item) => (
          <div className="col-auto food-item text-center" key={item.id}>
            <img src={item.image} alt={item.name} className="image img-fluid rounded-circle" />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;













// import React from 'react';
// import DummyData from './recipeData'; // Ensure this path is correct

// function Page() {
//   return (
//     <div>
//       <h1>Food Recipe</h1>
//       <div>
//         {DummyData.map((recipe) => (
//           <div key={recipe.id}>
//             <h2>{recipe.name}</h2>
//             <div className="recipe-image-div">
//             <img className="recipe-image" src={recipe.image} alt={recipe.name} />
//             </div>
//             <p>{recipe.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Page;
