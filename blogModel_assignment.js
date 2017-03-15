
// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
// declare schema object.
var Schema = mongoose.Schema;

var blogSchema = new Schema({

	title 		: {type:String,default:'',required:true},
	genre        :{type:String},
	subTitle 	: {type:String,default:''},
	blogBody 	: {type:String},
	tags		: [],// name of tags in array
	created		: {type:Date},
	lastModified : {type:Date},
	authorInfo  :  {} ,// information of author in form of obje-ct

	
	

});


module.exports = mongoose.model('Blog',blogSchema);