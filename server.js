var bodyParser = require('body-parser');
var express = require('express');
const uuidv4 = require('uuid/v4');
var productData = require('./src/mlcreation/asset/ProductList.json');
var loki = require('lokijs');
var nodemailer = require('nodemailer');


var cors = require('cors')


var db = new loki('example.db',{
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

var order;
var users;
var transactionHistory;
function databaseInitialize(){

	if(!db.getCollection("order")){
		order = db.addCollection("order");
		console.log("new db created");
	}else{
		order = db.getCollection("order");
		console.log("db loaded");
	}


	if(!db.getCollection("user")){
		users = db.addCollection("user");
		console.log("new db created");
	}else{
		users = db.getCollection("user");
		console.log("db loaded");
	}


  	if(!db.getCollection("transactions")){
  		transactionHistory = db.addCollection("transactions");
  		console.log("new db created");
  	}else{
  		transactionHistory = db.getCollection("transactions");
  		console.log("db loaded");
  	}


}




var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var stripe = require("stripe")("sk_test_hxtTsvBObFWw4yWvEEummLZw");


function sendEmailActivation(email,code){
	var mailTransport = nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:'bitentsio@gmail.com',
			pass:'*#780910'
		}
	});

	var link="http://localhost:3001/"+email+"/"+code;
	var htmlMessage="<h1>Thanks for registration</h1><a href="+link+" />Here</a>";

	mailTransport.sendMail({
		from:'Admin <michael@sparrowchain.com>',
		to:'personal.michael@gmail.com',
		subject:'test',
		html:htmlMessage
	},function(err){console.log(err)});

}


function getNextOrderNumber(){
	var id = order.maxId+100001;
	id = "ML"+id+"-R";
	return id;
}

function checkTotal2(uuid){

	var result = order.findOne({uid:uuid});
	if(!result){return 404}
	var orderList = JSON.parse(result.orderList.data);

	console.log(orderList);
	var total=0;


	for(var item in orderList){
			console.log(orderList[item]);

		total = total + (orderList[item]*productData[orderList[item].name].retailPrice);
	}
	console.log("Total price: "+total);
	return total;


};

function checkTotal(orderList){
  //var orderList=orderList.data;
  var total=0;
  for(var item in orderList){
    total = total + orderList[item].qty * productData[orderList[item].name].retailPrice;
   }
  //console.log("Total price: "+total);
  return total;
}

function add2Transactions(email,uuid){
  /*
  email:email,transactions:[uuid,uuid....]
  */
  var json;
  var record = transactionHistory.findOne({email:email});
  if(record){
    //json=record.transactions;
    var existingUuid = record.uuid;
    console.log(existingUuid);
    existingUuid.push(uuid);
    console.log(existingUuid);
    record.uuid=existingUuid;
    transactionHistory.update(record);

  }else{
    json={email:email,uuid:[uuid]};
    transactionHistory.insert(json);
  }
};


function getTransactions(email){
  console.log("getTransactions "+email);
  var uuidArray = transactionHistory.findOne({email:email});
  var record="";
  if(uuidArray){
    console.log("transaction found");
    console.log(typeof uuidArray.uuid);
    //loop the uuid array and get order list
     var resultArray=[];
    //_uuidArray= uuidArray;
    Object.values(uuidArray.uuid).map(function(obj){
    //uuidArray.map((item,i)=>{
      record = order.findOne({uuid:obj});
      var json={};
      if(record){
        json={
          uuid:record.uuid,
          orderNo:record.orderNo,
          orderList:record.orderList,
        };

        resultArray.push(json);
      }
      console.log("get transaction result"+resultArray);
    });

  var result={};

  if(!uuidArray){
    result= {state:404}
  }else{
    if(!record || record==""){
      result= {state:404}
    }else{
      result = {
        state:200,
        data:resultArray
      }
    }

  }


  return result;
}
};


app.get('/add2Transactions/:email/:uuid',function(req,res){

  var uuid = req.params.uuid;
  var email = req.params.email;
  add2Transactions(email,uuid);
  res.send('ok');
});

app.get('/getTransactions/:email',function(req,res){
  var email =req.params.email;
  console.log("getTransactions "+email);
  var result = getTransactions(email);
  res.send(result);
});


