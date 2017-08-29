var fs =require('fs');

var obj={
	table:[]
};

fs.readFile('samplejson.json' ,function readFileCallback(err,data){
	if(err){
		console.log(err);
	}else{

	obj = JSON.parse(data);
	console.log("hello11111");
	for(i-0;i<5;i++){
		obj.table.push({id:i,square:i*i});
	}
	var json=JSON.stringify(obj);
	fs.writeFile('samplejson.json',json);
	console.log("hello");
}});