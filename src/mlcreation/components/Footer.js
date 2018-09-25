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
`;

const SocialCellMobile=Cell.extend`
display:none;

`;

const Followus=styled.label`
color:rgb(138,140,141);
font-size:large;
`;

const QuickLinks=styled.label`
font-size:18px;

`;
const Link=styled(NavLink)`
text-decoration:none;
color:rgb(138,140,141);
padding:5px;
font-size:18px;
font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
`;



const Icon=styled.div`
padding:5px;
color:white;
`;

const FootLine=styled.div`
border:1px solid rgb(183,177,168);
width:100%;
height:10px;
`;
const socialArray={
  twitter:{
    image:'T',
    url:''
  },
  facebook:{
    image:'F',
    url:''
  },
  youtube:{
      image:'U',
      url:''
  },
  ig:{
    image:'I',
    url:''
  }
};

export const Footer=({})=>{

  var social=[];

  for(var item in socialArray){
    social.push(
        <Icon>
          {socialArray[item].image}
        </Icon>
    );
  }

  return(
    <c.ColPureDiv>
    <Wrapper>

      <Cell>
      <Link to="/productList/g">For Her</Link>
      <Link to="/productList/m">For Him</Link>
      <Link to="/allComment">Comments</Link>
      <Link to="/yourAccount">My Account</Link>
      <Link to="/cart">Shopping List</Link>

      </Cell>

      <SocialCell>
      <Followus>Follus us on</Followus>
      <c.RowPureDiv>{social}</c.RowPureDiv>
      </SocialCell>


      <Cell>
      <Link to="aboutUs">About Us</Link>
      <Link to="policy">Shipping & Return</Link>
      <Link to="/">Language</Link>
      <Link to="/contact">Contact Us</Link>

      </Cell>


      <SocialCellMobile>
      <Followus>Follus us on</Followus>
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
