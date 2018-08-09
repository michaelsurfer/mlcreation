import styled from "styled-components";
import React from 'react';
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var border = '1px dashed';
import './loading.css';



export const LeftAlignDiv=styled.div`
flex:1;
display:flex;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}
flex-direction:column;

`;

export const FullDiv=styled.div`
flex:1;
display:flex;
width:100%;
height:100vh;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}
justify-content:center;
align-items:center;
`;


export const LoadingIcon=()=>{
  return (
  <div class="loader-container arc-rotate-double">
    <div class="loader">

      <div class="arc-1"></div>
      <div class="arc-2"></div>
    </div>
  </div>
)
};

export const Button=styled.button`
color:${(props)=>props.disable ? 'grey' : 'black'};
`;

export const ButtonDiv=styled.div`
width:95%;
display:flex;
justify-content:${(props)=>props.center ? 'center' : 'space-between'};
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}

`;
export const Input=styled.input`
flex:1;
`;

export const FormTitle=styled.label`
color:grey;
font-size:large;
flex:1;

`;

export const FormText=styled.label`
color:grey;
font-size:small;
word-wrap:no-wrap;
flex:1;

`;


export const WarningText=styled.label`
color:red;
font-size:large;
`;
export const TextDiv=styled.div`
display:flex;
text-align:${(props)=>props.center ? 'center' : 'left'};
justify-content:center;
align-items:center;
flex:1;
width:100%;
border-color:${colors[Math.floor(Math.random() * colors.length)]}
flex-direction:row;
border:${border};

`;

export const ColPureDiv=styled.div`
display:flex;
flex-direction:column;
flex:1;

`;
export const RowPureDiv=styled.div`
display:flex;
flex:1;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}
`;

export const ColDiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}

`;
export const RowDiv=styled.div`
display:flex;

flex-direction:row;
text-align: center;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}

justify-content:center;
align-items:center;
`;

export const Link=styled.a`
text-decoration: none;
`;
