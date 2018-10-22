import {observable,computed} from 'mobx'
import data from "../asset/ProductList.json"
import ShipmentData from "../asset/ShipmentCost.json"
import {apis} from '../common/config.js'

class Retailer{
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
    @observable login = true
    @observable cart = {}
    @observable loading =  false
    @observable showDialog = false
    @observable registrationState = 'fail'
    @observable dialogMessage = ''
    
    @observable dialogConfig =
    {
        show:false,
        message:'this is a messager',
        buttonText:'close',
        buttonLink:'',
        buttonType:'close'
    }


    @computed
    get getOrderNo(){
        fetch(apis.getNextOrderNo.endpoint)
        .then((response)=>{
            if(!response.ok){
                throw Error(response.statusText)
            }else{
                response.text().then((text)=>{
                    console.log(text)
                    return text
                })    
            }
        }).catch((err)=>{
            console.log(err)
            return 'error'
        })
    
    }

    get costBreakDown(){
        var totalWeight=0
        var totalProductCost=0
        var totalShipmentCost=0
        var finalCost=0
        var totalQty=0

        for(var item in this.cart){
            var qty = this.cart[item].qty;
            var code = this.cart[item].name;
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

    

    register(data){
        this.loading = true
        fetch(apis.register.endpoint,{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
          })
          .then((response)=>{
              if(!response.ok){
                  response.text().then((text)=>{
                      throw Error(text)
                  }).catch(error=>{
                      /*
                        handle non 200 response here
                      */
                     this.loading = false
                     this.showDialog = true
                     this.registrationState = 'fail'
                     this.dialogMessage = "Record already exist"
                  })
              }else{
                  //change to response.text() for text response  
                  response.text().then(text=>{
                    this.loading = false
                    /*
                        handle 200 response here
                    */
                    this.showDialog = true
                     this.registrationState = 'ok'
                     this.dialogMessage = "Registration successed, please check your email"
                  })
              }
          })



    }
    loginF(data){
        this.loading = true
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
                this.showDialog = true
                this.registrationState = 'fail'
                this.dialogMessage = error.message
            })
            }else{
              response.json().then(json=>{
                var data = JSON.stringify(json);
                //sessionStorage.setItem("retailerData", data);
                this.retailerData=json;
                this.login=true;
              });
            }
          })
        
    }


    accountActivation(email,code){
        var params = email+"/"+code
        this.loading = true

        fetch(apis.activation.endpoint+params)
        .then((response)=>{
            if(!response.ok){
                response.text().then((text)=>{
                throw Error(text);}
            ).catch(error=>{
                    this.showDialog = true
                    this.dialogMessage = error.message
                    this.loading = false

            })
            }else{
                    this.login = true
                    this.loading = false

            }
        })
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








    closeDialog(){
        console.log('close dialog')
        this.dialogConfig={
            
                show:false,
                message:'this is a messager',
                buttonText:'close',
                buttonLink:'',
                buttonType:'close'
            
        }
    }
    saveCart(){}
    saveSession(){}

    loadSession(){
        console.log('loading session data from Retailer Store')
        var sessionData=JSON.parse(sessionStorage.getItem("retailerData"))
        if(sessionData){
            console.log('data found and change login state to true')
            this.login = true
        }
    }




}

export default new Retailer()