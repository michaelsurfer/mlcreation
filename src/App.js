import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from "react-router-dom";
import styled from "styled-components";


import {Footer} from './mlcreation/components/Footer';
import NavBar from './mlcreation/navigation/NavBar';
import Home from './mlcreation/view/Home';
import Product from './mlcreation/view/Product';
import {ProductList} from './mlcreation/view/ProductList';
import Retailer from './mlcreation/view/Retailer';
import {StripePayment} from './mlcreation/stripe/StripePayment';
import LoginView from './mlcreation/view/LoginView';
import {observer,inject} from "mobx-react";
import {YourAccountView} from './mlcreation/view/YourAccountView';
import ShoppingCartView from './mlcreation/view/ShoppingCartView';
import TransactionView from './mlcreation/view/TransactionView';
import ContactUsView from './mlcreation/view/ContactUsView';
import AccountActivation from './mlcreation/view/AccountActivation';

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

const HomeView = () =>(
  <div>
  <NavBar/>
  <Home/>
  </div>
);

const Transaction = inject('store')(observer((props)=>{
  return(
  <div>
      <NavBar/>

    <TransactionView/>
  </div>
);
}));

const ProductView = ({match}) =>(
<div>
<NavBar gender={match.params.gender}/>
  <Product gender={match.params.gender} productID={match.params.productID}/>
</div>
);
const ProductListView = ({match}) =>(
<div>
<NavBar gender={match.params.gender}/>
  <ProductList gender={match.params.gender}/>
</div>
);

const ContactUs = () =>(
  <div>
    <NavBar/>
    <ContactUsView/>
  </div>
);

const YourAccount=inject('store')(observer((props)=>{
  console.log(props.store.login);
  return(
  <div>
  <NavBar/>

  {props.store.login?(
    <YourAccountView/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));


const RetailerView=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>

  {props.store.login?(

    <Retailer/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));


const PriceList=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>

  {props.store.login?(

    <Retailer priceList/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));

const TakeOrder=inject('store')(observer((props)=>{
  return(
  <div>
  <NavBar/>

  {props.store.login?(

    <Retailer/>
  ):(
    <LoginView/>
  )}
  </div>
);
}));

const Payment=()=>(
<div>
<StripePayment/>
</div>
);

const ShoppingCart=()=>(
  <div>
  <NavBar/>

  <ShoppingCartView/>
  </div>
);

const Activation =({match}) =>(
  <div>
    <NavBar/>
    <AccountActivation 
    email={match.params.email}
    code={match.params.code}/>
  </div>
);

@inject('store')
@observer
class App extends Component {

  constructor(props){
    super(props);
   }

  render() {
    var loading = 'none';
    if(this.props.store.loading){loading = 'block'}

    return (
      <Router>
      <div>
      <ModalWrapper display={loading}>

        <Modal>

        LOADING....

        </Modal>
      </ModalWrapper>



       <Route exact path="/" component={HomeView}/>
       <Route exact path="/product/:gender/:productID" component={ProductView}/>
       <Route exact path="/productList/:gender" component={ProductListView}/>
       <Route exact path="/retailerLogin" component={RetailerView}/>
       <Route exact path="/takeOrder" component={TakeOrder}/>
       <Route exact path="/priceList" component={PriceList}/>
       <Route exact path="/yourAccount" component={YourAccount}/>
       <Route exact path="/activation/:email/:code" component={Activation}/>
       <Route exact path="/cart" component={ShoppingCart}/>
       <Route exact path="/transaction" component={Transaction}/>
       <Route exact path="/contact" component={ContactUs}/>


      {<Footer/>}
      </div>
      </Router>
    );
  }
}

export default App;
