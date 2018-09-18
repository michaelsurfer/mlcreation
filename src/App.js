import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import styled from "styled-components";
import data from "./mlcreation/asset/ProductList.json";
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
import MakeCommentView from './mlcreation/view/MakeCommentView';
import CommentView from './mlcreation/view/CommentView';
import AllCommentView from './mlcreation/view/AllCommentView';
import {PolicyView} from './mlcreation/view/PolicyView';
import {AboutUsView} from './mlcreation/view/AboutUsView';

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

const MakeComment=({match})=>(
  <div>
        <NavBar gender='general'/>

  <MakeCommentView 
  productID={match.params.productID} 
   />
  </div>  
);



const RetailerPolicy=inject('store')(observer((props)=>{
return (
<div>
<NavBar gender='general'/>

{props.store.login?(
  <PolicyView type='retailer'/>
):(
  <LoginView/>
)}
</div>
);

}));

const Policy=()=>(
<div>
  <NavBar gender='general'/>
  <PolicyView type='customer'/>
</div>
);

const AboutUs=()=>(
<div>
  <NavBar gender='general'/>
  <AboutUsView/>
</div>

);

const Comment=({match})=>(
<div>
  <NavBar gender='general'/>
  <CommentView
    productID={match.params.productID}
  />
</div>
);


const AllComment=()=>(
  <div>
    <NavBar gender='general'/>
    <AllCommentView/>
  </div>
  );

const HomeView = () =>(
  <div>
  <NavBar gender='general'/>
  <Home/>
  </div>
);

const Transaction = inject('store')(observer((props)=>{
  return(
  <div>
      <NavBar gender='general'/>

    <TransactionView/>
  </div>
);
}));

/*
const ProductRedirect = ({match}) =>{
var productID=match.params.productID;

return(
<div>
<NavBar/>
<SelectGenderDialog/>
</div>);
};
*/

const ProductView = ({match}) =>{
//var gender = data[match.params.productID].gender;
var gender = match.params.gender;
return(
<div>
<NavBar gender={gender}/>
  <Product gender={gender} productID={match.params.productID}/>
</div>
);
};
const ProductListView = ({match}) =>(
<div>
<NavBar gender={match.params.gender}/>
  <ProductList gender={match.params.gender}/>
</div>
);

const ContactUs = () =>(
  <div>
    <NavBar gender='g'/>
    <ContactUsView/>
  </div>
);

const YourAccount=inject('store')(observer((props)=>{
  console.log(props.store.login);
  return(
  <div>
  <NavBar gender='g'/>

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
  <NavBar gender='g'/>

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
  <NavBar gender='g'/>

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
  <NavBar gender='g'/>

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
  <NavBar gender='g'/>

  <ShoppingCartView/>
  </div>
);

const Activation =({match}) =>(
  <div>
    <NavBar gender='g'/>
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
   
    var sessionData=JSON.parse(sessionStorage.getItem("retailerData"));
 
    if(sessionData){
    this.props.store.login=true;
    //this.props.store.retailerData=sessionData;
    console.log("session data");
    console.log(sessionData);
    }


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
       <Route exact path="/makeComment/:productID" component={MakeComment}/> 
       <Route exact path="/comment/:productID" component={Comment}/> 
       <Route exact path="/allComment/" component={AllComment}/> 
       <Route exact path="/policy/" component={Policy}/>
       <Route exact path="/retailerPolicy/" component={RetailerPolicy}/>
       <Route exact path="/aboutUs/" component={AboutUs}/>

      {<Footer/>}
      </div>
      </Router>
    );
  }
}

export default App;
