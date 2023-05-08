import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { json } from 'express';
import './conn.js'
import userInfo from './authModel.js';
const app = express();
app.use(cors());
app.use(express.json());
const key = "secured text salt"
app.get('/',(req,res)=>{
    console.log("Server is Running");
})

app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password)
    {
        console.log(req.body);
        const user = await userInfo.findOne({email: req.body.email});
        const result = bcrypt.compareSync(user.password,req.body.password);
        if(result)
        {
            res.status(200).send({message:`Welcome Mr.${user.name}`});
        }else{
            res.send({message:"Invalid email or password"});
        }
    }else{
        res.send({message:'You Missed Something!'});
    }
})

app.post('/register',async(req,res)=>{
    console.log(req.body);
    const result = await userInfo.findOne({email:req.body.email});
    if(result)
    {
        res.send({message:"Email Already Exist!"})
    }else{
        const user = new userInfo({
            name:req.body.name,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,10)
        })
        const data = await user.save();
        if(data)
        res.send({message:"User registered Successfully!"});
        else
        res.send({message:"Not Registered!"});
    }
})

app.listen(3200,()=>{
    console.log("on port 3200");
})