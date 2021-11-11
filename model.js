const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const userSchema = new Schema({
    id:{
        type :Number,
        autoIncrement: true
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
exports.user=user;
