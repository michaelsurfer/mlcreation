import React, { Component , Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {productImagePath} from '../common/config.js';



const Title=styled.label`
color:${(props)=>(props.gender=='g')?'black':'white'};
font-size:55pt;
margin-top:50px;
font-family: Microsoft JhengHei;
margin-bottom:30px;
font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;

`;
const Desc=styled.label`
color:${(props)=>(props.gender=='g')?'black':'white'};
font-size:16pt;
font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
border-bottom:${(props)=>props.underline ?  '1px solid black':'0px'};
border-top:${(props)=>props.top ?  '1px solid black':'0px'};
border-color:${(props)=>(props.gender=='g')?'black':'white'};
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
margin-right:-60px;
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
        <Title gender={gender}>{title}</Title>

        {description1.length>description2.length?
          (
            <Fragment>
            <Desc underline gender={gender}>{description1}</Desc>
            <Desc gender={gender}>{description2}</Desc>
            </Fragment>

          ):(
            <Fragment>
           <Desc gender={gender}>{description1}</Desc>
          <Desc top gender={gender}>{description2}</Desc>
          </Fragment>
          )
        }
     

      </TextDiv>
      <TopImageDiv
      img={url}
      />
    </MainDiv>
  )
}
