import styled from "styled-components";
import React from 'react';
import {productImagePath} from '../../../common/config.js';

export const path=productImagePath;

export const OutterWrapper=styled.div`
display:flex;
position:relative;
background-color:rgb(253,169,141);
width:100%;
height:100%;
border:1px solid blue;
justify-content:${(props)=>props.left?'flex-start':'flex-end'};
`;

export const TextDiv=styled.div`
width:100%;
margin-right:${(props)=>props.right};
margin-left:${(props)=>props.left};
border:1px solid red;
z-index:2;
 `;

 export const LTextDiv=styled.div`
 width:100%;
 margin-right:${(props)=>props.right};
 margin-left:100px;
 border:1px solid red;
 z-index:2;
 `;

export const Image_A=styled.div`
position:absolute;
top:${(props)=>props.top};
right:${(props)=>props.right};
left:${(props)=>props.left};
background-image:url(${(props)=>props.img});
background-repeat:no-repeat;
background-size:contain;
background-position:center center;
width:150px;
height:150px;

z-index:1;
border:1px solid grey;
 `;

