import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import { device } from "../common/device";
import itemImg from '../image/batman/main.png';
import {imagePath} from '../common/config.js';


let ProductIDArray={
  m:{
    row1:[
          {name:'ITS',color:'S'},
          {name:'ITS',color:'S'},
          {name:'BR',color:'DO'},
          {name:'PR',color:'B'},
          ],
    row2:[
          {name:'MR',color:'RG'},
          {name:'HT',color:'B'},
          {name:'DB',color:'LPI'},
          {name:'CBR',color:'B'},
        ]

      },
  g:{
    row1:[
          {name:'ITS',color:'S'},
          {name:'ITS',color:'S'},
          {name:'ITS',color:'S'},
          {name:'ITS',color:'S'}
          ],
    row2:[
          {name:'DB',color:'SR'},
          {name:'DB',color:'SB'},
          {name:'DB',color:'LPI'},
          {name:'DB',color:'LPI'}
        ]

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
const StyledProductBox=styled.a`
  width:100%;
  height:300px;
  background-color:rgb(239,238,242);
  margin:2px 0px 0px 2px;
  background-image:url(${(props)=>props.img});
  background-repeat:no-repeat;
  background-size: 100%;
  background-position: center;
  @media ${device.tablet}{
    flex-direction:row;
    margin:2px 0px 0px 0px;
  }
`;

const StyledRow=styled.div`
display:flex;
flex-direction:column;
flex-wrap:no-wrap;
background-color:black;
margin:0px 0px 0px 0px;
justify-content:space-between;
@media ${device.tablet}{
  flex-direction:row;
  margin:10px 0px 10px 0px;
}
 `;



export const ProductGrid=(({gender})=>{
  var result=[];
  var productData=ProductIDArray[gender];
  for (var item in productData){
    var result2=[];

      for(var i in productData[item]){
        var data = productData[item][i];
        var productCode = data.name;
        var productColor = data.color;
        var imgUrl=imagePath+"/products/"+productCode+"/"+productColor+"/1.jpg";

        //var imgUrl = "/image/"+productCode+"/main/"+productColor+".png";
        var link = "/product/"+productCode;
        result2.push(
           <StyledProductBox href={link} img={imgUrl}/>
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
