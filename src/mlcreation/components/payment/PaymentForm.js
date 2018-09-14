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
/*
export const PaymentForm=({
orderNo,orderDate,productCost,shipmentCost
})=>{
*/
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
  this.props.callbackf('confirm');
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
          <tr>
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


/*
render(){
return(

  <Table>
    <tr>
    <td
    rowspan='4'
    style={{
      'border-right':'1px solid grey'
   }}>Company Name:</td>


    <td
      style={{
       'background-color':'rgb(240,160,143)',
       'border':'1px solid grey'
     }}>Purchase Order Draft
     </td>


    </tr>

    <tr><td>Contact Person:</td></tr>
    <tr><td>Phone No:</td></tr>
    <tr><td>Email:</td></tr>

    <tr>
    <td
      colspan='2'
      style={{
      'background-color':'rgb(242,242,242)',
      'border-bottom':'1px solid grey',
    }} >Supplier:</td>
    </tr>

    <tr>
    <td
          rowspan='3'
          style={{
           'border-right':'1px solid grey',
        }} >
        ML Creation Co Limited (Hiong Kong)
        </td>

        <td
          style={{
           'border':'0px solid grey',
        }} >


    Contract person</td></tr>

    <tr><td>Phjone No</td></tr>
    <tr><td>Email:asdfads</td></tr>

    <tr>
    <td
          style={{
          'background-color':'rgb(242,242,242)',
          'border-bottom':'1px solid grey',
        }} >
        Your Order No: {this.state.orderNo}
        </td>
    <td
          style={{
          'background-color':'rgb(242,242,242)',
          'border-bottom':'1px solid grey',
        }} >
        Order Date : {this.props.orderDate}
        </td>
    </tr>

    <tr>
    <td>Products Cost</td>
    <td>USD {this.props.productCost}</td>
    </tr>
    <tr>
    <td>Shipment  Cost</td>
    <td>USD {this.props.shipmentCost}</td>
    </tr>
    <tr>
    <td>Total</td>
    <td>USD {parseInt(this.props.shipmentCost)+parseInt(this.props.productCost)}</td>
    </tr>
    <tr>
    <td>
    <Button black
    onClick={()=>this.props.callbackf("",'takeOrder')}
    >BACK TO PURCHASE ORDER</Button>
    </td>
    <td>
    <Button
    onClick={()=>this.props.store.showPaymentModal='block'}
    >Pay $ {parseInt(this.props.shipmentCost)+parseInt(this.props.productCost)} Now</Button>
    </td>
    </tr>
    <tr>
    <td>


    </td>
    </tr>
  </Table>
  <ModalWrapper display={this.props.store.showPaymentModal}>

    <Modal>

     <StripePayment
      total={this.props.store.totalRetailerCost}
      shipmentCost={this.props.shipmentCost}
      orderNo={this.props.store.orderNo.orderNo}
      uuid={this.props.store.orderNo.uuid}
    />

    </Modal>
  </ModalWrapper>


  </Wrapper>
      )
}
*/
}

export default PaymentForm;