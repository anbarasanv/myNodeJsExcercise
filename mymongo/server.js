const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//express object creation
var app = express();

//URL encoder
app.use(bodyParser.urlencoded({
    extended : false,
    size : '50mb'

}));

//Anything(body, params, query) will be parsed as Json object
app.use(bodyParser.json({
    size : '50mb'

}));

//Global schema patch
app.schema = {};

//set port
app.set('port', process.env.PORT || 8080);

//configuration requirement
app.config = require('./config/config.js');
app.crud = require('./crud/crud');

//mongoose Schema connection establish
require('./onServerStart/mongooseConnections')(app,mongoose);

//Roter rquirement
require('./route.js')(app);

//Schema import
require('./model.js')(app,mongoose);

//server listner request

const listner = app.listen(app.get('port'), () => {
    console.log('Express server listening on port '+ app.get('port'))
})
