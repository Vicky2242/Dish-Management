// backend/populate.js
const mongoose = require('mongoose');
const Dish = require('./models/Dish');

const dishes = [
  {
    "dishName": "Jeera Rice",
    "dishId": "1",
    "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
    "isPublished": true
  },
  {
    "dishName": "Paneer Tikka",
    "dishId": "2",
    "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
    "isPublished": true
  },
  {
    "dishName": "Rabdi",
    "dishId": "3",
    "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
    "isPublished": true
  },
  {
    "dishName": "Chicken Biryani",
    "dishId": "4",
    "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
    "isPublished": true
  },
  {
    "dishName": "Alfredo Pasta",
    "dishId": "5",
    "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
    "isPublished": true
  }
];

const populateDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/dishes', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Dish.deleteMany({});
    await Dish.insertMany(dishes);
    console.log('Database populated');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error populating database:', error);
  }
};

populateDB();