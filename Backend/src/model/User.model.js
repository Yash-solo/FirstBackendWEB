import mongoose from "mongoose";

const ClientSchema  = new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        lowercase: true,
        required: [true,"Please Enter your email currectly"],
        trim:true,
        match: [ /^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Please provide a valid email address']
    },
    mobileNo:{
        type: Number,
        length:10,
        required: false
    },
    Message:{
        type: String,
        minlength: 20,
        required: true,
    }
})

export const Client = mongoose.model("Client",ClientSchema);