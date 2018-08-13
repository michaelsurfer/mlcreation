import {observable,action} from 'mobx';
import {apis} from '../common/config.js';

export default class Store{
  @observable login = false;
  @observable showPaymentModal = 'none';
  @observable retailerData ={};


  retailerLogOut(){
    this.retailerData={};
    this.login=false;
  }

  retailerLogin(data){
    console.log("login function from store");
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
      if(data.result){
        this.retailerData=data.retailerData;
        this.login=true;
        console.log(this.retailerData);
      }
    });

    }

}
