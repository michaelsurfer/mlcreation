import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import {observer,inject} from "mobx-react";

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
   width:400px;
  padding:10px;
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
width:100%;
padding:10px;
margin:10px;
margin-top:40px;
background-color:black;
color:white;
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
    console.log(this.props.store.login);
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
            orderNo:this.props.orderNo
          }
        //  fetch('http://localhost:3001/payment/',{
        fetch(apis.payment,{
            method:'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify(json),
          })
            .then(response=>response.json())
            .then(data=>console.log("server response:"+data))
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

render(){
  return(
    <Wrapper>
     <FormWrapper>
    <Total>Total :$ {this.props.total} (USD)</Total>
    <Total>Shipment Cost :$ {this.props.shipmentCost} (USD)</Total>

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


       <Button>Pay</Button>
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
       <Button>Pay</Button>
       </c.ButtonDiv>
       </FormWrapper>
      )}
    </form>
    </Wrapper>
  );
}

}

export default injectStripe(CheckoutForm);
