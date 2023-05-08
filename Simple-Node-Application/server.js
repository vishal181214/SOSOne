const express = require('express');
const cors = require('cors');
const app = express();

const port = 5400;
app.use(cors());
let count = 0;

const middleWare = (req,res,next)=>{
    console.log("At MiddleWare!")
    // res.send({message:`Verified by Middleware!`});
    next();
}
app.get('/',middleWare,(req,res)=>{
    count++;
    console.log(`Server is Running ${count}`);
    res.status(200).send({message:"Server is Running & Verified by Middleware"});
})

app.listen(port,()=>{
    console.log("Running on port");
})