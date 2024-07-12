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

<<<<<<< HEAD
export default Page;
=======
export default Page;
>>>>>>> 43dd5bfe11a75d86a03ff1f6a05976340d6aa2ef
