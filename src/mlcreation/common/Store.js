import {observable,action} from 'mobx';
import {apis} from '../common/config.js';
import data from "../asset/ProductList.json";
import {computed} from "mobx";

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


  @computed
  get total(){
    var total = 0;
    var cart = this.shoppingCart;
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

    this.shoppingCart=cart;
  }

  setCart(id,qty){
    /*
    var newQty=qty;
    var existingJson=this.shoppingCart[id];
    if(existingJson){
      newQty=newQty+this.shoppingCart[id].qty;
    };
    */
    console.log(id);
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
