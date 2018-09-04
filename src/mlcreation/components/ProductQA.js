import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';



const Title=styled.label`
color:black;
font-size:small;
padding:5px;
`;
const Desc=styled.label`
color:black;
font-size:small;
padding:5px;
`;

const MainDiv=styled(c.RowPureDiv)`
background-color:rgb(241,181,158);
justify-content:center;
padding-left:20px;
padding-right:20px;

`;
const TextDiv=styled(c.ColPureDiv)`
margin:10px;
align-items:${(props)=>props.center ? 'center':'flex-start'};
`;
const Button=styled.button`
background-color:black;
color:white;
width:100%;
`;




export const QA=({
  title,descriptionArray,remarkArray
  })=>{

  var descDiv=[];
  var remarkDiv=[];

  descriptionArray.map((data,i)=>{
    descDiv.push(
      <Desc>
      {String.fromCharCode(65+i)} . {data}
      </Desc>
    );
  })
  remarkArray.map((data,i)=>{
    remarkDiv.push(

      <Desc>
      * {data}
      </Desc>

    );
  })



  return(
    <MainDiv>
      <TextDiv center>
        <Title>{title}</Title>
        <TextDiv>{descDiv}</TextDiv>
        <TextDiv>{remarkDiv}</TextDiv>

      </TextDiv>
    </MainDiv>
  )
}
