import {injectStripe} from 'react-stripe-elements';
import React, {Component} from 'react';
import styled from "styled-components";
import * as c from "./Css";

import {
    CardElement,
    CardCVCElement,
    CardNumberElement,
    CardExpiryElement,
    PaymentRequestButtonElement
  } from 'react-stripe-elements';

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


  const FormWrapper=styled.div`

  background-color:rgb(239,238,242); 
  width:100%;
  padding:0px;
  border-bottom :1px solid white;

 `;

 const InfoWrapper=styled.div`
 display:flex;
 flex-direction:column;
 border:0px solid;
 width:100%;
`

const Label=styled.label`
color:grey;
padding:10px;
 `
class CheckoutForm extends Component{
    constructor(props) {
      super(props);
    }
    render(){
        return(
            
            <FormWrapper>    
            <c.FormField
                title='Please enter payment detail, your payment type will be detected automatically'
                type='remark'
            />      
            <InfoWrapper>
            {/*    
            <Label>
                Card Number:
            </Label>
            <c.StripeElement>
            <CardNumberElement
                {...createOptions(this.props.fontSize)}
            />
            </c.StripeElement>
        
            <Label>
                Expiry Date:
            </Label>
            <c.StripeElement>
            <CardExpiryElement
                {...createOptions(this.props.fontSize)}
            />
            </c.StripeElement>
            <Label>
                CVC code:
            </Label>
            <c.StripeElement>
            <CardCVCElement
      {...createOptions(this.props.fontSize)}

      />
            </c.StripeElement>
            */}
            <c.StripeElement>
            <CardElement
            {...createOptions(this.props.fontSize)}
            />
            </c.StripeElement>

            </InfoWrapper>
            </FormWrapper>
        )

    }

}    


export default injectStripe(CheckoutForm);
