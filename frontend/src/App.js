import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DishList from './components/DishList'; 
import './App.css';

const App = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch dishes from the backend
    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/dishes');
        setDishes(response.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div className="App">
      <h1>Dish Dashboard</h1>
      <DishList dishes={dishes} setDishes={setDishes} />
    </div>
  );
};

export default App;
