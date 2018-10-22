import {observer,inject} from "mobx-react";
import React,{Component} from 'react';
import * as c from './Css.js';
import OrderHeaderCell from "./OrderHeaderCell";
import OrderHeaderWeightAndShip from "./OrderHeaderWeightAndShip";
import {today} from "../../common/Utility.js";

@inject('store')
@observer
class OrderHeaders extends Component{
    constructor(props){
        super(props);
    }
    
 
    render(){
        var type=this.props.type;   
        //type=takeOrder or confirm 


        return(
            <tbody>
 
            <tr>
            {
            <OrderHeaderCell
            color='white'
            colspan='firstHalf'
            fontFamily='Times New Roman'
            fontSize='21pt'
            type={type}
            firstCell={true}
             >
            <b>Buyer</b>
            </OrderHeaderCell>
            }
            {
            <OrderHeaderCell
            color={((type=='confirm') || (type=='invoice'))?'rgb(251,157,139)':'rgb(252,203,191)'}
            colspan='secondHalf'
            fontFamily='Times New Roman'
            fontSize='24pt'
            textAlign='right'
            type={type}
            firstCell={true}

             >
            <b>{type=='invoice'?'Purchase Order Invoice':'Purchase Order Draft'}</b>
            </OrderHeaderCell>
            }
            </tr>
            <tr>
            {
            <OrderHeaderCell
            color="white"
            colspan='firstHalf'
            fontFamily='Calibri'
            fontSize='12pt'
            type={type}
            >
            Company Name : {this.props.store.Retailer.retailerData.company.value}<br/>
            Tax I.D / EIN No: {this.props.store.Retailer.retailerData.ein.value}<br/>
            Shipping Address: {this.props.store.Retailer.retailerData.address.value}<br/>
            </OrderHeaderCell>
            } 
            {
            <OrderHeaderCell
            color="white"
            colspan='secondHalf'
            fontFamily='Calibri'
            fontSize='12pt'
            type={type}
            >
            Contact Person: {this.props.store.Retailer.retailerData.buyer.value} <br/>
            Phone No: {this.props.store.Retailer.retailerData.phone.value}<br/>
            Email: {this.props.store.Retailer.retailerData.email.value}<br/>
            </OrderHeaderCell>
            } 
            </tr>
            <tr>
            {
            <OrderHeaderCell
            color={((type=='confirm') || (type=='invoice'))?'rgb(241,242,243)':'rgb(236,221,220)'}
            colspan='full'
            fontFamily='Times New Roman'
            fontSize='21pt'
            type={type}
            >
            <b>Supplier</b>
            </OrderHeaderCell>        
            }
            </tr>
            <tr>
      
        {
          <OrderHeaderCell
          color='white'
          colspan='firstHalf'
          fontFamily='Times New Roman'
          fontSize='18pt'
          type={type}
          >
          ML Creation Co., Limited (Hong Kong)
          </OrderHeaderCell>
          }
          {
          <OrderHeaderCell
          color="white"
          colspan='secondHalf'
          fontFamily='Calibri'
          fontSize='12pt'
          type={type}
          >
          Contact Person: Susanna Lee<br/>
          Phone No.: +00852 97383616<br/>
          Email:susanna@mlcreationco.com<br/>
          </OrderHeaderCell>
          }
          </tr>
          <tr>
            {
            <OrderHeaderCell
            color={((type=='confirm') || (type=='invoice'))?'rgb(241,242,243)':'rgb(236,221,220)'}
            colspan='firstHalf'
            fontFamily='Times New Roman'
            fontSize=''
            type={type}
            >
            Your Order No.: {this.props.store.Payment.currentOrderNo}
            </OrderHeaderCell>
            }
            {
            <OrderHeaderCell
            color={((type=='confirm') || (type=='invoice'))?'rgb(241,242,243)':'rgb(236,221,220)'}
            colspan='secondHalf'
            fontFamily='Times New Roman'
            fontSize=''
            type={type}
            >
            Order Date:  {today()}
            </OrderHeaderCell>
            }

            </tr>
            {type=='invoice' &&
            <OrderHeaderWeightAndShip/>
            }

            </tbody>
        );
    }
}

export default OrderHeaders;