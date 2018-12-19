module.exports = function(app){
    app.post('/api/createUser',require('./src/api/user').createUsers);
    app.get('/api/getSingleUser/:userId', require('./src/api/user').getSingleUser);
};