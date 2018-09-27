import {observer,inject} from "mobx-react";
import React,{Component,Fragment} from 'react';
import OrderHeaderCell from "./OrderHeaderCell";

@inject('store')
@observer
class OrderHeaderWeightAndShip extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <tr>
                <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='firstQuarter'
                fontFamily='Times New Roman'
                fontSize='18pt'
                type='invoice'
                >    
                Order Weight: {this.props.store.totalRetailerWeight} kg
                </OrderHeaderCell>        
                
                
                <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='secondQuarter'
                fontFamily='Times New Roman'
                fontSize='10pt'
                type='invoice'
                >    
                The total weight is 20 kilograms or more than 20 kilograms of order, the global air freight is USD 5.5 dollars per kilogram.<br/>
                The global air freight for the order weight less then 20kg, please see the air shipment cost list from our policy. 
                </OrderHeaderCell>  
                </tr>
                <tr>
                <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='firstQuarter'
                fontFamily='Times New Roman'
                fontSize='18pt'
                type='invoice'
                firstCell={true}
                >    
                Delivery Time :5-7 Days
                </OrderHeaderCell>  
                <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='secondQuarter'
                fontFamily='Times New Roman'
                fontSize='10pt'
                type='invoice'
                >    
                After your payment, we will deliver your order to your designated delivery address within 5 business days.<br/>
                For remote area is 7 working days.
                </OrderHeaderCell>                     
                </tr>

            </Fragment>
        );
    }    
} 

export default OrderHeaderWeightAndShip;