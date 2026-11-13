import mongoose from 'mongoose';
import 'dotenv/config'

const connectDB = async ()=>{
    try{
        const DB = await mongoose.connect(`${process.env.MONGODB_URI}/HouseSeeker`);
        console.log("Database connected:- HOST:- ",DB.connection.host);
    }catch(err){
        console.log("Data base connection Error:- ",err);
    }

}
export {connectDB}