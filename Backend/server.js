const express =  require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))

app.post("/giveData",(req,res)=>{
    console.log(req.body);
    res.status(200).json({ 
        success: true, 
        message: "Your query has submitted successfully" 
    });
})

const Reviews  = [
    {
        "id":0,
        "Name":"Horikita Hanabe",
        "Stars":5.0,
        "House":"4room's House",
        "message":"Seekhouse's services are incredibly great they often give us gift after using their provided homes which I really likes. "
    },
    {
        "id":1,
        "Name":"Harsh Yadav",
        "Stars":4.5,
        "House":"3room's House",
        "message":"Seekhouse's services are awesome I spended 4 years in their provided house and realise this is one of my best assets at that time."
    },
    {
        "id":2,
        "Name":"Lakshaya Chopra",
        "Stars":4.0,
        "House":"1 room's House",
        "message":"I spended 1 week in that room and found that that is one of my good choices I ever maked."
    },
    {
        "id":3,
        "Name":"Yashraj",
        "Stars":5.0,
        "House":"5 room's House",
        "message":"I spend a whole year in their services and haven't found that kind of Services in any another house. "
    },
    {
        "id":4,
        "Name":"Uma",
        "Stars":4.5,
        "House":"1 room's house",
        "message":"I spend one year in their services the most likeable services they provide."
    }
]

app.get('/ReviewData',(req,res)=>{
    res.send(Reviews);
})


const UserData = [
    {
        id:1,
        House:"4room's house",
        Rent: 41000
    },
    {
        id:2,
        House: "10 room's house",
        Rent: 42000
    },
    {
        id:3,
        House: "1 room's bangala",
        Rent:50000
    }
]


app.get('/Udata',(req,res)=>{
    res.send(UserData);
})

app.listen(3000,(req,res)=>{
    console.log("Server is now LIVE");
})