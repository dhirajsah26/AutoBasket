const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Recipe = require('./models/Recipe');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/autobasket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define CRUD routes for users and recipes (routes/users.js, routes/recipes.js)
const userRoutes = require('./routes/users');
const recipeRoutes = require('./routes/recipes');

// Use routes
app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);

// Define a simple route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to AutoBasket!');
});




app.listen(PORT, () => {
  console.log(`AutoBasket is running on http://localhost:${PORT}`);
});

