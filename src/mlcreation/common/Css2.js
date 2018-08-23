import styled from "styled-components";
import React from 'react';
import {NavLink} from "react-router-dom";


var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var border = '0px dashed';

export const Link=styled(NavLink)`
text-decoration:none;
color:grey;
padding:5px;
font-size:20px;
margin-left:10px;
margin-right:10px;
`;

export const ProductColorCode={
  S:{name:"silver",color:'rgb(10,0,0)'},
  B:{name:"black",color:"rgb(10,0,0)"},
  LPI:{name:"Light Pink",color:'pink'},
  PIPP:{name:"Pink Purple",color:'rgb(0,10,0)'},
  PP:{name:"Purple",color:'purple'},
  R:{name:"Red",color:'rgb(0,0,10)'},
  GO:{name:"Gold Orange",color:'rbg(194,115,93)'},
  SB:{name:"S-Black",color:'rgb(22,22,22)'},
  SR:{name:"S-Rose",color:'rgb(214,65,157)'},
  SPP:{name:"S-Purple",color:'rgb(64,46,104)'},
  SLPI:{name:"S-Light Pink",color:'rgb(241,178,193)'},
  SPIPP:{name:"S-Pink Purple",color:'rgb(180,119,167)'},
  G:{name:"Gold",color:'rgb(222,163,155)'},
  GB:{name:"G-Black",color:'rgb(16,16,16)'},
  GMG:{name:"G-Magic Green",color:'rgb(61,107,116)'},
  GLPI:{name:"G-Light Pink",color:'rgb(227,161,193)'},
  DBL:{name:"Deep Blue",color:'rgb(59,122,241)'},
  LBL:{name:"Water Blue",color:'rgb(90,194,248)'},
  PI:{name:"Pink",color:'rgb(235,145,220)'},
  MG:{name:"Magic Green",color:'rgb(42,96,108)'},
  GGO:{name:"G-Orange",color:'rgb(213,119,96)'},
  SBG:{name:"S-Blue Green",color:'rgb(89,170,178)'},
  IDG:{name:"Indogo",color:'rgb(53,84,105)'},
  DO:{name:"Deep Orange",color:'rgb(114,57,25)'},
  GPI:{name:"G-Pink",color:'rgb(226,172,165)'},
  GIDG:{name:"G-Indogo",color:'rgb(48,82,101)'},
  GSPI:{name:"G-Special Pink",color:'rgb(217,145,151)'},
  TB:{name:"Transparent Black",color:'rgb(113,113,113)'},
  TO:{name:"Transparent Orange",color:'rgb(171,75,66)'},


};

export const ColorSchema={
  m:{color:'rgb(42,99,135)'},
  g:{color:'rgb(251,160,132)'},
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
