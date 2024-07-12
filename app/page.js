import React from 'react';
import DummyData from './recipeData'; 
import Header from './header'

function Page() {
  return (
    <div>
      <Header />
      <h1>Food Recipe</h1>
      <div>
        {DummyData.map((recipe) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;