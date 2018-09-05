var bodyParser = require('body-parser');
var express = require('express');
const uuidv4 = require('uuid/v4');
var productData = require('../src/mlcreation/asset/ProductList.json');
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
var comments;

var mailTransport = nodemailer.createTransport({
	service:'Gmail',
	auth:{
		user:'bitentsio@gmail.com',
		pass:'*#780910'
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


}




var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var stripe = require("stripe")("sk_test_hxtTsvBObFWw4yWvEEummLZw");


function sendEmail(to,subject,message){
	mailTransport.sendMail({
		from:'Admin <michael@sparrowchain.com>',
		to:to,
		subject:subject,
		html:message
	},function(err){console.log(err)});

}

function sendEmailActivation(email,code){
	var link="http://localhost:3001/activation/"+email+"/"+code;
	var htmlMessage="<h1>Thanks for registration</h1><a href="+link+" />Here</a>";
	sendEmail(email,"Activate your account",htmlMessage);
}

function sendPassword(email,password){
	var message = "This is your password :"+password;
	sendEmail(email,"Your MLcreation password",message);
}
function sendContactUsEmail(email,name,text){
	sendEmail(email,"Message from customer :"+name,text);
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
      result= {
				state:204,
				error:"No Transaction History"
			}
    }else{
      result = {
        state:200,
        data:resultArray
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

app.post('/contactus',function(req,res){
	console.log("/contactus");
	var data = req.body;
	var email = data.email;
	var name = data.name;
	var text = data.text;
	sendContactUsEmail(email,name,text);
	res.send({state:200});
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
		res.status(404).send("Not comment yet");

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
			 state:200,
			 result :'success'
 			}
 			);
});


//sendEmailActivation();


app.listen(3001,function(){
	console.log('server running at 3001 port');
});
