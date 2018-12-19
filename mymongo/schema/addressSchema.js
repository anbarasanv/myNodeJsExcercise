module.exports = function(app,mongoose){
    let addressSchema = mongoose.Schema({
        "userId" : {type : mongoose.Schema.Types.ObjectId, ref: 'users'}, 
        "type" : {type: String},
       "AddressLine1"  : {type: String},
       "AddressLine2"   : {type: String},
       "City"  : {type: String},
       "LandMark"  : {type: String},
       "State"  : {type: String},
       "Pincode" : {type: Number}
       
    });

    let addresses = mongoose.model('addresses',addressSchema);
    app.schema.addresses = addresses;

};