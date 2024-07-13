
import React from 'react';
import DummyData from './recipeData';
import Header from './header'

const FoodList = () => {
  return (
    <div className="container">
      <Header />
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










