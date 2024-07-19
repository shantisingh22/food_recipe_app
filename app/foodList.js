import React from "react";
import DummyData from './dummy_data';

const Foodlist = () => {
    return (
        <div className="food-list-row">
            {DummyData.map((item1) => (
                <div className="food-item" key={item1.id}>
                    <div className="image-container_1">
                        <img src={item1.image} alt={item1.name} className="food-image" />
                    </div>
                    <h5 className="food-item-title">{item1.name}</h5>
                </div>
            ))}
        </div>
    );
}
export default Foodlist;