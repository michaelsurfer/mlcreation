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
 
export const Line=styled.div`
height:1px;
width:100%;
margin-top:1px;
border-top:0px solid;
border-bottom:1px solid;
`;
export const ThemeColor={
g:{
  top:'rgb(0,0,0)',
  header:'rgb(222,200,200)',
  product:'rgb(255,255,255)',
  how2Use:'rgb(235,222,221)',
  how2UseImg:'rgb(222,200,200)'

},
m:{
  top:'rgb(5,100,137)',
  header:'rgb(5,100,137)',
  product:'rgb(235,239,241)',
  how2Use:'rgb(214,215,217)',
  how2UseImg:'rgb(201,202,204)'
},
general:{
  policyBG : 'rgb(238,238,242)',
}
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
export const EmptySpace=styled.div`
display:flex;
height:${(props)=>props.height}
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
