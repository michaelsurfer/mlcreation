import React,{Component} from 'react';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {StripePayment} from '../stripe/StripePayment';
import {apis} from '../common/config.js';


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

class PaymentForm extends Component{
constructor(props){
  super(props);
  this.state={
    displayModal:'none',
    total:0
  }
}

componentDidMount(){
  //fetch('http://localhost:3001/checkOrder/'+this.props.orderNo)
  fetch(apis.checkOrder+this.props.orderNo)

    .then(response=>response.json())
    .then(data=>{
      console.log("server response on total cost"+data.total);
      this.setState({total:data.total});
    });

}



render(){
return(
  <div>
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
        Your Order No: {this.props.orderNo}
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
    <Button black>BACK TO PURCHASE ORDER</Button>
    </td>
    <td>
    <Button
    onClick={()=>this.setState({displayModal:true})}
    >Pay $ {parseInt(this.props.shipmentCost)+parseInt(this.props.productCost)} Now</Button>
    </td>
    </tr>
    <tr>
    <td>


    </td>
    </tr>
  </Table>
  <ModalWrapper display={this.state.displayModal}>
    <Modal>
    <StripePayment
      total={this.state.total}
      shipmentCost={this.props.shipmentCost}
      orderNo={this.props.orderNo}
    />
    </Modal>
  </ModalWrapper>


  </div>
)}
}

export default PaymentForm;
