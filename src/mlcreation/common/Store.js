import {observable,action} from 'mobx';
import {apis} from '../common/config.js';
import data from "../asset/ProductList.json";

export default class Store{
  @observable login = false;
  @observable showPaymentModal = 'none';
  @observable retailerData ={};
  @observable loginError = false;
  @observable shoppingCart={};
  @observable subTotalCost=0;

  /* shopping cart example
    {
    id as string:{qty:qty as number},
    "1":{qty:10},
    "2":{qty:2}
    }
  */

  loadShoppingCart(){
    var existingCart=JSON.parse(sessionStorage.getItem("cart"));
    if(existingCart){
      this.shoppingCart=existingCart;
    }else{
      //load dummy data if not existing for testing
      this.shoppingCart={
                        "1":{qty:10},
                        "2":{qty:2}
                        }
    }

    this.setSubTotal();

  }

  saveCart(){
    //store cart to local sessionStorage
    sessionStorage.setItem("cart",this.shoppingCart);

  }

  setCart(id,qty){
    /*
    var newQty=qty;
    var existingJson=this.shoppingCart[id];
    if(existingJson){
      newQty=newQty+this.shoppingCart[id].qty;
    };
    */
    var cart = this.shoppingCart;
    cart[id].qty=qty;
    this.shoppingCart=cart;
    this.setSubTotal();
  }

  setSubTotal(){
    var total=0;
    var cartData=this.shoppingCart;
    console.log(cartData);
        for(var item in cartData){
          var qty = cartData[item].qty;
          console.log(qty);
          if(qty==""){qty=0;}
          total=total+parseInt(qty)*parseInt(data[item].retailPrice);
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
      body:JSON.stringify(data),
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
