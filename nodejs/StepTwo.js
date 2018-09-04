const fs = require('fs');
const input = require("./productsMasterList.json");
const data = input.data;

var maleList=["Batboy","Cool_Boy","Double","Intense","Magic_Ring","Power_Ring","Remote_Hunter","Super_Ring","Vertical_Attack"];
var femaleList=["Cute_Bullet","Double","Evva_K_Balls","G_Finger","Glittering_Bullet","Love_Bullet","Power_Finger","Remote_Cherry","Remote_Hunter","Remote_VBKB"];


var newJson={};




for (var item in data){
	var productName=data[item].productName;
	var type = data[item].type;

	if(type=='cover'){
	var colorArray=[];
	if(!newJson[productName]){

		newJson[productName]={
			colorArray:[]
		}
	}else{

		colorArray = newJson[productName].colorArray;
	}
	var json2={};
	json2[data[item].colorCode]="something";
	//colorArray.push(data[item].colorCode);
	colorArray.push(json2);
	newJson[productName].colorArray = colorArray;

	if(maleList[productName]){newJson[productName].male=true}else{newJson[productName].male=false}
	if(femaleList[productName]){newJson[productName].female=true}else{newJson[productName].female=false}


	console.log(newJson);

/*
	//only add if color code is not duplicated
	if(colorArray.indexOf(data[item].colorCode) !=-1)
	{
	colorArray.push(data[item].colorCode);
	newJson[productName].colorArray = colorArray;
	}
 */ 
	}

}

	var json=JSON.stringify(newJson,null,'\t');

	var js = require('fs');

	fs.writeFile('./stepTwoData.json', json, 'utf8', function (err) {
  	if (err) {
    console.log('Some error occured - file either not saved or corrupted file saved.');
  	} else{
    console.log('It\'s saved!');
  	}
	});

 

