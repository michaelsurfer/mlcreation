import styled from "styled-components";
import React from 'react';
import {NavLink} from "react-router-dom";


var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var border = '0px dashed';

export const Link=styled(NavLink)`
text-decoration:none;
color:grey;
padding:5px;
`;

export const ProductColorCode={
  S:{name:"silver",color:'rgb(10,0,0)'},
  B:{name:"black",color:"rgb(10,0,0)"},
  LPI:{name:"Light Pink",color:'pink'},
  PIPP:{name:"Pink Purple",color:'rgb(0,10,0)'},
  PP:{name:"Purple",color:'purple'},
  R:{name:"Red",color:'rgb(0,0,10)'}
};

export const ColorSchema={
  m:{color:'rgb(42,99,135)'},
  g:{color:'rgb(207,105,67)'},
  general:{color:'rgb(92,190,214)'},
  titlePink:{color:'rgb(246,205,193)'},
  titleBlue:{color:'rgb(119,214,228)'},
  tdBlue:{color:'rgb(222,238,243)'},
  headerBlue:{color:'rgb(190,220,231)'},
  skyBlue:{color:'rgb(98,190,215)'},
  grey:{color:'rgb(239,238,242)'}
};


export const RegistrationFormTitle=styled.label`
color:grey;
font-size:large;


`;
export const RegistrationFormText=styled.label`
color:grey;
font-size:small;

`;

export const ButtonDiv=styled.div`
width:100%;
display:flex;
justify-content:${(props)=>props.center ? 'center' : 'space-between'};
`;

export const BasicDiv=styled.div`
display:flex;

border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]};

 `;
export const ColPureDiv=BasicDiv.extend`
flex-direction:column;
`;
export const RowPureDiv=BasicDiv.extend`
flex-direction:row;

`;
export const AutoFullRow=BasicDiv.extend`
width:100%;
flex-direction:row;

`;
export const AutoFullCol=BasicDiv.extend`
width:100%;
flex-direction:column;


`;

export const FullPureDiv=BasicDiv.extend`
width:100%;
flex-direction:${(props)=>props.direction};
  `;
export const ColCenterDiv=ColPureDiv.extend`
justify-content:center;
align-items:center;

`;
export const RowCenterDiv=RowPureDiv.extend`
justify-content:center;
align-items:center;
`;
