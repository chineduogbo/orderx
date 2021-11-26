const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const waiterSchema = new Schema(
{
    eventname:{type:String,required:true},
    username:{type:String,required:true},
    userid:{type:String,required:true},
    eventid:{type:String,required:true},
    active:{type:Boolean},
    table:[{type:String,required:true}]
},
{
timestamps:true,
}
);

const Waiter = mongoose.model('Waiter',waiterSchema);
module.exports = Waiter;