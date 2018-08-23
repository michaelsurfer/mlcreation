import styled from "styled-components";
import React, { Component } from 'react';
import * as c from '../common/Css2.js';


const StyledBanner=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:${(props)=>props.colors[props.gender].color};
height:250px;

`;

const StyledTitle=styled.label`
font-size:50px;
color:rgb(9,9,9);
font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;
 `;
 const StyledDesc=styled.label`
 font-size:40px;
 color:rgb(9,9,9);
 font-weight:lighter;
 padding:15px;
 `;

export const SloganBanner = ({
  gender='general',
  colors=c.ColorSchema

}) => {
return(
<StyledBanner gender={gender} colors={colors}>
<StyledTitle big>ML CREATION</StyledTitle>
<StyledDesc>COOL.....THAT'S WHY HOT</StyledDesc>

</StyledBanner>
);
}
