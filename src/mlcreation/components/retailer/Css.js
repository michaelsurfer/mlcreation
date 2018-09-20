import styled from "styled-components";
import React,{Component} from 'react';

export const StyledTd=styled.td`
  background-color:${(props)=>props.color};
  border:1px solid grey;
  font-size:15px;
  margin:0px;
  text-align: center; 
  padding:5px;

  `;
  
export const Button=styled.button`
  background-color:rgb(240,160,143);
  color:${(props)=>props.disabled?'grey':'black'};
  height:50px;
  width:100%;
  border:1px solid rgb(240,160,143);
  border-top:0px solid grey;
  border-bottom:0px solid grey;
  margin-top:0px;
  padding:0px;
  font-size:20pt;
  `;

export const StyledTh=styled.th`
  background-color:${(props)=>props.color};
  border:1px solid grey;
  font-size:15px;
  margin:0px;
  text-align: center;
  min-width:${(props)=>props.minWidth}; 
  padding:5px;

 `;

export const StyledLabel=styled.label`
white-space:pre-wrap;
font-size:${(props)=>props.size}
font-family:${(props)=>props.family}
 `;


export const Table=styled.table`
border-collapse: collapse;
border:1px solid grey;
width:100%;

`;

export const Wrapper=styled.div`
width:100%;
`;

export const HeaderCell=(props)=>{
    var _colspan;
    var textAlign=props.textAlign;
    var fontSize=props.fontSize;
    var fontFamily=props.fontFamily;
    var color=props.color;
    console.log(color);
    if(props.colspan=='firstHalf'){
      _colspan=6;
    }else if(props.colspan=="secondHalf"){
      _colspan=8;
    }else{
      _colspan=14;
    }

    const tdStyle={
        'background-color':color,
        'border':'1px solid grey',
        'vertical-align':{textAlign},

    };
    return(
        <td colspan={_colspan} 
        style={tdStyle}>
        <StyledLabel
        size={fontSize}
        family={fontFamily}
        >{props.children}</StyledLabel>
             
        </td>
    );

}


