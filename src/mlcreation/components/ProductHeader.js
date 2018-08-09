import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';



const Title=styled.label`
color:white;
font-size:x-large;
padding:5px;
`;
const Desc=styled.label`
color:white;
font-size:small;
border-bottom:${(props)=>props.underline ?  '1px solid white':'0px'};
`;
const MainDiv=styled(c.RowPureDiv)`
background-color:${(props)=>props.colors[props.gender].color};
justify-content:space-between;
padding-left:20px;
padding-right:20px;

`;
const TextDiv=styled(c.ColPureDiv)`
margin:10px;

align-items:flex-start;

`;


export const Header=({
  title,description1,description2,image,
  gender='general',colors=c.ColorSchema
})=>{
  return(
    <MainDiv gender={gender} colors={colors}>
      <TextDiv>
        <Title>{title}</Title>
        <Desc underline>{description1}</Desc>
        <Desc >{description2}</Desc>
      </TextDiv>
    </MainDiv>
  )
}
