import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/authSystem')
.then(()=>{
    console.log("Connected to DB");
})
.catch((error)=>{
    console.log(error);
})