import {observable,action} from 'mobx';
import {apis} from '../common/config.js';
import data from "../asset/ProductList.json";
import {computed} from "mobx";
import ShipmentData from "../asset/ShipmentCost.json";
 
export default class Store{
  @observable login = true;
  //@observable showPaymentModal = 'none';
  @observable showPaymentModal = 'none';
  @observable showSelectGenderDialog={
    show:false,
    productID:"BR"
  };
  @observable generalDialog = {
    show:false,
    message:'hello',
    closeButton:{show:false},
    actionButton:{
      show:false,
      name:"",
      action:""
    }
  };
  @observable retailerData ={
    company:{value:'test'},
    ein:{value:'test'},
    website:{value:'test'},
    buyer:{value:'test'},
    ein:{value:'test'},
    phone:{value:'test'},
    email:{value:'abc2'},
    password:{value:'test'},
    address:{value:'test'},
    city:{value:'test'},
    area:{value:'test'},
    street:{value:'test'},
    no:{value:'test'},
    floor:{value:'test'},
    room:{value:'test'},
    zip:{value:'test'},
    country:{value:'test'},
    retailer:{value:'test'},
    retailerNo:{value:'test'},
    mine:{value:'test'},
    eTailer:{value:'test'},
    eTailerNo:{value:'test'},
    amazon:{value:'test'},
    eBay:{value:'test'},
    other:{value:'test'},
    homeParties:{value:'test'}
  };
  @observable loginError = false;
  @observable shoppingCart = {};
  @observable retailerCart = {};
  @observable paymentProcessJson = {
    //use to manage payment process
    type:'',
    uuid:'',
    orderNo:'',
    done:false
  };
  @observable subTotalCost = 0;
  //@observable orderNo = {orderNo:0,uuid:0};
  @observable loading = false;
  @observable orderDetail = {
      custom:{
        orderNo:'',
        uuid:''
      },
      retailer:{
        orderNo:'',
        uuid:''
      }
  };

  // COMPUTED FUNCTIONS
  
  @computed
  get isPaymentDone(){
    return this.paymentProcessJson.done
  }
  get currentPaymentType(){
    return this.paymentProcessJson.type
  }
  get customCostBreakDown(){
    var cart;
    cart = this.shoppingCart;
    var totalProductCost=0;
    var totalQty=0;
    var totalShipmentCost=0;
    var finalCost=0;

    for(var item in cart){
      var qty = cart[item].qty;
      var code = cart[item].name;
      var price = data[code].MSRP;
      if(qty==''){qty=0}
      totalProductCost = totalProductCost + parseInt(qty)*parseFloat(price);
      totalQty = totalQty + parseInt(qty);
    }
    totalShipmentCost = totalQty * 8;
    finalCost = totalProductCost + totalShipmentCost;
    var json = {
      totalProductCost:totalProductCost,
      totalShipmentCost:totalShipmentCost,
      totalQty:totalQty,
      finalCost:finalCost     
    }
    
    return json;


  }

  get retailerCostBreakDown(){
    var cart;
    cart = this.retailerCart;
    var totalWeight=0;
    var totalProductCost=0;
    var totalShipmentCost=0;
    var finalCost=0;
    var totalQty=0;
    for(var item in cart){
      var qty = cart[item].qty;
      var code = cart[item].name;
      var price = data[code].retailPrice;
      var weight = data[code].weight;
      if(qty==''){qty=0}
      totalQty=totalQty+parseInt(qty);
      totalProductCost = totalProductCost + parseInt(qty)*parseInt(price);
      totalWeight = totalWeight +parseInt(qty)*parseFloat(weight);
    } 

    for(var item in ShipmentData){
      var weight = parseFloat(item);
      if(totalWeight >= weight){
        totalShipmentCost = parseFloat(ShipmentData[item]);
        break;
      }
    }
    if(totalWeight <2){
      totalShipmentCost = parseFloat(ShipmentData['2']);
    }

    finalCost = totalProductCost + totalShipmentCost;
    var json = {
      totalQty:totalQty,
      totalWeight:totalWeight,
      totalProductCost:totalProductCost,
      totalShipmentCost:totalShipmentCost,
      finalCost:finalCost            
    }
    
    return json;
    }


