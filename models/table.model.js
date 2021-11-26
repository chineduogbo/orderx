const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const tableSchema = new Schema({
    eventname:{type:String,required:true},
    username:{type:String,required:true},
    userid:{type:String,required:true},
    eventid:{type:String,required:true},
    active:{type:Boolean},
    tableno:{type:String,required:true},
    lat:{type:DECIMAL},
    lon:{type:DECIMAL}
},
{
timestamps:true,
});

const Table = mongoose.model('Table',tableSchema);
module.exports = Table;