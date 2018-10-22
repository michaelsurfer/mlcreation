import {observable,computed} from 'mobx'
import data from "../asset/ProductList.json"
import {apis} from '../common/config.js';

class Cart{
    @observable cart={}
    @observable orderUuid =''
    @observable redirectionInfo={
      redirect:false,
      to:''
    };



    @computed

    get cartSize(){
      var size=0;
      for(var item in this.cart){
        size=size+this.cart[item].qty;
      }
      return size;
    }

    get costBreakDown(){
        var cart
        cart = this.cart
        var totalProductCost=0
        var totalQty=0
        var totalShipmentCost=0
        var finalCost=0
    
        for(var item in cart){
          var qty = cart[item].qty
          var code = cart[item].name
          var price = data[code].MSRP
    
          if(qty==''){qty=0}else{
          totalProductCost = parseFloat(totalProductCost) + parseInt(qty)*parseFloat(price);
          console.log(totalProductCost)
          totalProductCost = totalProductCost.toFixed(2)
          totalQty = totalQty + parseInt(qty)
          }
        }
        totalShipmentCost = totalQty * 8
        finalCost = parseFloat(totalProductCost) + parseFloat(totalShipmentCost);
        //finalCost = totalProductCost + totalShipmentCost
        finalCost=finalCost.toFixed(2)
        var json = {
          totalProductCost:totalProductCost,
          totalShipmentCost:totalShipmentCost,
          totalQty:totalQty,
          finalCost:finalCost     
        }
        return json;
      }

    resetRedirection(){
        this.redirectionInfo.redirect=false
      }
    
    setRedirect(to){
        this.redirectionInfo.redirect=true
        this.redirectionInfo.to=to
        console.log('setup redirection to :'+to)
      }  

    createOrder(finalCost){
      console.log('creating order from Cart Store')
      var json = {
        finalCost:finalCost,
        orderList:this.cart,
        type:'customer'
      }

      fetch(apis.createOrder.endpoint,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(json),
      }).then((response)=>{
        if(!response.ok){

        }else{
          response.text().then((text)=>{
            this.orderUuid = text
            this.setRedirect('/payment')

          })
        }


      })



    }  
    
    addOne2Cart(id,color){
      console.log("add to cart")
      var cart = this.cart;
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
      this.cart = cart ;
      this.saveCart()
  }


      increaseFromCart(id){
        var cart = this.cart
        var qty = 0
    
        if(!cart[id])
        {
          cart[id].qty = 0
        }else{
          qty = cart[id].qty+1
        }

        cart[id].qty=qty
        this.cart = cart
        this.saveCart()
      }
    
      decreaseFromCart(id,type){
        var cart = this.cart
        var qty=0
        if(cart[id]){
          qty = parseInt(cart[id].qty)
          if(qty>1)
          {
          qty = qty-1
          cart[id].qty=qty           
          this.cart = cart
          }else{
          console.log('delete')
          delete cart[id]
          this.cart = cart
          }
    
        }
        this.saveCart()
       }




    saveCart(){
      var data = JSON.stringify(this.cart);
      sessionStorage.setItem("cart",data);
      console.log('shopping list saved')
      console.log(data)
    }
    loadCart(){
      var existingCart=JSON.parse(sessionStorage.getItem("cart"));
      if(existingCart){
        this.cart=existingCart;
      }
    }

}

export default new Cart()