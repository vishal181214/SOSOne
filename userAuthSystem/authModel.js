import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String,required: true},
    email:{type:String,required: true},
    password:{type:String,required: true}
})

const userInfo = mongoose.model('userInfo',userSchema);
export default userInfo;