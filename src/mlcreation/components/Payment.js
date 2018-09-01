import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import * as c from '../common/Css2.js';



class Payment extends Component{
  render(){
    return(
    <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
        <Elements>
        <CheckoutForm/>
      </Elements>
       </StripeProvider>
     );
  }

}

export default Payment;
