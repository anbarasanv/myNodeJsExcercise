module.exports = function(app,mongoose){
    let connect = mongoose.connect(app.config.mongoURI);
    mongoose.connection.on('error', (err) => {
        console.log('Error occured with '+ err);
    });

}