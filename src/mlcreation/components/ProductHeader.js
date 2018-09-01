import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';



const Title=styled.label`
color:white;
font-size:55pt;
margin-top:50px;
font-family: Microsoft JhengHei;
`;
const Desc=styled.label`
color:white;
font-size:16pt;
font-family: Microsoft YaHei UI;
border-bottom:${(props)=>props.underline ?  '1px solid white':'0px'};
`;
const MainDiv=styled(c.RowPureDiv)`
background-color:${(props)=>props.colors[props.gender].color};
justify-content:space-between;
 
height:265px;
`;
const TextDiv=styled(c.ColPureDiv)`
margin-left:66px;

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
