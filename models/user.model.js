const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
unique:true,
trim:true,
minlength:3
    },
    password:{type:String,required:true},
    active :{type:Boolean,required:true},
lastlogin:{type:Date,required:true},
drinklimit:{type:Date},
FavouriteBrand:{type:String}

},
{
timestamps:true,
});

const User = mongoose.model('User',userSchema);
module.exports = User;