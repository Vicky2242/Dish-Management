// frontend/src/components/DishList.js
import React from 'react';
import DishItem from './DishItem';

const DishList = ({ dishes, setDishes }) => {
  return (
    <div className="dish-list">
      {dishes.length > 0 ? (
        dishes.map((dish) => (
          <DishItem key={dish.dishId} dish={dish} setDishes={setDishes} />
        ))
      ) : (
        <p>No dishes available.</p>
      )}
    </div>
  );
};

export default DishList;
