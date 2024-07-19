import React, { useState} from 'react';

function MainContainer() {
    const [categories, setCategories] = useState([]);
    function fetchRecipeData() {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setCategories(data.categories.slice(0, 12));
            })
            .catch(function (error) {
                console.error('Error fetching the data:', error);
            });
    }
    fetchRecipeData();

    return (
        <div>
            <div className="row home_imag">
                {categories.map((category) => {
                    const description = category.strCategoryDescription;
                    const truncatedDescription =
                        description.split(" ").slice(0, 10).join(" ") + (description.split(" ").length > 20 ? "..." : "");

                    return (
                        <div className="col-md-4 col-lg-4 mb-4 card_container" key={category.idCategory}>
                            <div className="card h-100">
                                <div className="image-container">
                                    <img src={category.strCategoryThumb} alt={category.strCategory} className="card-img-top hover-image" />
                                </div>
                                <div className="body text-center">
                                    <h3 className="title"><b>{category.strCategory}</b></h3>
                                    <p>{truncatedDescription}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MainContainer;