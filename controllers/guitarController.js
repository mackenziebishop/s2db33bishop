const { update } = require('../models/guitarSchema');
var Guitar = require('../models/guitarSchema');

//List of all Guitars
exports.guitar_list = async function(req, res) {
    try{
        theGuitars = await Guitar.find();
        res.send(theGuitars);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//For a specific Guitar
exports.guitar_detail = async function(req, res){
    console.log("detail" + req.params.id)
    try{
        result = await Guitar.findById(req.params.id)
        res.send(results)
    }
    catch(error){
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
};

//Handle Guitar create on POST
exports.guitar_create_post = async function(req, res){
    console.log(req.body)
    let document = new Guitar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object.
    document.guitar_type = req.body.guitar_type;
    document.size = req.body.size;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`);
    }
};

//Handle Guitar delete form on DELETE
exports.guitar_delete = async function(req, res){
    console.log("delete" + req.params.id)
    try{
        result = await Guitar.findByIdAndDelete(req.params.id)
        console.log("Removed" + result)
        res.send(result)
    }
    catch(err){
        res.status(500)
        res.send(`"error": Error deleteing ${err}`);
    }
};

//Handle Guitar update form on PUT
exports.guitar_update_put = async function(req, res){
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try{
        let toUpdate = await Guitar.findById(req.params.id)
        //Do updates of properties
        if (req.body.guitar_type){
            toUpdate.guitar_type = req.body.guitar_type;
        }
        if (req.body.size){
            toUpdate.size = req.body.size;
        }
        if (req.body.price){
            toUpdate.price = req.body.price;
        }
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
};

//VIEWS
// Handle a show all view
exports.guitar_view_all_Page = async function(req, res) {
    try{
        theGuitars = await Guitar.find();
        res.render('guitars', { title: 'Guitar Search Results', results: theGuitars });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//Handle a show one view with id specified by query
exports.guitar_view_one_Page = async function(req, res){
    console.log("Single view for id " + req.query.id)
    try{
        result = await Guitar.findById(req.query.id)
        res.render('guitardetail', {title: 'Guitar Detail', toShow: result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

//Handle building the view for creating a guitar
//No body, no in path parameter, no query
//Does not need to be async
exports.guitar_create_Page = function(req, res){
    console.log("create view")
    try{
        res.render('guitarcreate', {title: 'Guitar Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

//Handle building the view for updating a guitar
//Query provides the id
exports.guitar_update_Page = async function(req, res){
    console.log("Update view for item " + req.query.id)
    try{
        let result = await Guitar.findById(req.query.id)
        res.render('guitarupdate', {title: 'Guitar Update', toShow: result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
   