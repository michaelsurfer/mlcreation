import styled from "styled-components";
import React, { Component } from 'react';
import * as c from '../common/Css2.js';

const ColorBox=styled.div`
width:20px;
height:20px;
background-color:${(props)=> c.ProductColorCode[props.color].color};
`;

export const ColorBox=({
  type='box' //box or name
  colorCode='R'
}
)=>{
  return(
    {type=='box'?(
      <ColorBox color={colorCode}/>
    ):(
      <p>c.ProductColorCode[props.color].name</p>
    )}
  );
}
