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


export const text={
BR:{
charge:`
A.  Take out the vibrator from the silicone sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1 hour of charging = 1.5 hours usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
    each quickly press changes one mode,after the 10th mode,  
    the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
    the vibration mode will changes to the 10-auto cycle mode.
    To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.`
    }


 };
