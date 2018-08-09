import React, { Component } from 'react';
import styled from "styled-components";
import ImageSlider from '../components/ImageSlider';
import {SloganBanner} from '../components/SloganBanner';
import {ProductGrid} from '../components/ProductGrid';
import RegisterForm from '../components/RegisterForm';
import ProductTable from '../components/ProductTable';
import ProductTableConfirm from '../components/ProductTableConfirm';
import PaymentForm from '../components/PaymentForm';
import LoginForm from '../components/LoginForm';


import * as c from '../common/Css2.js';


const BGColorSchema={
  takeOrder:'rgb(239,238,242)',
  confirmOrder:'rgb(239,238,242)',
  payment:'white',
}

const Wrapper=styled.div`
width:70%;
display:flex;
justify-content:center;
align-items:center;
`;

const Outter=styled.div`
background-color:${(props)=>BGColorSchema[props.page]};
justify-content:center;
align-items:center;
display:flex;
`;




//export const Retailer=(({gender})=>{
class Retailer extends Component{
constructor(props){
  super(props);
  this.state={
    login:false,
    page:'signin',
    totalCost:0,
    orderNo:0
  };
  this.confirmCallBack=this.confirmCallBack.bind(this);
}

confirmCallBack(data,nextStep){
  /*
  nextStep :
  confirmOrder , data = purchase detail
  payOrder , data = server response uuid
  */
  console.log('confirm callback');
  console.log(data);

  if(nextStep=='payment'){
    this.setState({
      totalCost:data.totalCost,
      orderNo:data.data.uuid
    });
  }

  this.setState({page:nextStep});
}

render(){



  var device='desktop';
  if(window.innerWidth <= 768){device='mobile'}
  console.log(window.innerWidth);
  var productView=[];

  switch (this.state.page){
    case 'signin':
      productView.push(
        <LoginForm/>
      )
    break;
    case 'signup':
      productView.push(
      <RegisterForm/>
      )
    break;
    case 'takeOrder':
      productView.push(
      <ProductTable device={device} callbackf={this.confirmCallBack}/>
      )
    break;
    case 'confirmOrder':
      productView.push(
        <ProductTableConfirm device={device}  callbackf={this.confirmCallBack}/>
      )
    break;
    case 'payment':
      productView.push(
         <PaymentForm
         orderNo={this.state.orderNo}
         orderDate="order date"
         productCost={this.state.totalCost}
         shipmentCost='50'
         />
      )
    break;
  }



 return(
  <div>
  <Outter page={this.state.page}>
  <Wrapper>
  {this.state.login?(
    productView
    ):(
    productView
  )}
   </Wrapper>
  </Outter>

  <SloganBanner gender='skyBlue'/>

  </div>
  );
}

}

export default Retailer;
