var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );

router.get('/',function(req,res,next){    
    res.render('Starter',{title:"DreamScape"});    
});

module.exports = router;