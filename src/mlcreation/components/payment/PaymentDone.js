import React, { Component } from 'react';
import styled from "styled-components";
 
const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`;

const SaveInvoice=styled.div`
margin-top:50px;
background-color:rgb(225,200,200);
padding:10px;
padding-left:40px;
padding-right:40px;
`;
const Header=styled.div`
display:flex;
width:100%;
height:50px;
justify-content:center;
align-items:center;
background-color:rgb(225,200,200);
`;

const Text=styled.label`

`;
const ThanksBox=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:rgb(244,162,132);
width:830px;
margin-left:10px;
margin-right:10px;
margin-top:95px;
padding:10px;
 `;
const HaveANiceDay=styled.b`
margin-top:73px;
margin-bottom:260px;
`;


const Thanks=()=>{
    return(
        <ThanksBox>
            
         <Text active>We will send your order invoice to your email</Text>
        <Text active>Thanks so much for buying ML Creation Products!</Text>

         </ThanksBox>
    );
}

class PaymentDone extends Component{
    constructor(props){
        super(props)
      
    }
  
    render(){
 
        return(
            <Wrapper>
                  <Header>
                      Thanks for your Payment!
                  </Header>
                  <Thanks/>
                  <SaveInvoice>
                  <a href="" target='blank'>Save your invoice</a>
                   </SaveInvoice> 
                  <HaveANiceDay>
                      Wish you have a beautiful day!
                  </HaveANiceDay>
            </Wrapper>
        );
    }


}    



export default PaymentDone;