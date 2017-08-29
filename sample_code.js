var fs = require('fs');

var obj = {
   table: []
};

fs.exists('myjsonfile.json', function(exists){
    if(exists){
        console.log("yes file exists");
        fs.readFile('myjsonfile.json', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); 
        for (i=0; i<5 ; i++){
        obj.table.push({id: i, square:i*i});
        }
        var json = JSON.stringify(obj); 
        fs.writeFile('myjsonfile.json', json); 
        }});
    } else {
        console.log("file not exists")
        for (i=0; i<5 ; i++){
        obj.table.push({id: i, square:i*i});
        }
        var json = JSON.stringify(obj);
        fs.writeFile('myjsonfile.json', json);
        }
    });