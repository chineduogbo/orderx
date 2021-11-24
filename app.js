const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');



var swaggerUi = require('swagger-ui-express');

 swaggerDocument = require('./swagger.json');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('mongodb database connection established successfully');
});



app.use('/api-docs', swaggerUi.serve,
swaggerUi.setup(swaggerDocument));


app.listen(port,()=>{
console.log(`server is running on port: ${port}`);
});