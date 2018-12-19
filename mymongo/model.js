module.exports = function(app,mongoose){

    //Schemas
    require('./schema/userSchema')(app,mongoose);
    require('./schema/addressSchema')(app,mongoose);

};