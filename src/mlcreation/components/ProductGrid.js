import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {imagePath,productImagePath} from '../common/config.js';


let ProductIDArray={
  m:{
    row1:[
          {name:'VA',color:'TMO'},
          {name:'SR',color:'GBK'},
          {name:'BR',color:'GBK'},
          {name:'MR',color:'GBK'},
          ],
    row2:[
          {name:'ITS',color:'G'},
          {name:'PR',color:'BK'},
          {name:'CBR',color:'GGY'},
          {name:'RHT',color:'GBK'},
        ]

      },
  g:{
    row1:[
          {name:'CB',color:'GO'},
          {name:'ITS',color:'S'},
          {name:'GF',color:'GSPO'},
          {name:'RVKB',color:'GBK'},
          {name:'GB',color:'GBK'}
          ],
    row2:[
          {name:'RC',color:'SGRBL'},
          {name:'LB',color:'GO'},
          {name:'RHT',color:'GSHPI'},
          {name:'PF',color:'R'},
          {name:'DB',color:'GO'}
        ],
    row3:[
          {name:'EVVA',color:'PP'},
          {name:'EMPTY'},
          {name:'EMPTY'},
          {name:'EMPTY'},
          {name:'EMPTY'},

        ],  

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
  height:270px;
  background-color:rgb(239,238,242);
  margin:0px 0px 0px 0px;
  background-image:url(${(props)=>props.img});
  background-repeat:no-repeat;
  background-size:contain;
  background-position: center;
  border-left:2px solid white;
  border-right:2px solid white;

  flex-direction:row;
 
`;

const StyledRow=styled.div`
display:flex;
flex-direction:rwo;
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
        var data = productData[item][i];
        var productCode = data.name;
        var productColor = data.color;
        var imgUrl=productImagePath+productCode+"/"+productColor+"/1.png";

        //var imgUrl = "/image/"+productCode+"/main/"+productColor+".png";
        var link = "/product/"+gender+"/"+productCode;
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