app.get('/getNextOrderNo',function(req,res){
	var id = getNextOrderNumber();
	res.send({
		state:200,
		id:id
	});
});



app.post('/createOrder',function(req,res){
	//var orderList=req.params.orderList;
  var _data = req.body;
	var orderList=_data.data;
  var email = _data.email;
	var uuid = uuidv4();
	console.log("received orderList");
	console.log(orderList);
	var nextID = getNextOrderNumber();
 	console.log("Next ID:"+nextID);
	//save orderList with uuid and return to user

	var json = {
		uuid:uuid,
		orderNo:nextID,
		orderList:orderList,
		pay:false,
    total:checkTotal(orderList)
	};

	console.log("insert order to db");
  console.log(json);
	order.insert(json);
	res.send(
		{
			state:200,
			uuid:uuid
		}
		);

});


app.get('/checkOrder/:uuid',function(req,res){
		var uuid = req.params.uuid;
    console.log(uuid);
		var result = order.findOne({uuid:uuid});
    console.log(result);
		var total = checkTotal(uuid);

		if(result){
			res.send(
				{
				state:200,
				total:total,
				orderNo:result.orderNo,
        orderList:result.orderList
				});
		}else{
			res.send(
				{
				state:404
				});
		}
});

app.get('/checkEmail/:email',function(req,res){
		var email = req.params.email;
		console.log("Checkiung email "+email);
		var result = users.findOne({email:email});
		if(email=='test@gmail.com'){
			result=true;
		}
		if(result){
			res.send({
				state:200,
				result:true
			});
		}else{
			res.send({
				state:200,
				result:false
			});
		}

});

app.post('/register/',function(req,res){
	var data = req.body;
 	var uuid = uuidv4();


	for(var item in data){
		delete data[item].validFormat;
	}
	console.log(data);
	var emailAsKey=data.email.value;

	var json ={
		email:emailAsKey,
		activated:false,
		activationCode:uuid,
		data:data
	};


	users.insert(json);


	sendEmailActivation(emailAsKey,uuid);

	console.log("inserting new retailer account");
	console.log(json);
	res.send({
		state:200,
		result:true
	});
});

app.get('/activation/:email/:code',function(req,res){
	var code = req.params.code;
	var email = req.params.email;
	console.log(code+email);
	//var retailerData = users.findOne({email:email});
	var retailerData = users.findOne({email:email});
	if(!retailerData){
			res.send({state:404,result:false});

	}else{
 		if(retailerData.activationCode!=code){
			res.send({state:200,result:false,error:'password'});
		}else{
			//activate account
			retailerData.activated=true;
			users.update(retailerData);

			res.send({state:200,result:true,retailerData:retailerData});
			}
		}





});


app.post('/test2/',function(req,res){
  var data = req.body;
  console.log("test");
  console.log(data);
  res.send(200);
});

app.post('/login/',function(req,res){
	var data=req.body;
	console.log(data);
	var email=data.email;
	var password=data.password;
	var retailerData={};
	var result;

	var retailerData = users.findOne({email:email});
		console.log(retailerData);

	var activated = retailerData.activated;

	retailerData=retailerData.data;

	if(!retailerData){
			res.send({state:404,result:false});

	}else{
 		if(retailerData.password.value!=password){
			res.send({state:200,result:false,error:'password'});
		}else if(!activated){
			res.send({state:200,result:false,error:'inactive'});
		}else{
					console.log(retailerData);

			res.send({state:200,result:true,retailerData:retailerData});
		}

	}


});

app.post('/payment/',async function(req,res){
	var data=req.body;
	var token = data.token;
	var orderNo = data.orderNo;
  var uuid = data.uuid;
  var email = data.email;
	console.log("token :"+token);
	console.log("Order No :"+orderNo);
  console.log("UUID :"+uuid);
  console.log("email :"+email);


/*
	const charge = await stripe.charges.create({
  	amount: 999,
  	currency: 'usd',
  	description: 'Example charge',
  	source: token,
	});


	console.log(charge);
*/
add2Transactions(email,uuid);

 	res.send(
 			{
 			state:200
 			}
 			);
});


//sendEmailActivation();


app.listen(3001,function(){
	console.log('server running at 3001 port');
});
