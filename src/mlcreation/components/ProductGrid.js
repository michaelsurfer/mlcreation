import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import itemImg from '../image/item.png';


let ProductIDArray={
  m:{
    row1:[1,2,3,4],
    row2:[1,2,3,4],
  },
  g:{
    row1:[1,2,3,4,5],
    row2:[1,2,3,4,5],
  },
};

const BasicDiv=styled.div`
display:flex;
width:100%;
background-color:black;
flex-direction:column;

`;

const BlackLine=styled.div`
background-color:black;
width:100%;
border-top:9px solid black;
`;
const StyledProductBox=styled.div`
  width:100%;
  height:150px;
  background-color:rgb(239,238,242);
  margin-left:2px;
  margin-right:2px;
  background-image:url(${itemImg});
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledRow=styled.div`
display:flex;
flex-direction:row;
flex-wrap:no-wrap;
background-color:white;
margin:10px 0px 10px 0px;
justify-content:space-between;
 `;


export const ProductGrid=(({gender})=>{
  var result=[];
  var productData=ProductIDArray[gender];
  for (var item in productData){
    var result2=[];

      for(var i in productData[item]){
        result2.push(
          <StyledProductBox/>
        );
      }

      result.push(

        <StyledRow>
        {result2}
        </StyledRow>
      );
  }

  return(
    <BasicDiv>
    <BlackLine/>
    {result}
    <BlackLine/>

    </BasicDiv>);
});

/*
export const ProductGrid=({gender})=>{
  var result=[];
  var data = ProductIDArray[gender];
  console.log(data);


  for(var item in data){
    console.log("array :"+data[item]);

    var arraydata = data[item];
    console.log("arraydata :"+arraydata[0]);
    result.push(
      <StyledRow>
    );

    var arraydata2=[1,2,3,4,5];
    for(var ite in arraydata2){console.log("test "+arraydata2[ite])}

    arraydata.map(id=>{
       result.push(
        <StyledProductBox/>
      )
    });

    result.push(</StyledRow>);

  };




  return(
    <c.ColCenterDiv>
    <StyledCol>
      {result}
    </StyledCol>
    </c.ColCenterDiv>
  );

}

*/