"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DummyData from './recipeData';
import Header from './header';
import ImageCarousel from './header_slider';
import MainContainer from './main_container';
const FoodList = () => {
  return (
    <div className="container">
      <Header />
      <div className="row flex-row flex-nowrap overflow-auto">
        {DummyData.map((item) => (
          <div className="col-auto food-item text-center" key={item.id}>
            <div className='top-images image-container'>
              <img src={item.image} alt={item.name} className="image img-fluid rounded-circle card-img-top hover-image" />
            </div>
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
      <ImageCarousel />
      <MainContainer />
    </div>
  );
};
export default FoodList;
