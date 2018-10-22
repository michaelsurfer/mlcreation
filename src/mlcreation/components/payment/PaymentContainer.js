import React, { Component } from 'react';
import styled from "styled-components";
import OneStepPaymentForm from './OneStepPaymentForm'
import PaymentDone from "./PaymentDone";
import {observer,inject} from "mobx-react";
import {GeneralMessageView} from "../../view/GeneralMessageView";

const Wrapper=styled.div`
display:flex;
justify-content:center;
width:100%;
border:0px solid blue;
background-color: rgb(239,238,242);
padding-top:100px;
padding-bottom:100px;

`; 

const CloseButton=styled.div`
background:rgba(244,162,132,1);
width:100%;
height:20px;
text-align:right;
`;
const CloseText=styled.b`

`;
const InnerWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:50%;
padding-left:0px;
padding-right:0px;
border:1px solid grey;
background-color:white;
`;


@inject('store')
@observer
class PaymentContainer extends Component{
    constructor(props){
        super(props)
  
        //var type = this.props.store.currentPaymentType
        var type = this.props.type
        this.PaymentDoneCallBackF=this.PaymentDoneCallBackF.bind(this);
        this.props.store.Payment.startPaymentProcess()
        console.log('PaymentContainer : startPaymentProcess type = '+type)
        this.state={
            data:{},
            type:type
        }
    
    }

    PaymentDoneCallBackF(json){
        console.log("token uploaded, now process to final payment");
        console.log(json.token)
        console.log(json.info)

        this.props.store.Payment.payment(json)
     }

    render(){
        var costJson={};
        var type = this.state.type;
        var uuid = this.props.store.Payment.orderDetail[this.state.type].uuid
        var email ='';
        if(type=='retailer'){
            costJson = this.props.store.Retailer.retailerCostBreakDown;
            email = this.props.store.Retailer.retailerData.email.value
        }else if(type=='custom'){
            costJson = this.props.store.Cart.costBreakDown;
        }
        var totalProductCost=costJson.totalProductCost
        var totalShipmentCost=costJson.totalShipmentCost
        //var total = totalProductCost + totalShipmentCost
        var total = costJson.finalCost
        console.log("PAYMENT LOGIC START , type : "+type)
        console.log("transactionUUID :"+uuid)

        if(this.props.store.Payment.isPaymentDone){
           return(<PaymentDone/>)
        }

        if(uuid=='null'){
            return(
            <Wrapper>
                <InnerWrapper>
                <GeneralMessageView 
                message='There is currently no payment'
                link='/'
                linkTitle='Back'
                />
                </InnerWrapper>

            </Wrapper>);
        }        

        return(
            <Wrapper>
                <InnerWrapper>
                <OneStepPaymentForm
                email={email}
                total = {total}
                PaymentDoneCallBackF = {this.PaymentDoneCallBackF}
                />
                </InnerWrapper>
            </Wrapper>
        )
    }

}

export default PaymentContainer;