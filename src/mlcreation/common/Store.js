import {observable,action} from 'mobx';
import {apis} from '../common/config.js';
import data from "../asset/ProductList.json";
import {computed} from "mobx";

export default class Store{
  @observable login = true;
  @observable showPaymentModal = 'none';
  @observable retailerData ={
    company:{value:'test'},
    ein:{value:'test'},
    website:{value:'test'},
    buyer:{value:'test'},
    ein:{value:'test'},
    phone:{value:'test'},
    email:{value:'abc'},
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
    other:{value:'test'}



  };
  @observable loginError = false;
  @observable shoppingCart = {};
  @observable retailerCart = {};
  @observable subTotalCost = 0;
  @observable orderNo = {orderNo:0,uuid:0};
  @observable loading = false;
  /* shopping cart example
    {
    id as string:{qty:qty as number},
    "ITS-B":{name:"ITS,color:B,qty:10},
    "2":{qty:2}
    }
  */


  @computed
  get total(){
    var cart;
    cart=this.shoppingCart;
    var total = 0;
     for(var item in cart){
      var qty = cart[item].qty;
      var code = cart[item].name;
      var price = data[code].retailPrice;
      if(qty==''){qty=0}
      total = total + parseInt(qty)*parseInt(price);
    }
    console.log(total);
    return total;
  }
  get totalRetailerCost(){
    var cart;
    cart=this.retailerCart;
    var total = 0;
     for(var item in cart){
      var qty = cart[item].qty;
      var code = cart[item].name;
      var price = data[code].retailPrice;
      if(qty==''){qty=0}
      total = total + parseInt(qty)*parseInt(price);
    }
    console.log(total);
    return total;
  }
  get totalRetailerQty(){
      var cart;
      cart=this.retailerCart;
      var total = 0;
       for(var item in cart){
        var qty = cart[item].qty;
        var code = cart[item].name;
        var price = data[code].retailPrice;
        if(qty==''){qty=0}
        total = total + parseInt(qty);
      }
      console.log(total);
      return total;
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

  createOrder(){
    this.loading = true;
    fetch(apis.createOrder.endpoint,{

       method:'POST',
       headers:{
         'Accept':'application/json',
         'Content-Type':'application/json',
       },
       body:JSON.stringify({data:this.retailerCart}),
     }).then(response=>response.json())
     .then(data=>{
       this.orderNo.uuid=data.uuid;
       console.log("order created on the server with uuid "+data.uuid);
       this.loading = false;
     });
  }

  refreshOrderNo(){
    fetch(apis.getNextOrderNo.endpoint)
   .then(response=>response.json())
   .then(data=>{
      this.orderNo.orderNo=data.id
   });

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

    this.setSubTotal();

  }

  saveCart(){
    //store cart to local sessionStorage
    sessionStorage.setItem("cart",this.shoppingCart);

  }
  addOne2Cart(id,color){

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
    /*
    var newQty=qty;
    var existingJson=this.shoppingCart[id];
    if(existingJson){
      newQty=newQty+this.shoppingCart[id].qty;
    };
    */
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
      this.setSubTotal();
    }


  }

  setSubTotal(){
    var total=0;
    var cartData=this.shoppingCart;
    console.log(cartData);
        for(var item in cartData){
          var qty = cartData[item].qty;
          var code = cartData[item].name;
          console.log(qty);
          if(qty==""){qty=0;}
          total=total+parseInt(qty)*parseInt(data[code].retailPrice);
        };
    this.subTotalCost = total;
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

  retailerLogin(data){
    console.log("login function from store");
    console.log(data);
    fetch(apis.login.endpoint,{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({email:'abc@g.com',password:'1234567'}),
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      if(data.result){
         this.retailerData=data.retailerData;
         this.login=true;
       }else{
         this.loginError=true;
       }

    });

    }

}
