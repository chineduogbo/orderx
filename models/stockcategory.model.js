const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const stockcategorySchema = new Schema(
{
    eventname:{type:String,required:true},
    username:{type:String,required:true},
    userid:{type:String,required:true},
    eventid:{type:String,required:true},
    active:{type:Boolean},
    name:{type:String,required:true}
},
{
timestamps:true,
}
);

const StockCategory = mongoose.model('StockCategory',stockcategorySchema);
module.exports = StockCategory;