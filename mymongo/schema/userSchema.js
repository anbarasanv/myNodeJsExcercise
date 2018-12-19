module.exports = function(app,mongoose){
    let userSchema = mongoose.Schema({
       "UserName" : {type: String},
       "FirstName"  : {type: String},
       "LastName"   : {type: String},
       "Email"  : {type: String},
       "Mobile" : {type: Number},
       "DateCreated" : {type: Date}
    });

    let users = mongoose.model('users',userSchema);
    app.schema.users = users;

};