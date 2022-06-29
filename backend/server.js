//npm i -D nodemon = nodemon is a development server that watches for changes in the code and automatically restarts the server 
//npm start nodemon
//nodemon server.js
const express = require('express');
const app = express();

const dotenv = require('dotenv').config();//configure dotenv to load the .env file
const port = process.env.PORT || 3000;
app.use(express.json(), express.urlencoded({ extended: true })); //configure express to use json and urlencoded for postman to check the data is null or not from the x-www.form-urlencoded
// key value pair
// key: value ie.  name : jaimit

//we use this "./"when we want to go in some folder 
const {errorHandler} = require('./middleware/errorMiddleware'); 
app.use(errorHandler);//this will override the default error handler

//to use routes we use "use "function
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, (req, res) => {
    console.log(`server started on port http://localhost:${port}`);
}); 