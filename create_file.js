var fs = require("fs");

fs.appendFile('file.txt','hello content',function(err){
if(err) throw err;
console.log("saved");
});