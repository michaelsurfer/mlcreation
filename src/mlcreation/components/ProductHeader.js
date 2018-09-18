import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {productImagePath} from '../common/config.js';



const Title=styled.label`
color:white;
font-size:55pt;
margin-top:50px;
font-family: Microsoft JhengHei;
margin-bottom:30px;
`;
const Desc=styled.label`
color:white;
font-size:16pt;
font-family: Microsoft YaHei UI;
border-bottom:${(props)=>props.underline ?  '1px solid white':'0px'};
`;
const MainDiv=styled(c.RowPureDiv)`
background-color:${(props)=>props.color};
justify-content:space-between;
height:260px;
width:100%;
`;

const TopImageDiv=styled.div`
display:flex;
width:40%;
height:260px;
margin-right:-20px;
background-image:url(${(props)=>props.img});
background-repeat:no-repeat;
background-size:contain;
background-position: center;
border:0px solid red;
`;


const TextDiv=styled(c.ColPureDiv)`
margin-left:66px;

align-items:flex-start;

`;


export const Header=({
  title,description1,description2,
  gender='general',colors=c.ColorSchema,
  productID
})=>{
  var url = productImagePath+productID+"/top/"+gender+".png";
  console.log(url);
  var color=c.ThemeColor[gender].header
  return(
    <MainDiv gender={gender} color={color}>
      <TextDiv>
        <Title>{title}</Title>
        <Desc underline>{description1}</Desc>
        <Desc >{description2}</Desc>
      </TextDiv>
      <TopImageDiv
      img={url}
      />
    </MainDiv>
  )
}
