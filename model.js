const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String
    },
    username :{
        type :String,
        required: true
    },
    password :{
        type :String,
        required: true
    },
    files:{
        type :Array,
    }
},{timestamps :true});
var user=mongoose.model('user',userSchema);
module.exports=user;
