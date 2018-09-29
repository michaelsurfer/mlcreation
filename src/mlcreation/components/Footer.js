import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import {NavLink} from "react-router-dom";

const Wrapper=c.RowPureDiv.extend`
background-color:rgb(29,30,32);
justify-content:space-between;
flex-direction:row;


`;

const Cell=c.ColPureDiv.extend`
justify-content:center;
align-items:left;
padding:30px;

`;

const SocialCell=Cell.extend`
display:flex;
border:0px solid red;
justify-content:center;
align-items:center;
`;

const SocialCellMobile=Cell.extend`
display:none;

`;

const Followus=styled.label`
color:rgb(138,140,141);
font-size:large;
margin-bottom:50px;
`;

const QuickLinks=styled.label`
font-size:18px;
color:rgb(138,140,141);
padding:5px;
margin-bottom:10px;
`;
const Link=styled(NavLink)`
text-decoration:none;
color:rgb(138,140,141);
padding:5px;
font-size:18px;
font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
`;



const Icon=styled.img`
padding:20px;
width:50%;
height:50%;
`;

const FootLine=styled.div`
border:1px solid rgb(183,177,168);
width:100%;
height:10px;
`;
const socialArray={
  twitter:{
    image:require('../image/social/twitter.png'),
    url:''
  },
  facebook:{
    image:require('../image/social/facebook.png'),
    url:''
  },
  in:{
      image:require('../image/social/in.png'),
      url:''
  },
  googleplus:{
    image:require('../image/social/googleplus.png'),
    url:''
  }
};

export const Footer=({})=>{

  var social=[];

  for(var item in socialArray){
    social.push(
        <Icon
          src={socialArray[item].image}
          />
      
    );
  }

  return(
    <c.ColPureDiv>
    <Wrapper>

      <Cell>
      <QuickLinks>QUICK LINKS</QuickLinks>  
      <Link to="/productList/g">For Her</Link>
      <Link to="/productList/m">For Him</Link>
      <Link to="/allComment">Comments</Link>
      <Link to="/yourAccount">Retailer Account</Link>
      <Link to="/cart">Shopping List</Link>

      </Cell>

      <SocialCell>
      <Followus>Follow us on</Followus>
      <c.RowPureDiv>{social}</c.RowPureDiv>
      </SocialCell>


      <Cell>
      <Link to="/aboutUs">About Us</Link>
      <Link to="/policy">Shipping & Return</Link>
      <Link to="/">Language</Link>
      <Link to="/contact">Contact Us</Link>

      </Cell>


      <SocialCellMobile>
      <Followus>Follow us on</Followus>
      <c.RowPureDiv>{social}</c.RowPureDiv>
      </SocialCellMobile>

      </Wrapper>

        <Wrapper>
      <FootLine>
      </FootLine>
    </Wrapper>
    </c.ColPureDiv>
  );
}
