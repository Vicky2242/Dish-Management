// frontend/src/components/DishItem.js
import React from 'react';
import axios from 'axios';

const DishItem = ({ dish, setDishes }) => {
  const togglePublishStatus = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/dishes/${dish.dishId}/publish`
      );
      setDishes((prevDishes) =>
        prevDishes.map((d) =>
          d.dishId === response.data.dishId ? response.data : d
        )
      );
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };

  return (
    <div className="dish-item">
      <img src={dish.imageUrl} alt={dish.dishName} />
      <h2>{dish.dishName}</h2>
      <p>{dish.isPublished ? 'Published' : 'Unpublished'}</p>
      <button onClick={togglePublishStatus}>
        {dish.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default DishItem;
