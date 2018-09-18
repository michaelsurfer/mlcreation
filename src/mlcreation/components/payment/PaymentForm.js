import React,{Component} from 'react';
import styled from "styled-components";
import {StripePayment} from '../../stripe/StripePayment';
import {observer,inject} from "mobx-react";
import OrderHeaderContainer from "../retailer/OrderHeaderContainer";
import * as c2 from '../retailer/Css.js';
import * as c from '../../common/Css2.js';
import PaymentSummary from "./PaymentSummary";

const ModalWrapper=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
display:${(props)=>props.display};
`;

const Modal=styled.div`
position:fixed;
background:white;
width:auto;
height:auto;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`;

const Wrapper=styled.div`
width:80%`;

const Table=styled.table`
border-collapse: collapse;
border:0px solid grey;
width:100%;
`;



const Button=styled.button`
background-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
color: ${(props)=>props.black? 'white':'black'};
margin:0;
border:1px solid ;
border-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
width:90%;
 `;

@inject('store')
@observer

class PaymentForm extends Component{
constructor(props){
  super(props);
  this.state={
     total:0
  }
}
back(){
  this.props.callbackf('confirmOrder');
}
componentDidMount(){}

render(){
  var device = this.props.device;
  return(
    <c2.Wrapper>
        <c.ColPureDiv>
          <c2.Table>
          <OrderHeaderContainer
            type='invoice'
          />
          <PaymentSummary/>
          <tr
            style={{
              'background-color':'rgb(240,160,143)','margin':0,'padding':0
            }}
          
          >
            <td colspan={2}>
              <c2.Button black onClick={()=>this.back()}>Back</c2.Button>
            </td>
            
            <td colspan={2}>
              <c2.Button >Pay Now</c2.Button>
            </td>
          </tr>
          </c2.Table>
        </c.ColPureDiv>
    </c2.Wrapper>
  );
}


}

export default PaymentForm;
