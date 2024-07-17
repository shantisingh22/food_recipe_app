import React from "react";
import DummyData from './dummy_data';

const Foodlist = () => {
    return (
        <div className="food-list-row">
            {DummyData.map((item) => (
                <div className="food-item" key={item.id}>
                    <div className="image-container">
                        <img src={item.image} alt={item.name} className="food-image" />
                    </div>
                    <h5 className="food-item-title">{item.name}</h5>
                </div>
            ))}
        </div>
    );
}

export default Foodlist;





// import React from "react";
// import DummyData from './recipeData';
// const Foodlist = () => {
//     return (
//         <div className="food-list-row">
//             <DummyData />
//             {DummyData.map((item) => (
//                 <div className="food-item" key={item.id}>
//                     <div className="image-container">
//                         <img src={item.image} alt={item.name} className="food-image" />
//                     </div>
//                     <h5 className="food-item-title">{item.name}</h5>
//                 </div>
//             ))}
//         </div>
//     );
// }
// export default Foodlist;
