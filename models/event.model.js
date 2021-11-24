const mongoose = require('mongoose');
const { DECIMAL } = require('sequelize/types');

const Schema = mongoose.Schema;


const eventSchema = new Schema(
{
    eventname:{type:String,required:true},
    username:{type:String,required:true},
    active:{type:Boolean},
    lat:{type:DECIMAL},
    lon:{type:DECIMAL},
},
{
timestamps:true,
}
);

const Event = mongoose.model('Event',eventSchema);
module.exports = Event;