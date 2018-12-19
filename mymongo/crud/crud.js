exports.create = function(schemaType, body, callBack){
	var newuser = new schemaType(body);
	newuser.save(function(err, result) {
		if (err){
			console.log("Error :",err);
			callBack("Error in saving","");
		} else {
			callBack("",result);
		}
	});		
}

// Function to update document

exports.updateDocument = function (query, toUpdateDoc, collection, options, callback){
	options.new = true;
	collection.findOneAndUpdate(query, toUpdateDoc, options).exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

// Function to get document

exports.getOneDoc = function (query, collection, selection, callback){
	console.log("inside data");
	collection.findOne(query, selection).exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};

// Function to get document

exports.getAll = function (collection, selection, app, callback){
	collection.find({}, selection).exec(function(err, doc){
		if(err){
			callback(err, "");
		} else {
			callback("", doc);
		}
	});
};