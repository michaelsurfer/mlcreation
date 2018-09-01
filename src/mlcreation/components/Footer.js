import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";

const Wrapper=c.RowPureDiv.extend`
background-color:rgb(29,30,32);
justify-content:space-between;
flex-direction:column;

@media ${device.tablet}{
  flex-direction:row;
 }
`;

const Cell=c.ColPureDiv.extend`
justify-content:center;
align-items:center;
padding:10px;

@media ${device.tablet}{
padding:30px;
 }


`;

const SocialCell=Cell.extend`
display:none;
@media ${device.tablet}{
display:flex;
 }
`;

const SocialCellMobile=Cell.extend`
display:flex;
@media ${device.tablet}{
display:none;
 }
`;

const Followus=styled.label`
color:rgb(138,140,141);
font-size:large;
`;

const Link=styled.label`
color:rgb(138,140,141);
font-size:small;
padding:5px;
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
      <Link>For Her</Link>
      <Link>For Him</Link>
      <Link>Comments</Link>
      <Link>My Account</Link>
      <Link>Shopping List</Link>

      </Cell>

      <SocialCell>
      <Followus>Follus us on</Followus>
      <c.RowPureDiv>{social}</c.RowPureDiv>
      </SocialCell>


      <Cell>
      <Link>About Us</Link>
      <Link>Our Policy</Link>
      <Link>Language</Link>
      <Link>Contact Us</Link>

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
