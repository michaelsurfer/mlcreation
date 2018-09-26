import {injectStripe} from 'react-stripe-elements';
import React, {Component} from 'react';
import styled from "styled-components";
import * as c from "./Css";
import LoadingDots from "../LoadingDots";
 import {CardElement} from 'react-stripe-elements';

  const createOptions = (fontSize: string, padding: ?string) => {
    return {
      style: {
        base: {
          fontSize : '20px',
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
  border :0px solid grey;
 `;

 const InfoWrapper=styled.div`
 display:flex;
 flex-direction:column;
 border:0px solid;
 width:100%;
`
const Error=styled.label`
color:red;
font-size:20px;
`

class CheckoutForm extends Component{
    constructor(props) {
      super(props)
      const paymentRequest = props.stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Demo total',
          amount: Math.round(this.props.total),
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
          error:false,
          errorMessage:'',
          paymentRequest
        }
     }
    success(payload){
      console.log("redirecting payload toward final payment")
      this.props.PaymentDoneCallBackF(payload)
    }

    handleSubmit=(ev)=>{
        ev.preventDefault();
 
         if(this.props.stripe){
          this.setState({
            submitting:true,
            error:false,
            errorMessage:''
          })

            this.props.stripe   
                .createToken({name:"Name"})
                .then(payload=>{
                    console.log('[token]',payload);
                    //console.log(payload.token.id);
                    //check error from Stripe payload
                    if(payload.error){
                      console.log("error!!")
                      this.setState({
                        error:true,
                        errorMessage:payload.error.message
                      })
                      this.setState({submitting:false})

                    }else{
                    
                    this.setState({success:true})  
                    console.log("payload ID") 
                    console.log(payload.token.id)              
             
                    this.success(payload.token.id);
                    }
                }).catch(error=>{
                  console.log("error!!")
                })
        }else{
            console.log("Stripe.js hasn't loaded yet.");

        }
 
     }

    render(){
        var canPay = this.props.canPay
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

                {this.state.error &&
                    <Error>{this.state.errorMessage}</Error>
                }


                    <form onSubmit={this.handleSubmit}>    
                    <InfoWrapper>
                  
                    <c.StripeElement>
                    <CardElement
                    {...createOptions(this.props.fontSize)}
                    />
                    </c.StripeElement>
                    
                     <c.FormRow>
                    {canPay ? (
                      <c.Button>PAY</c.Button> 
                    ):(
                      <c.Button disabled>PAY</c.Button> 
                    )}
 
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
