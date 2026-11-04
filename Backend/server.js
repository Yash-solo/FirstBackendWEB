const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'http://localhost:3000'
}))

app.get('/',(req,res)=>{
    res.send("<h1>Learning backend is so easy just do this rapidly</h1>");
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