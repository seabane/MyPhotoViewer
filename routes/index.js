
/*
 * GET home page.
 */

exports.index = function(req, res){
  var fs = require('fs');
  var prePath = req.params.prePath;
  if(!!prePath){
    fs.readdir('/Users/huangrui/dev/resource/' + prePath.replace(">","/") ,function(err,files){
      var processedFiles = new Array();
      var processedFilesIndex = 0;
      if(!!files){
        files.forEach(function(file){
          if(file.charAt(0) != '.'){
            processedFiles[processedFilesIndex++] = prePath + ">" +  file;
          }
        });
  	    res.render('index', {'file':processedFiles});
  	  }
  	  else{
  	    res.render('index', {'file':null});
  	  }
    });
  }
  else{
    res.render('index', {'file':null});
  }
};