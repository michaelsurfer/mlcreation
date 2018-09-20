import {injectStripe} from 'react-stripe-elements';
import React, {Component} from 'react';
import styled from "styled-components";
import * as c from "./Css";
import LoadingDots from "../LoadingDots";
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

  width:100%;
  padding:0px;
  border :1px solid grey;

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
      super(props)
      const paymentRequest = props.stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: this.props.total,
        },
      })
      paymentRequest.on('token', ({complete, token, ...data}) => {
        console.log('Received Stripe token: ', token);
        console.log('Received customer information: ', data);
        complete('success');

      })
      paymentRequest.canMakePayment().then((result) => {
        this.setState({canMakePayment: !!result});
        console.log("can pay!");
      })
  
      this.state={
          submitting:false,
          canMakePayment: false,
          success:false,
          paymentRequest
        }
     }


    success(){
      console.log("scuccess")
      this.props.NextCallBackF()
    }


    handleSubmit=(ev)=>{
        ev.preventDefault();

         if(this.props.stripe){
            this.props.stripe   
                .createToken()
                .then((payload)=>{
                    console.log('[token]',payload);
                    //console.log(payload.token.id);
                    this.setState({success:true})                
                    this.success();

                })
        }else{
            console.log("Stripe.js hasn't loaded yet.");

        }
        this.setState({submitting:true})

     }

    render(){
        return(
            
            <FormWrapper>

            {this.state.success ?(
                <div>
                 </div>
            ):(
                <div>
                {this.state.submitting &&
                    <LoadingDots title='LOADING'/>
                }
                    <form onSubmit={this.handleSubmit}>    
                    <InfoWrapper>
                  
                    <c.StripeElement>
                    <CardElement
                    {...createOptions(this.props.fontSize)}
                    />
                    </c.StripeElement>
                    
                     <c.FormRow>
                     <c.Button>PAY</c.Button> 
                     </c.FormRow>
                     </InfoWrapper>
                    </form>
                </div>
            )}

     
                    
 
            </FormWrapper>
        )

    }

}    


export default injectStripe(CheckoutForm);
