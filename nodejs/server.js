var bodyParser = require('body-parser');
var express = require('express');
const uuidv4 = require('uuid/v4');
var loki = require('lokijs');
var nodemailer = require('nodemailer');
var cors = require('cors')

var db = new loki('example.db',{
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});


var customerOrder;
var order;
var users;
var transactionHistory;
var comments;


var mailTransport = nodemailer.createTransport({
	host:'mail.mlcreationco.com',
	secureConnection:false,
	rejectUnauthorized:false,


	secure: false, //disable SSL    
	requireTLS: true, //Force TLS
    tls: {
        rejectUnauthorized: false
    },

	port:925,
	auth:{
		user:'michael@mlcreationco.com',
		pass:'20180816'
	}
});




function databaseInitialize(){

	if(!db.getCollection("comments")){
		comments = db.addCollection("comments");
		console.log("comments db created");
	}else{
		comments = db.getCollection("comments");
		console.log("comment db loaded");
	}

	if(!db.getCollection("order")){
		order = db.addCollection("order");
		console.log("order db created");
	}else{
		order = db.getCollection("order");
		console.log("order loaded");
	}

	if(!db.getCollection("user")){
		users = db.addCollection("user");
		console.log("user db created");
	}else{
		users = db.getCollection("user");
		console.log("user loaded");
	}

  if(!db.getCollection("transactions")){
  	transactionHistory = db.addCollection("transactions");
  		console.log("transaction db created");
  }else{
  		transactionHistory = db.getCollection("transactions");
  		console.log("transaction loaded");
  }


  if(!db.getCollection("customerOrder")){
  	customerOrder = db.addCollection("customerOrder");
  		console.log("customerOrder db created");
  }else{
  		customerOrder = db.getCollection("customerOrder");
  		console.log("customerOrder loaded");
  }

}




var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var stripe = require("stripe")("sk_test_hxtTsvBObFWw4yWvEEummLZw");


function sendEmail(to,subject,message){
	mailTransport.sendMail({
		from:'ML CREATION <michael@mlcreationco.com>',
		to:to,
		subject:subject,
		html:message
	},function(err){console.log(err)});

}

function sendEmailActivation(email,code){
	console.log("Activation email send to "+email);
	var link="http://localhost:3000/activation/"+email+"/"+code;
	console.log(link); 

	var htmlMessage="<html><body><h2>Thanks for your registration on MLCreation, please click below link to activate your account</h2><h3><a href="+link+"/>Activate my account now</a></h3></body></html>";


	sendEmail(email,"Activate your account",htmlMessage);
}

function sendPassword(email,password){
	var message = "This is your password :"+password;
	sendEmail(email,"Your MLcreation password",message);
}
function sendContactUsEmail(email,name,text){
	sendEmail(email,"Message from customer :"+name,text);
}


function getToday(){
	var d = new Date();
	var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
	return datestring;
}

function getNextOrderNumber(){
	var id = order.maxId+100001;
	id = "ML"+id+"-R";
	return id;
}

function getNextCustomerOrderNumber(){
	var id = customerOrder.maxId+100001;
	id = "ML"+id;
	return id;
}




function add2Transactions(email,uuid,totalCost){
  /*
  email:email,transactions:[uuid,uuid....]
  */
  var json;
  var date=getToday();
  var record = transactionHistory.findOne({email:email});
  if(record){
    //json=record.transactions;
    var existingUuid = record.transactions;
	console.log(existingUuid);
	var json={uuid:uuid,totalCost:totalCost,date:date}
    existingUuid.push(json);
    console.log(existingUuid);
    record.transactions=existingUuid;
    transactionHistory.update(record);

  }else{
	
    json={email:email,transactions:[{uuid:uuid,totalCost:totalCost,date:date}]};
	transactionHistory.insert(json);
	console.log("new transaction added");
	console.log(json);
  }
};



function getAllTransactions(email){
  console.log("getTransactions "+email);
  var uuidArray = transactionHistory.findOne({email:email});
  var record="";
  if(uuidArray){
    console.log("transaction found");
    console.log(uuidArray);
    //loop the uuid array and get order list
	 var resultArray=[];
	 record=uuidArray.transactions;
/*	 
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
*/
  var result={};

  if(!uuidArray){
    result= {state:404}
  }else{
    if(!record || record==""){
      result= {
				state:204,
				error:"No Transaction History"
			}
    }else{
      result = {
        state:200,
        data:uuidArray
      }
    }

  }
  return result;
}else{
	//cannot find any email record
	return {
		state:404,
		error: "account not find"
		}
}
};


