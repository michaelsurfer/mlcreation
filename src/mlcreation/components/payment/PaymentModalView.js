import React, { Component } from 'react';
import styled from "styled-components";
import BasicInfoForm from "./BasicInfoForm";
import DeliveryAddressForm from "./DeliveryAddressForm";
import ConfirmCost from "./ConfirmCost";
import {StripeForm} from "./StripeForm";


const Wrapper=styled.div`
display:flex;
justify-content:center;
width:100%;
border:0px solid blue;
 

`; 

const InnerWrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
padding-left:10px;
padding-right:10px;
`;

class PaymentModalView extends Component{
    constructor(props){
        super(props)
        this.state={
            currentStep:1
        }
        this.NextCallBackF=this.NextCallBackF.bind(this);
        this.ReOpenCallBackF=this.ReOpenCallBackF.bind(this);

    }

    NextCallBackF(step){
        this.setState({currentStep:step+1});
    }

    ReOpenCallBackF(step){
        if(this.state.currentStep>step){this.setState({currentStep:step})}
    }

    render(){
        
        return(
            <Wrapper>
                <InnerWrapper>
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
                    productCost='1000'
                    shipmentCost='80'
                    NextCallBackF={this.NextCallBackF}
                    ReOpenCallBackF={this.ReOpenCallBackF}
                 />
                 <StripeForm/>
                 </InnerWrapper>
            </Wrapper>
        )
    }

}

export default PaymentModalView;