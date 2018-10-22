import {observable,action} from 'mobx';
import {apis} from '../common/config.js';
import data from "../asset/ProductList.json";
import {computed} from "mobx";
import ShipmentData from "../asset/ShipmentCost.json";
 

export default class Store{
    @observable login = false 
    @observable loading = false
    @observable generalDialog = 
        {
            show:false,
            message:'hello',
            closeButton:{show:false},
            actionButton:{
                show:false,
                name:"",
                action:""
            }
      };

    @observable retailerData={}
    @observable redirectionInfo={redirect:false,to:''}
    @observable shoppingCart={
        customer:{},
        retailer:{}
    }


    @computed
    get cartSize(){
        var size = 0 
        for (var item in this.shoppingCart.customer){
            size=size+this.shoppingCart.customer[item].qty
        }
        return size
    }    


    loadShoppingCart(){}


}