const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dishRoutes = require('./routes/dishes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/dishes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api/dishes', dishRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
