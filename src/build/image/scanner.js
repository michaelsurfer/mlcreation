const testFolder = './ProductsPictures ';
const fs = require('fs');

const ColorMap={
    Black:{code:"BK"},
    Blue:{code:"BL"},
    Gold:{code:"G"},
    Gray:{code:"GY"},
    Rose:{code:"R"},
    Silver:{code:"S"},
    Green:{code:"GR"},
    Orange:{code:"O"},
    Pink:{code:"PI"},
    Purple:{code:"PP"},
    Red:{code:"RE"},
    White:{code:"W"},
    Shrimp:{code:"SH"},
    Magic:{code:"MG"},
    Deep:{code:"DP"}

}


var text="";

var obj = {
	data:[],
	uniqueProductNameList:{},
	uniqueColorNameList:{}
	}
 


fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    //console.log(file);
    var array = file.split("-");
    var productName = array[0];

    var color = array[array.length-1];
    var colorArray=color.split(".");
    var colorName = colorArray[0];
    console.log(productName);
    console.log(colorName);
    var colorCode = colorName.split("_");

    var temp = "";
    colorCode.map((item)=>{
        var value="";
        if(ColorMap[item]){
            value=ColorMap[item].code;
        }else{
            value=item;
        }
        temp=temp+value;

    })
    console.log("code"+temp);

    var type="unknown";
 
    if(array.length == 3){
    	type=array[array.length-2];
    }
    if(array.length == 2){
    	type='cover'
    }
    if(colorName == 'Top'){
    	type='top'
    }

    obj.data.push(
    	{
    	productID:"",
    	productName:productName,
    	colorCode:temp,
    	colorName:colorName,
    	productImageFile:file,
    	type:type
    	}
    	);
 	
  

    if(!obj.uniqueColorNameList[colorName] && colorName!="Top"){
    	obj.uniqueColorNameList[colorName]={colorCode:temp}
    }

    if(!obj.uniqueProductNameList[productName]){
    	obj.uniqueProductNameList[productName]={shortCode:""}
    }


    //var line = "'name'"+":"+"'"+file+"'";
    //text=text+line+'\n';
  });

  console.log(obj);
 


var json=JSON.stringify(obj,null,'\t');
 
var fs = require('fs');

fs.writeFile('./productsMasterList.json', json, 'utf8', function (err) {
  if (err) {
    console.log('Some error occured - file either not saved or corrupted file saved.');
  } else{
    console.log('It\'s saved!');
  }
});





})
