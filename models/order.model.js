const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const orderSchema = new Schema(
{
    eventname:{type:String,required:true},
    username:{type:String,required:true},
    userid:{type:String,required:true},
    eventid:{type:String,required:true},
    active:{type:Boolean},
    addons:[{type:String,required:true}],
    order:[
        {
    stockid:{type:String,required:true},
    quantity:{type:String,required:true},
    orderdescription:{type:String},
        }
    ]
},
{
timestamps:true,
}
);

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;