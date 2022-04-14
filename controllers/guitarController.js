const req = require('express/lib/request');
const res = require('express/lib/response');
var Guitar = require('../models/guitarSchema');

//List of all guitars
exports.guitar_list = async function(req, res){
    try{
        theGuitars = await Guitar.find();
        res.send(theGuitars);
    }
    catch(err){
        res.status(500);
        res.send(`{"error":${err}}`);
    }
};

//For a specific guitar
exports.guitar_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Guitar detail: ' + req.params.id);
};

//Handle guitar create on POST
exports.guitar_create_post = function(req,res){
    res.send('NOT IMPLEMENTED: Guitar create POST');
};

//Handle guitar delete form on DELETE
exports.guitar_delete = function(req, res){
    res.send('NOT IMPLEMENTED: Guitar delete DELETE ' + req.params.id);
};

//Handle guitar update form on PUT
exports.guitar_update_put = function(req, res){
    res.send('NOT IMPLEMENTED: Guitar update PUT' + req.params.id);
};
