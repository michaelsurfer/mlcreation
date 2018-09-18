import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';

import * as c from '../common/Css2.js';


export const StripePayment=({
  
  total,
  orderNo,
  shipmentCost=0,
  uuid=0
})=>{
return(
  <c.FullPureDiv>
  <StripeProvider apiKey="pk_test_yqi17IvtKCcZp2JUa3tnDwOe">
    <Elements>
      <InjectedCheckoutForm
      format='full'
      total={total}
      shipmentCost={shipmentCost}
      orderNo={orderNo}
      uuid={uuid}
      />
    </Elements>
  </StripeProvider>
  </c.FullPureDiv>

);

}
