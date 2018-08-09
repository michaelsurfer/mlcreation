import styled from "styled-components";
import React from 'react';
var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var border = '1px dashed';



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
width:95%;
`;

export const FormText=styled.label`
color:grey;
font-size:large;
`;
export const WarningText=styled.label`
color:red;
font-size:large;
`;
export const TextDiv=styled.div`

width:95%;
border-color:${colors[Math.floor(Math.random() * colors.length)]}

border:${border};

`;

export const ColDiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}

`;

export const SplitDiv=styled.div`
display:flex;

justify-content:space-between;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]}
width:100%;
border-bottom:${(props)=>props.bottom ?  '1px solid grey':'0px'};

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
