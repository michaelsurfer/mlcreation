import React, { Component } from 'react';
import styled from "styled-components";
import BasicInfoForm from "./BasicInfoForm";
import DeliveryAddressForm from "./DeliveryAddressForm";
import ConfirmCost from "./ConfirmCost";
import StripeForm from "./StripeForm";
import PaymentDone from "./PaymentDone";
import {observer,inject} from "mobx-react";
import {GeneralErrorView} from "../../view/GeneralErrorView";

const Wrapper=styled.div`
display:flex;
justify-content:center;
width:100%;
border:0px solid blue;
 
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
width:100%;
padding-left:0px;
padding-right:0px;
`;


@inject('store')
@observer
class PaymentModalView extends Component{
    constructor(props){
        super(props)
        this.state={
            currentStep:1,
            data:{}
        }
        this.NextCallBackF=this.NextCallBackF.bind(this);
        this.ReOpenCallBackF=this.ReOpenCallBackF.bind(this);
        this.PaymentDoneCallBackF=this.PaymentDoneCallBackF.bind(this);
        this.props.store.startPaymentProcess(this.props.type)

    }

    PaymentDoneCallBackF(payload){
        console.log("token uploaded, now process to final payment");
        console.log("payload : "+payload)
        this.props.store.payment(payload)
     }

    NextCallBackF(step,_data){
        var data = this.state.data
        if(_data){
         for(var item in _data){
            data[item]=_data[item]
            }
        }
        this.setState({
            data : data,
            currentStep : step+1
        });

    }

    ReOpenCallBackF(step){
        if(this.state.currentStep>step){this.setState({currentStep:step})}
    }

    render(){
        var productCost=this.props.totalProductCost
        var shipmentCost=this.props.totalShipmentCost
        var total = productCost + shipmentCost
        var type = this.props.type;
        var uuid = this.props.store.orderDetail[this.props.type].uuid
        console.log("PAYMENT LOGIC START , type : "+type)
        console.log("transactionUUID :"+uuid)

        if(uuid==null){
            return(
            <Wrapper>
                <InnerWrapper>
                <GeneralErrorView message='There is an issue when communicating with the backend server'/>
                </InnerWrapper>

            </Wrapper>);
        }        

        return(
            <Wrapper>
                
                <InnerWrapper>
                    <CloseButton>
                        <CloseText
                        onClick={()=>this.props.store.showPaymentModal='none'}

                    >[X]</CloseText></CloseButton>
                 <BasicInfoForm
                    step={1}
                    currentStep={this.state.currentStep}
                    NextCallBackF={this.NextCallBackF}
                    ReOpenCallBackF={this.ReOpenCallBackF}
                 />
                <DeliveryAddressForm
                    step={2}
                    currentStep={this.state.currentStep}
                    NextCallBackF={this.NextCallBackF}
                    ReOpenCallBackF={this.ReOpenCallBackF}
                 />
                 <ConfirmCost
                    step={3}
                    currentStep={this.state.currentStep}
                    productCost={this.props.totalProductCost}
                    shipmentCost={this.props.totalShipmentCost}
                    NextCallBackF={this.NextCallBackF}
                    ReOpenCallBackF={this.ReOpenCallBackF}
                 />
                 <StripeForm
                  step={4}
                  currentStep={this.state.currentStep}
                  NextCallBackF={this.PaymentDoneCallBackF}
                  total = {total}  
                  type={type}
                 />
           
                 </InnerWrapper>
            </Wrapper>
        )
    }

}

export default PaymentModalView;