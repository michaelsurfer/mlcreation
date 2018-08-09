import styled from "styled-components";
import React, { Component } from 'react';
import * as c from '../common/Css2.js';


const StyledBanner=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
background-color:${(props)=>props.colors[props.gender].color}
`;

const StyledTitle=styled.p`
font-size:${(props)=>props.big ? 'x-large' : 'small'}
 `;


export const SloganBanner = ({
  gender='general',
  colors=c.ColorSchema

}) => {
return(
<StyledBanner gender={gender} colors={colors}>
<StyledTitle big>ML Creation</StyledTitle>
<StyledTitle>COOL.....THATS WHY HOT</StyledTitle>

</StyledBanner>
);
}
