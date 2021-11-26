const mongoose = require('mongoose');
const { INTEGER, DECIMAL } = require('sequelize/types');


const Schema = mongoose.Schema;


const stockSchema = new Schema(
{
    eventname:{type:String,required:true},
    username:{type:String,required:true},
    userid:{type:String,required:true},
    eventid:{type:String,required:true},
    active:{type:Boolean},
    name:{type:String,required:true},
    price:{type:DECIMAL,required:true},
    quantity:{type:INTEGER,required:true},
    stockcategory:{type:String,required:true},
    stockcategoryId:{type:String,required:true}
},
{
timestamps:true,
}
);

const Stock = mongoose.model('Stock',stockSchema);
module.exports = Stock;