app.get('/add2Transactions/:email/:uuid',function(req,res){

  var uuid = req.params.uuid;
  var email = req.params.email;
  add2Transactions(email,uuid);
  res.send('ok');
});

app.get('/getAllTransactions/:email',function(req,res){
  var email =req.params.email;
  console.log("getTransactions "+email);
  var result = getAllTransactions(email);
  res.send(result);
});

app.get('/getTransaction/:type/:uuid',function(req,res){
	var type = req.params.type
	var uuid = req.params.uuid
	var record ={}
	if(type=='retailer'){
		record = order.findOne({uuid:uuid});
		}else{
		record = customerOrder.findOne({uuid:uuid});
		}
	console.log(record);	
 	if(record){
		res.status(200).json(record)

	}else{
		res.status(404).send("not found");
	}	

});

app.get('/getNextOrderNo',function(req,res){
	var id = getNextOrderNumber();
	res.send({
		state:200,
		id:id
	});
});

app.post('/contactus',function(req,res){
	console.log("/contactus");
	var data = req.body;
	var email = data.email;
	var name = data.name;
	var text = data.text;
	sendContactUsEmail(email,name,text);
	res.send({state:200});
});

app.post('/createCustomOrder',function(req,res){
	console.log("/createCustomOrder");
	var _data = req.body;
	var finalCost = _data.finalCost;
	var orderList = _data.data;
	var email = _data.email;
	console.log("received orderList");
	console.log(orderList);
	var nextID = getNextCustomerOrderNumber();
	var uuid = uuidv4();
	console.log("Next ID:"+nextID);

	var json = {
		uuid:uuid,
		orderNo:nextID,
		orderList:orderList,
		finalCost:finalCost,
		pay:false,
	};

	console.log("insert order to db");
  	console.log(json);
	customerOrder.insert(json);
	res.send(
		{
			state:200,
			uuid:uuid,
			orderNo:nextID
		}
		);

}); 


app.post('/createOrder',function(req,res){
	//var orderList=req.params.orderList;
  	var _data = req.body;
	var orderList=_data.data;
	var finalCost = _data.finalCost;

  	var email = _data.email;
	var uuid = uuidv4();
	console.log("received orderList...");
	console.log(orderList);
	var nextID = getNextOrderNumber();
 	console.log("Next ID:"+nextID);

	var json = {
		uuid:uuid,
		orderNo:nextID,
		orderList:orderList,
		finalCost:finalCost,
		pay:false,
	};

	console.log("insert order to db");
  	console.log(json);
	order.insert(json);
	res.send(
		{
			state:200,
			uuid:uuid,
			orderNo:nextID
		}
		);
});






