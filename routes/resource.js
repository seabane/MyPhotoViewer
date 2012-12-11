
/*
 *Get Img by processed.
 */
 
var resoucePath = '/Users/huangrui/dev/resource/';

exports.imgs = function(req, res){
	console.log('into img');
	console.log(req.params.imgPath);
	var imgPath = req.params.imgPath;
	var Canvas = require('canvas')
 	 , Image = Canvas.Image
 	 , fs = require('fs');
	
	var img = new Image;
  	
  	img.onload = function(){
  		var width = 720
  		 ,height = 480
  		 ,canvas = new Canvas(width , height)
  		 ,ctx = canvas.getContext('2d');
  		 
  		ctx.drawImage(img,0,0,width,height);
  		
  		canvas.toBuffer(function(err,buf){
  			res.send(buf);
  		});
  	};
  	img.src = resoucePath + imgPath.replace(">","/").replace(">","/");
};

exports.downloadImg = function(req, res){
	console.log('download img');
	console.log(req.params.imgPath);
	var imgPath = req.params.imgPath;
  	res.download( resoucePath + imgPath.replace(">","/").replace(">","/").replace("..",""));
};