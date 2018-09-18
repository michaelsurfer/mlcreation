import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import {observer,inject} from "mobx-react";
import {NavLink} from "react-router-dom";

import {
  CardElement,
  CardCVCElement,
  CardNumberElement,
  CardExpiryElement,
  PaymentRequestButtonElement
} from 'react-stripe-elements';
import * as c from '../common/Css2.js';
import {apis} from '../common/config.js';
import styled from "styled-components";

const Wrapper=styled.div`
display:flex;
width:100%;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const FormWrapper=styled.div`

  background-color:rgb(239,238,242); 
  width:600px;
  padding:10px;
  border-bottom :1px solid white;

 `;
const InfoWrapper=styled.div`
  display:flex;
  flex-direction:column;
  border:0px solid;
  width:100%;
`;


const Label=styled.label`
color:grey;
padding:10px;
 `;
 const Total=styled.label`
 color:black;
 padding:10px;

  `;

const ElementDiv=styled.div`
display:block;
padding:10px;
background-color:white;
margin:10px;
 `;

const Button=styled.button`
display:block;
width:580px;
padding:10px;
margin:10px;
margin-top:40px;
background-color:black;
color:white;
font-size:18pt;
`;



const createOptions = (fontSize: string, padding: ?string) => {
  return {
    style: {
      base: {
        fontSize,
        color: '#424770',
        letterSpacing: '0.025em',
        fontFamily: 'Source Code Pro, monospace',
        '::placeholder': {
          color: '#aab7c4',
        },
        ...(padding ? {padding} : {}),
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };
};


@inject('store')
@observer


class CheckoutForm extends Component{
  constructor(props) {
    super(props);
  
    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000,
      },
    });

    paymentRequest.on('token', ({complete, token, ...data}) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success');

    });

    paymentRequest.canMakePayment().then((result) => {
      this.setState({canMakePayment: !!result});

    });

    this.state = {
      canMakePayment: false,
      paymentRequest,
      showResult:false,
      result:""
    };
  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) =>
        {
          console.log('[token]', payload);
          console.log(payload.token.id);
          var json = {
            token:payload.token.id,
            orderNo:this.props.orderNo,
            uuid:this.props.uuid,
            email:this.props.store.retailerData.email.value
          }
       
        fetch(apis.payment.endpoint,{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify(json),
          })
            .then(response=>response.json())
            .then(data=>
              {
              console.log("server response");
              console.log(data);
              var result=data.result;
              this.setState({
                result:result,
                showResult:true
              });
              }
            )
              /*
              var result=data.result;
              this.setState({
                result:result,
                showResult:true
              });
               */ 
            })
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };


renderResultDialog(){
  var result = this.state.result;
  var Button = "";
  var message="";

  if(result=='success'){
    message="Payment Success !";
    Button = <NavLink to="/">Ok</NavLink>;
  }

  if(result=='fail'){
    message="Payment Fail";
    Button = <button onClick={()=>this.setState({showResult:false})}>Fail</button>;
  }




  return(
  <Wrapper>
  <Label>{message}</Label>
  {Button}
  </Wrapper>
  );
}

renderPaymentForm(){
  return(
    <Wrapper>
    <FormWrapper>
      <InfoWrapper>
      <Label>First Name:</Label>
      <Label>Last Name:</Label>
      <Label>Email:</Label>
      <Label>Phone Number:</Label>
      <Label>Deliver Address:</Label>

      </InfoWrapper>
    </FormWrapper>
    <FormWrapper>  
      <InfoWrapper>
      <Label>Product Cost:</Label>
      <Label>Shipment Cost:</Label>
      <Label>Total Cost:</Label>

      </InfoWrapper>
    </FormWrapper>
     
     <form onSubmit={this.handleSubmit}>
    {this.props.format=='full'?(
      <FormWrapper>
      <Label>Card Number:</Label>
      <ElementDiv>
      <CardNumberElement
      {...createOptions(this.props.fontSize)}
      />
      </ElementDiv>

      <Label>Expiry Date:</Label>

      <ElementDiv>
      <CardExpiryElement
      {...createOptions(this.props.fontSize)}
      />
      </ElementDiv>

       <Label>CVC code:</Label>
       <ElementDiv>

      <CardCVCElement
      {...createOptions(this.props.fontSize)}

      />
      </ElementDiv>


       <Button>Pay Now</Button>
       </FormWrapper>
     ):(
       <FormWrapper>
       <Label>Enter Card Detail:</Label>

       <ElementDiv>
       <CardElement
  {...createOptions(this.props.fontSize)}
       />
       </ElementDiv>
       <c.ButtonDiv>
       <Button type='button' onClick={()=>this.props.store.showPaymentModal='none'}>Cancel</Button>
       <Button>Pay Now</Button>
       </c.ButtonDiv>
       </FormWrapper>
      )}
    </form>
    </Wrapper>
  );
}




render(){
  return(
    <div>
    {this.state.showResult ? (
      <div>{this.renderResultDialog()}</div>
    ):(
      <div>{this.renderPaymentForm()}</div>
    )}
    </div>
  );
}

}
export default injectStripe(CheckoutForm);
