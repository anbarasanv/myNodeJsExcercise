exports.createUsers = (req,res) => {
    let schema = req.app.schema.users;
    let dataToBeSaved = {};
    dataToBeSaved.UserName = req.body.UserName;
    dataToBeSaved.FirstName = req.body.FirstName;
    dataToBeSaved.LastName = req.body.LastName;
    dataToBeSaved.Email = req.body.Email;
    dataToBeSaved.Mobile = req.body.Mobile;
    dataToBeSaved.DateCreated = req.body.DateCreated;
    req.app.crud.create(schema, dataToBeSaved, (err, userDoc) => {
        if(err) {
            let response = {};
			response.res = false;
			response.result = err;
			response.message = "Failed";
            res.json(response);
        } else {
            let doc = {}, address = [], resCount = req.body.Address.length;
            doc.user = userDoc;
            let addressSchema = req.app.schema.addresses;
            let saveAddress = {};
            saveAddress.userId = doc._id;
            for(let i = 0; i < req.body.Address.length; i++) {
                if (req.body.Address[i].type == "Home") {
                    saveAddress.type = req.body.Address[i].type;
                    saveAddress.AddressLine1 = req.body.Address[i].AddressLine1;
                    saveAddress.AddressLine2 = req.body.Address[i].AddressLine2;
                    saveAddress.City = req.body.Address[i].City;
                    saveAddress.LandMark = req.body.Address[i].LandMark;
                    saveAddress.State = req.body.Address[i].State;
                    saveAddress.Pincode = req.body.Address[i].typPincodee;
                } else if (req.body.Address[i].type == "Office") {
                    saveAddress.type = req.body.Address[i].type;
                    saveAddress.AddressLine1 = req.body.Address[i].AddressLine1;
                    saveAddress.AddressLine2 = req.body.Address[i].AddressLine2;
                    saveAddress.City = req.body.Address[i].City;
                    saveAddress.LandMark = req.body.Address[i].LandMark;
                    saveAddress.State = req.body.Address[i].State;
                    saveAddress.Pincode = req.body.Address[i].typPincodee;
                } else {
                    saveAddress.type = req.body.Address[i].type;
                    saveAddress.AddressLine1 = req.body.Address[i].AddressLine1;
                    saveAddress.AddressLine2 = req.body.Address[i].AddressLine2;
                    saveAddress.City = req.body.Address[i].City;
                    saveAddress.LandMark = req.body.Address[i].LandMark;
                    saveAddress.State = req.body.Address[i].State;
                    saveAddress.Pincode = req.body.Address[i].typPincodee;
                }
                req.app.crud.create(addressSchema, saveAddress, (err, addressdetails) => {
                    if (err) {
                        let response = {};
                        response.res = false;
                        response.result = err;
                        response.message = "Failed";
                        res.json(response);
                    } else {
                        address.push(addressdetails);
                        if(resCount == (i + 1)) {
                            doc.address = address;
                            console.log("Doc : ",doc);
                            let response = {};
                            response.res = true;
                            response.result = doc;
                            response.message = "Successfully saved";
                            res.json(response);
                        }
                    }
                });
            }
        }
    });
};

exports.getSingleUser = (req, res) => {
    let collection = req.app.schema.users;
    let query = {
        _id : req.params.userId
    };
    let selection = {};
    req.app.crud.getOneDoc(query, collection, selection, (err, userDoc) => {
        if (err) {
            let response = {};
            response.res = false;
            response.result = err;
            response.message = "Failed";
            res.json(response);
        } else {
            let addressCollection = req.app.schema.addresses;
            let query = {
                userId : req.params.userId
            };
            let selection = {};
            req.app.crud.getAll(query, addressCollection, selection, (err, addressDoc) => {
                if (err) {
                    let response = {};
                    response.res = false;
                    response.result = err;
                    response.message = "Failed";
                    res.json(response);
                } else {
                    let doc = {};
                    doc.user = userDoc;
                    doc.address = addressDoc;
                    let response = {};
                    response.res = true;
                    response.result = doc;
                    response.message = "Successfully found";
                    res.json(response)
                }
            });
        }
    });
};