app.get('/checkOrder/:uuid',function(req,res){
	var uuid = req.params.uuid;
    console.log(uuid);
	var result = order.findOne({uuid:uuid});
    console.log(result);
	

		if(result){
			res.send(
				{
				state:200,
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


app.get('/retrievePassword/:email',function(req,res){
	console.log('retrievePassword');
	var email = req.params.email;
	var record = users.findOne({email:email});
	var password = "";
	var result={};
  if(record){
		console.log("email record found ");
		console.log(record);
		password = record.data.password;
		console.log('resending password to user :'+password);
		result={
			state:200
		}
	}else{
		console.log("email not find");
		result={
			state:404
		}
	}
	res.send(result);

});

app.get('/activation/:email/:code',function(req,res){
	var code = req.params.code;
	var email = req.params.email;
	console.log(code+email);
	//var retailerData = users.findOne({email:email});
	var retailerData = users.findOne({email:email});
	if(!retailerData){
			//res.send({state:404,result:false});
			console.log("cannot find email");
			res.status(404).send('We are not able to find your account');
		}else{
 		if(retailerData.activationCode!=code){
			 //res.send({state:200,result:false,error:'password'});
			res.status(404).send("Your activation code is wrong");
			}else{
			//activate account
			retailerData.activated=true;
			users.update(retailerData);
			//res.send({state:200,result:true,retailerData:retailerData});
			res.status(200).json(retailerData);	
		}
		}





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


	if(!retailerData){
		//res.status(404).send("Email record not found");
		console.log("cannot find record");
		res.status(404).send('Email record not found');
	}else{
		var activated = retailerData.activated;
		retailerData=retailerData.data;
 		if(retailerData.password.value!=password){
		res.status(404).send('Password is wrong');	 
			//res.send({state:200,result:false,error:'password'});
		}else if(!activated){
		res.status(404).send('Please activate your account first');	 

			//res.send({state:200,result:false,error:'inactive'});
		}else{
					console.log(retailerData);
		res.status(200).json(retailerData);	 

		//res.send({state:200,result:true,retailerData:retailerData});
		}

	}


});

app.get('/getAllComments/',function(req,res){
	var _record = comments.find({});
	var _result={};
	if(_record){
		console.log("comment record found for all comment");
		console.log(_record);

		_record.map((item,i)=>{
		//remove all comments content to reduce the size
 		_result[item.productID]={
			 totalComments:item.totalComments,
			 avgRating:item.avgRating
		 } 
	});

		res.status(200).json(_result);
	}else{
		console.log("comment record not find");
		res.status(404).send("Not comment yet");		
	}
}
);

app.get('/getComments/:productID',function(req,res){
	var _productID = req.params.productID;
	var _record = comments.findOne({productID:_productID});
	if(_record){
		console.log("comment record found");
		console.log(_record);
		var _commentJson = _record.comments;
		console.log(_commentJson);
		res.status(200).json(_commentJson);

	}else{
		console.log("comment record not find");
		res.status(404).send("noComment");

	}


});


function calculateAvgRating(commentsJson){
	var _avgRating=0;
	var _json = commentsJson;
	/*
		uuid:{
		comment:_comment,
		rating:_rating,
		time:'time'
		},
		uuid:{...}
	*/
	var totalRating=0;
	var totalComments=0;
	
	for(var item in _json){
		totalRating=totalRating+_json[item].rating;
		totalComments++;
	}
	_avgRating = totalComments%totalRating;
	console.log(_avgRating);
	return _avgRating;
};

app.post('/leaveComment',function(req,res){
	/*
	{
		productID:productID,
		comments:{
			uuid:{commend:xxxxx,time:timnestamp }
		}
	}
	*/
	//var _comment = req.body.comment;
	var data=req.body;
	/*
	var _comment = req.params.comment;
	var _productID = req.params.productID;
	var _rating = req.params.rating;
	var _color =req.params.color;
	*/
	var _comment = data.comment;
	var _productID = data.productID;
	var _rating = data.rating;
	var _color =data.color;


	var _uuid = uuidv4();
	var shouldInsert=false;
	//find any existing record
	var _record=comments.findOne({productID:_productID});
	if(!_record){
		shouldInsert = true;
		_record={
			productID:_productID,
			totalComments:0,
			avgRating:0,
			comments:{}
		};
	}
	_record.totalComments = _record.totalComments+1;
	
	var _comments = _record.comments;
	_comments[_uuid] = {
		comment:_comment,
		color:_color,
		rating:_rating,
		time:new Date()
	};

_record.comments=_comments;
var _avgRating = calculateAvgRating(_comments);
_record.avgRating = _avgRating;

console.log(_record);

if(shouldInsert){
	comments.insert(_record);
}else{
	comments.update(_record);
}

res.status(200).send("ok");

});

app.get('/showAll/',function(req,res){
	var retailerData = users.find({});
	res.send(retailerData);
});
app.get('/showAllOrder/',function(req,res){
	var data = customerOrder.find({});
	res.send(data);
});


app.post('/payment',async function(req,res){
	var data = req.body;
	var token = data.token;
	var uuid = data.uuid;
	var type = data.type;
	var info = data.info;
	var today=getToday();
	var email = data.info.email;
 	console.log("executing payment with following data ");
	console.log("token : %j",token);
	console.log("uuid : %j",uuid);
	console.log("info : %j",info);
	console.log("type : %j",type);

	var result={}
	if(type=='retailer'){
	result = order.findOne({uuid:uuid});
	}else{
	result = customerOrder.findOne({uuid:uuid});
	}
	console.log(result);

	var newJson=result;
	result.info=info;
	result.date=today;

	if(type=='retailer'){
		order.update(result);
	}else{
		customerOrder.update(result);
	}

	var finalCost = result.finalCost;
	console.log("paying finalCost "+finalCost);
	finalCost=parseFloat(finalCost);

	const charge = await stripe.charges.create({
		amount: Math.round(finalCost*100),
		currency: 'usd',
		description: result.orderNo,
		source: token,
	  });
  
  
	  console.log(charge);
	  add2Transactions(email,uuid,finalCost);


 	res.send(
 			{
			 state:200,
			 result :'success'
 			}
 			);
});


 


//sendEmailActivation('personal.michael@gmail.com','code');
	//sendEmail('michael@sparrowchain.com','ths is subject','this is a message from ML');


app.listen(3001,function(){
	console.log('server running at 3001 port');
});
