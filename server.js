const express = require('express');
const app = express();
require('dotenv').config();
console.log(process.env.PORT)
//home route
app.get('/',(req,res)=>{
  res.send("<h1>Express.js is the backbone of web development</h1>");
});

//Prices
app.get('/Prices',(req,res)=>{
  res.send("<H1>The price of this course is 900$</H1>");
});

app.listen(process.env.PORT);

