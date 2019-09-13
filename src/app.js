//declarations
//const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routes = require("./routes/routes");
require('./model/db');
//middwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('port',process.env.PORT || 3000);
app.set('json spaces', 2); 

//routes
app.use(routes);
//app.set('/view',path.join(__dirname,'view'));
//app.set('view engine','ejs');



//server
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
});