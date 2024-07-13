import React, { useEffect, useState } from 'react';

function MainContainer() {
    const [categories, setCategories] = useState([]);

    const fun = useEffect(function () {
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
    }, []);

    return (
        <div>
            <h2 className="text-center my-3">Restaurants with online food delivery in Bangalore</h2>
            <div className="row">
                {categories.map((category) => {
                    const description = category.strCategoryDescription;
                    const truncatedDescription =
                        description.split(" ").slice(0, 10).join(" ") + (description.split(" ").length > 20 ? "..." : "");

                    return (
                        <div className="col-md-4 col-lg-4 mb-4" key={category.idCategory}>
                            <div className="card h-100">
                                <img src={category.strCategoryThumb} alt={category.strCategory} className="card-img-top" />
                                <div className="body text-center">
                                    <h5 className="title">{category.strCategory}</h5>
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
