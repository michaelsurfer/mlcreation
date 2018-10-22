import React, { Component,Fragment} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Redirect} from "react-router";

import styled from "styled-components";
import data from "./mlcreation/asset/ProductList.json";
//import {Footer} from './mlcreation/components/Footer';
//import NavBar from './mlcreation/navigation/NavBar';
//import Home from './mlcreation/view/Home';
import Footer from './www/Footer';
import NavBar from './www/NavBar';
import Home from './www/Home';
import Product from './mlcreation/view/Product';
import {ProductList} from './mlcreation/view/ProductList';
import Retailer from './mlcreation/view/Retailer';
import LoginView from './mlcreation/view/LoginView';
import {observer,inject} from "mobx-react";
import {YourAccountView} from './mlcreation/view/YourAccountView';
import ShoppingCartView from './mlcreation/view/ShoppingCartView';
import ContactUsView from './mlcreation/view/ContactUsView';
import AccountActivation from './mlcreation/view/AccountActivation';
import MakeCommentView from './mlcreation/view/MakeCommentView';
import CommentView from './mlcreation/view/CommentView';
import AllCommentView from './mlcreation/view/AllCommentView';
import {PolicyView} from './mlcreation/view/PolicyView';
import AboutUsView from './mlcreation/view/AboutUsView';
import RetailerBar from './mlcreation/navigation/RetailerBar';
import PaymentContainer from './mlcreation/components/payment/PaymentContainer';
import OneStepPaymentForm from './mlcreation/components/payment/OneStepPaymentForm';
import {YouMayAlsoLike} from './mlcreation/components/YouMayAlsoLike';
import {SloganBanner} from './mlcreation/components/SloganBanner';
import  GenderSelection from './mlcreation/components/GenderSelection';
import TransactionView from './mlcreation/components/transactions/TransactionView';
import RetailerTransactionHistory from './mlcreation/components/transactions/RetailerTransactionHistory';
import DialogContainer from "./mlcreation/components/dialog/DialogContainer";

const BlackLine=styled.div`
width:100%;
height:${(props)=>props.height}
background-color:black;
margin-top:${(props)=>props.top}
`;

const RedText={'color':'red','padding':'300px'}


const PinkLine=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:50px;
background-color:rgb(225,200,200);
text-align:center;
`
const WrarantyText=styled.label`
font-size:20pt;
`
const FixSizeRootWrapper=styled.div`
width: 100%;
min-width: 1200px;
max-width: 3000px;
`
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


const Mike=()=>{
  return(
    <div>
      <label style={RedText}>test </label>
    </div>
  )
}
const ViewAllTransactions=inject('store')(observer((props)=>{
   return(
    <div>
    <NavBar gender='general'/>
    {props.store.login?(
      <Fragment>
      <RetailerBar/>
      <RetailerTransactionHistory
      email={props.store.retailerData.email.value}
      />
      </Fragment>
    ):(
      <LoginView/>

    )}

 
  </div>
  )

}))
const ViewTransaction=({match})=>{
  var uuid=match.params.uuid
  var type=match.params.type
  return(
    <div>
    <NavBar gender='general'/>  
  <TransactionView
    uuid={uuid}
    type={type}
  />
  </div>
  )

}
const ProductRedirect=({match})=>{

  var productID=match.params.productID
  var gender=data[productID].gender
  if(gender=='both'){
    return(<div>
              <NavBar gender='general'/>

      <GenderSelection productID={productID}/>
      )
      }
    </div>)
  }

}
const MakeComment=({match})=>(
  <div>
        <NavBar gender='general'/>

  <MakeCommentView 
  productID={match.params.productID} 
   />
  </div>  
);

const Payment=inject('store')(observer((props)=>{
  //var type=props.store.currentPaymentType//retailer or custom
  //var type=props.store.paymentProcessJson.type
  var type = 'test' //match.params.type;
  var needLogin = false;
  console.log("Payment Route, type :"+type);

  if(!type || type==''){

    return(<Redirect to='/'/>)

  }else{
    if(type == 'retailer'){
      if(props.store.login){
        needLogin = false
      }else{
        needLogin = true
      }
    }
    if(needLogin){
      return(<LoginView/>)
    }else{
        return(
        <div>
          <NavBar gender='general'/>
          {type=='retailer' &&
          <RetailerBar/>
          }
          <PaymentContainer/>
        </div>
        ) 
      
    }

  }

  

 

}))
const OrderDraft=inject('store')(observer((props)=>{
  return(
    <div>
      <NavBar gender='general'/>
      {props.store.login?(
        <Fragment>
        <RetailerBar/>
         </Fragment>
      ):(
        <LoginView/>
      )
    }
    </div>
  )
  }
))

const RetailerPolicy=inject('store')(observer((props)=>{
return (
<div>
<NavBar gender='general'/>

{props.store.login?(
  <Fragment>
  <RetailerBar/>
  <PolicyView type='retailer'/>
  </Fragment>
):(
  <LoginView/>
)}
</div>
);

}));

const Policy=()=>(
<div>
  <NavBar gender='g'/>
  <PinkLine>
    <WrarantyText>WARRANTY</WrarantyText>
  </PinkLine>
  <PolicyView type='customer'/>
  <BlackLine/>
  <SloganBanner gender='g'/>
</div>
);

const AboutUs=()=>(
<div>
  <NavBar gender='general'/>
  <AboutUsView/>
  <BlackLine/>
  <SloganBanner gender='g'/>

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
  <YouMayAlsoLike gender={gender}/>
  <SloganBanner gender={gender}/>

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
  return(
  <div>
  <NavBar gender='g'/>

  {props.store.Retailer.login?(
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

  {props.store.Retailer.login?(

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
    <Fragment>
    <Retailer priceList/>
    <BlackLine height='36px'/>
    <SloganBanner gender='g'/>
    </Fragment>
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
    this.props.store.Retailer.loadSession()   
    this.props.store.Cart.loadCart()
    }

  render() {
 

    var loading = 'none';
    if(this.props.store.loading){loading = 'block'}
     
    return (
       
      <Router>
        
      <FixSizeRootWrapper>
       <ModalWrapper display={loading}>
        <Modal>LOADING....</Modal>
      </ModalWrapper>
   
      <DialogContainer/>


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
       <Route exact path="/payment2" component={Payment}/>
       <Route exact path="/productRedirect/:productID" component={ProductRedirect}/>
       <Route exact path="/viewTransaction/:type/:uuid" component={ViewTransaction}/>
       <Route exact path="/viewAllTransactions/" component={ViewAllTransactions}/>
       <Route exact path="/mike" component={Mike}/>
       <Route exact path="/payment/" render={({match})=>{
         //var type = match.params.type;
        var type = this.props.store.Payment.currentPaymentType 
         if(!type || type ==''){
            return(<Redirect to='/' />)
          }

          if (type == 'retailer'){
            if(this.props.store.Retailer.login){
              return(
                <div>
                  <NavBar gender='general'/>
                  <RetailerBar/>
                  <PaymentContainer type='retailer'/>
                </div>
              )
            }else{
              return(
                <div>
                  <LoginView/>
                </div>
              )  
            }
          }else{
            return(
            <div>
            <NavBar gender='general'/>
             <PaymentContainer type='custom'/>
           </div>
            )
          }
       }}/>

      <Footer/>
      </FixSizeRootWrapper>
      </Router>
    );
  }
}

export default App;
