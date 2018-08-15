import styled from "styled-components";
import React,{Component} from 'react';
import ShoppingCart from '../components/ShoppingCart';
import {observer,inject} from "mobx-react";
import {StripePayment} from '../stripe/StripePayment';
import {NavLink} from "react-router-dom";



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

const ButtonBar=styled.div`
justify-content:center;
align-items:center;
display:flex;
width:100%;
background-color:rgb(240,163,135);
`;

const BackLink=styled(NavLink)`
background-color:black;
color:white;
margin-left:70px;
margin-right:70px;
padding:5px;
font-size:small;
`;


const ButtonBarWrapper=styled.div`
width:90%;
padding:5px;
display:flex;
justify-content:space-between;
align-items:center;
`;

const Button=styled.button`
background-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
color: ${(props)=>props.black? 'white':'black'};
border:1px solid ;
border-color:${(props)=>props.black? 'black':'rgb(240,160,143)'};
margin-left:70px;
margin-right:70px;

 `;

const Header=styled.div`
background-color:rgb(240,163,135);
width:100%;
padding:2px;
`;
const InnerWrapper=styled.div`
width:80%;
padding:20px;
`;
const Wrapper=styled.div`
width:100%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

@inject('store')
@observer
class ShoppingCartView extends Component{
constructor(props){
  super(props);
  this.props.store.loadShoppingCart();
}

render(){
return(
  <Wrapper>
  <Header>SHOPPING LIST</Header>
  <InnerWrapper>
    <ShoppingCart/>
    </InnerWrapper>

<ButtonBar>
<ButtonBarWrapper>

  <BackLink to="/">Back to Shopping</BackLink>
  <Button black
  onClick={()=>this.props.store.showPaymentModal=true}
  >Pay</Button>
  </ButtonBarWrapper>

</ButtonBar>



<ModalWrapper display={this.props.store.showPaymentModal}>

  <Modal>

   <StripePayment
    total={this.props.store.total}
    shipmentCost={100}
    orderNo=""
  />

  </Modal>
</ModalWrapper>



   </Wrapper>
);
}


}


export default ShoppingCartView;
