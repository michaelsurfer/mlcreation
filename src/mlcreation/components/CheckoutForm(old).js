import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import {CardElement, injectStripe} from 'react-stripe-elements';

const Wrapper=c.ColCenterDiv.extend`

 `;

class CheckoutForm extends Component{
constructor(props){
  super(props);

}

render(){
  return(
      <div style={{
        'background-color':'black',
        
      }}>
      <div>
       <label>Card Details
       <CardElement style={{base: {fontSize: '18px'}}} />
       </label>
      </div>
      </div>
   );

}

}



export default injectStripe(CheckoutForm);
