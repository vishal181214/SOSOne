const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({message:"working"})
})

app.post('/encrypt',(req,res)=>{
    console.log(req.body);
    const pass = bcrypt.hashSync(req.body.password,10);
    res.status(200).send(pass);
})

app.post('/jwttoken',(req,res)=>{
    console.log(req.body);
    const token = jwt.sign(req.body,'encryptedText');
    const result = jwt.verify(req.body.token,'encryptedText')
    if(result)
        res.status(200).send({message:"token is valid"});
    else
        res.status(200).send(error)
})

app.listen(3200,()=>{
    console.log("Server started running!");
})