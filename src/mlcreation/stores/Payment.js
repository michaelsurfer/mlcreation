import {observable,computed} from 'mobx'
import {apis} from '../common/config.js';

class Payment{
    @observable currentPaymentType = ''
    @observable currentOrderNo = ''
    @observable orderDetail = {
        custom:{
          orderNo:'',
          uuid:''
        },
        retailer:{
          orderNo:'',
          uuid:''
        }
    } 
    
    @observable paymentProcessJson = {
        //use to manage payment process
        type:'',
        uuid:'',
        orderNo:'',
        done:false
      }

  
      @computed
 
      get isPaymentDone(){
        return this.paymentProcessJson.done
      }

    
    
      refreshOrderNo(){
        fetch(apis.getNextOrderNo.endpoint)
       .then(response=>response.text())
       .then(text=>{
          //this.orderNo.orderNo=data.id
          //this.orderDetail.retailer.orderNo=data.i
          console.log(text)
          this.currentOrderNo = text
        });
    
      }



     
    preparePayment(type,uuid,orderNo){
        console.log('payment store received data in preparePayment')
        console.log('type :'+type)
        console.log('uuid :'+uuid)
        console.log('orderNo :'+orderNo)
        this.currentPaymentType = type
        this.orderDetail[type].orderNo = orderNo
        this.orderDetail[type].uuid = uuid
    }  

    startPaymentProcess(){
        var uuid=this.orderDetail[this.currentPaymentType].uuid
        var orderNo=this.orderDetail[this.currentPaymentType].orderNo
        console.log('payment process start')
        this.paymentProcessJson.done=false
        this.paymentProcessJson = {
          type:this.currentPaymentType,
          uuid:uuid,
          orderNo:orderNo,
          done:false
        }
        console.log(this.paymentProcessJson)
    
      }


payment(json){
  var json = {
    token:json.token,
    info:json.info,
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
        response.text().then((text)=>{
          throw Error(text)
        }).catch((err)=>{console.log(err.message)})
      }else{
        response.text().then((text)=>{
          console.log(text)
          //var data = JSON.stringify(json)
          console.log('FINAL PAYMENT SUCCESSED')
          this.paymentProcessJson.done=true
          this.resetStore()
        })
      }
    })

}



  

  resetStore(){
    //this.redirectionInfo.redirect=false
    //this.redirectionInfo.to=''
  
    sessionStorage.removeItem("cart")

    this.orderDetail = {
      custom:{
        orderNo:'',
        uuid:''
      },
      retailer:{
        orderNo:'',
        uuid:''
      }
    }

  
  }



}

export default new Payment()