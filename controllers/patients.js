var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require ('multer');
var fs = require ('fs');
var path = require ('path');


var db = require.main.require ('./models/db_controller');


router.get('*', function(req, res, next){
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});


router.get('/',function(req,res){
    db.getallappointment(function(err,result){
        console.log(result);
        res.render('patients.ejs',{list :result});
    })
    
});


  

module.exports = router;