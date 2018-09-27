import {observer,inject} from "mobx-react";
import React,{Component,Fragment} from 'react';
import OrderHeaderCell from "../retailer/OrderHeaderCell";
 
@inject('store')
@observer
class PaymentSummary extends Component{
    constructor(props){
        super(props);
    }

    render(){

        var costJson = this.props.store.retailerCostBreakDown
        var totalWeight=costJson.totalWeight
        var totalProductCost=costJson.totalProductCost
        var totalShipmentCost=costJson.totalShipmentCost
        var finalCost=costJson.finalCost    

        return(
        <Fragment>
            <tr>
            <OrderHeaderCell
                color='white'
                colspan='firstQuarter'
                fontFamily='Times New Roman'
                fontSize='18pt'
                type='invoice'
                >    
                Products Cost: 
            </OrderHeaderCell>  
            <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='secondQuarter'
                fontFamily='Times New Roman'
                fontSize='10pt'
                type='invoice'
                textAlign='right'
                >    
            USD {totalProductCost}
            </OrderHeaderCell>  
            </tr>
            <tr>
            <OrderHeaderCell
                color='white'
                colspan='firstQuarter'
                fontFamily='Times New Roman'
                fontSize='18pt'
                type='invoice'
                >    
                Shipment Cost:
            </OrderHeaderCell>  
            <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='secondQuarter'
                fontFamily='Times New Roman'
                fontSize='10pt'
                type='invoice'
                textAlign='right'
                >    
                USD {totalShipmentCost}

            </OrderHeaderCell>  
            </tr>
            <tr>
            <OrderHeaderCell
                color='white'
                colspan='firstQuarter'
                fontFamily='Times New Roman'
                fontSize='24pt'
                type='invoice'
                textAlign='center'
                >    
            Total:
            </OrderHeaderCell>  
            <OrderHeaderCell
                color='rgb(241,242,243)'
                colspan='secondQuarter'
                fontFamily='Times New Roman'
                fontSize='24pt'
                type='invoice'
                textAlign='right'
                >    
             USD {finalCost}

             </OrderHeaderCell>  
            </tr>
            <tr>
            
            </tr>
        </Fragment>
        )
    }

}    

export default PaymentSummary;