module.exports = function(app){
    app.post('/api/createUser',require('./src/api/user').createUsers);
};