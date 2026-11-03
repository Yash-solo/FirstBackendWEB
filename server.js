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
app.get('/UserDetails',(req,res)=>{
  const Udetails = [
    {
      id:1,
      Name:"FirstUser",
      Password:"******",
    },
    {
      id:2,
      Name:"SecondUser",
      Password:"****",
    },
    {
      id:3,
      Name:"ThirdUser",
      Password:"*****",
    },
    {
      id:1,
      Name:"FourthUser",
      Password:"***",
    }
  ]
  res.send(Udetails);
})
app.listen(process.env.PORT);

