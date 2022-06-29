//npm i -D nodemon = nodemon is a development server that watches for changes in the code and automatically restarts the server 
//npm start nodemon
//nodemon server.js
const express = require('express');
const app = express();

const dotenv = require('dotenv').config();//configure dotenv to load the .env file
const port = process.env.PORT || 3000;

app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, (req, res) => {
    console.log(`server started on port http://localhost:${port}`);
}); 