import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
import * as c from "./Css";


class StripeForm extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var active = (this.props.step == this.props.currentStep)
    var total = this.props.total
    console.log(total)

return(

        <c.Form onSubmit={this.handleSubmit}>
            <c.FormRow border colored
                   
            >
            <c.FormTitle active={active}>
                        4. Payment
            </c.FormTitle>
        </c.FormRow>   
        
        {active &&
        <div>
        <br/> 
        
        <c.FormRow>
        
        <c.FormField
                title='Please enter payment detail, your payment type will be detected automatically'
                type='remark'
            />     
        </c.FormRow>
            <br/>
            <br/>
            <br/>
    <c.FormRow>        
    <StripeProvider apiKey="pk_test_yqi17IvtKCcZp2JUa3tnDwOe">
    <Elements>
      <InjectedCheckoutForm
      total={total}
      orderNo='test'
      uuid='test'
      NextCallBackF={this.props.NextCallBackF}
      />
    </Elements>
  </StripeProvider>
  </c.FormRow> 
  <br/>
 
  </div>
        }
  </c.Form>
)
      }

}

export default StripeForm