  get cartSize(){
    /*
    var size = Object.keys(this.shoppingCart).length;
    console.log(size);
    */
    var size=0;
    for(var item in this.shoppingCart){
      size=size+this.shoppingCart[item].qty;
    }
    return size;
  }

// FETCH FUNCTIONS


payment(token){
//type = custom or retailer
var json = {
  token:token,
  uuid:this.paymentProcessJson.uuid,
  type:this.paymentProcessJson.type
}

fetch(apis.payment.endpoint,{
  method:'POST',
  headers:{
    'Accept':'application/json',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(json),
  })
  .then((response)=>{
    if(!response.ok){
      response.text().then(function(text){
        throw Error(text);
      }).catch(error=>{
        console.log(error.message);
        this.showDialog(error.message,true,false);});  
    }else{
      response.json().then(json=>{
        console.log(json)
        var data = JSON.stringify(json)
        console.log('FINAL PAYMENT SUCCESSED')
        this.paymentProcessJson.done=true
        this.deleteCart(this.paymentProcessJson.type)
      });
    }
  })

}

retailerLogin(data){
  fetch(apis.login.endpoint,{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
  })
  .then((response)=>{
    if(!response.ok){
      response.text().then(function(text){
        throw Error(text);
      }).catch(error=>{
        console.log(error.message);
        this.showDialog(error.message,true,false);});  
    }else{
      response.json().then(json=>{
        console.log(json);
        var data = JSON.stringify(json);
        sessionStorage.setItem("retailerData", data);
        this.retailerData=json;
        this.login=true;
      });
    }
  })

}

createCustomOrder(finalCost){
  this.loading = true;
  var json2Upload = {
    data:this.shoppingCart,
    finalCost:finalCost
  };
  fetch(apis.createCustomOrder.endpoint,{

     method:'POST',
     headers:{
       'Accept':'application/json',
       'Content-Type':'application/json',
     },
     body:JSON.stringify(json2Upload),
   }).then(response=>response.json())
   .then(data=>{
     //this.orderNo.uuid=data.uuid;
     this.orderDetail.custom.uuid=data.uuid;
     console.log("order created on the server with uuid "+data.uuid);
     this.loading = false;
     this.showPaymentModalF('custom');
   });
}

  createOrder(finalCost){
    this.loading = true;
    console.log(finalCost)
    //remove unneccssary data

    var newCartData={}
    for(var item in this.retailerCart){
      if(this.retailerCart[item].qty>0){
        newCartData[item] = this.retailerCart[item]
      }
    }

     var json2Upload = {
      data:newCartData,
      finalCost:finalCost
    };
    fetch(apis.createOrder.endpoint,{

       method:'POST',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json',
       },
       body:JSON.stringify(json2Upload),
     }).then(response=>response.json())
     .then(data=>{
       //this.orderNo.uuid=data.uuid;
       this.orderDetail.retailer.uuid=data.uuid;
       console.log("order created on the server with uuid "+data.uuid);
       this.loading = false;
     });
  }

  refreshOrderNo(){
    fetch(apis.getNextOrderNo.endpoint)
   .then(response=>response.json())
   .then(data=>{
      //this.orderNo.orderNo=data.id
      this.orderDetail.retailer.orderNo=data.id
   });

  }



// COMMON FUNCTIONS

  startPaymentProcess(type){
    var uuid=this.orderDetail[type].uuid
    var orderNo=this.orderDetail[type].orderNo
    console.log('payment process start'), 
 
    this.paymentProcessJson = {
      type:type,
      uuid:uuid,
      orderNo:orderNo,
      done:false
    }
    console.log(this.paymentProcessJson)

  }

  showPaymentModalF(type){
    this.showPaymentModal=true
    this.startPaymentProcess(type)
  }

  showDialog(message,closeButton,actionButton){
    console.log("showDialog");
    if(!closeButton){
      this.generalDialog.closeButton.show=false;
    }else{
      this.generalDialog.closeButton.show=true;
    }
    if(!actionButton){
      this.generalDialog.actionButton.show=false;
    }else{
      this.generalDialog.actionButton.show=true;
    }
    this.generalDialog.message=message;
    this.generalDialog.show=true;
  }
closeDialog(){
  this.generalDialog.show=false;
}
 


  loadShoppingCart(){
    var existingCart=JSON.parse(sessionStorage.getItem("cart"));
    if(existingCart){
      this.shoppingCart=existingCart;
    }else{
      //load dummy data if not existing for testing
      /*
      this.shoppingCart={
                        "ITS":{B:{qty:10},S:{qty:2}},
                        "DB":{B:{qty:10},S:{qty:2}}
                        }
     */
    }

    //this.setSubTotal();

  }

  saveCart(){
    //store cart to local sessionStorage
    sessionStorage.setItem("cart",this.shoppingCart);

  }
  addOne2Cart(id,color){
    console.log("add to cart")
    var cart = this.shoppingCart;
    var qty=1;
    var json={};
    var productID=id+"-"+color;

    if(cart[productID]){
      qty = cart[productID].qty+1;
    }

    var json={
      qty:qty,
      name:id,
      color:color
    }

    cart[productID]=json;


      this.shoppingCart = cart ;


  }

  setCart(id,qty,type){
 
    console.log(id);
    //id : ITS-B
    var cart;
    if(type=='retailer'){
      cart = this.retailerCart;
    }else{
      cart = this.shoppingCart;
    }

    cart[id].qty=qty;

    if(type=='retailer'){
      this.retailerCart=cart;
    }else{
      this.shoppingCart=cart;
      //this.setSubTotal();
    }


  }

  deleteCart(type){
    if(type=='custom'){
      this.shoppingCart={}
    }else if(type=='retailer'){
      this.retailerCart={}
    }
   }

  removeFromCart(id){
    var cart = this.shoppingCart;
    delete cart[id];
    this.shoppingCart=cart;
  }


  retailerLogOut(){
    this.retailerData={};
    this.login=false;
  }


 


}
