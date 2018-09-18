import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
import * as c from "./Css";

export const StripeForm=({})=>{

return(

        <c.Form onSubmit={this.handleSubmit}>
            <c.FormRow border
                    onClick={()=>this.props.ReOpenCallBackF(this.props.step)}
            >
            <c.FormTitle>
                        4. Payment
            </c.FormTitle>
        </c.FormRow>    

    <StripeProvider apiKey="pk_test_yqi17IvtKCcZp2JUa3tnDwOe">
    <Elements>
      <InjectedCheckoutForm
      total='total'
      shipmentCost='test'
      orderNo='test'
      uuid='test'
      />
    </Elements>
  </StripeProvider>
  </c.Form>
)


}