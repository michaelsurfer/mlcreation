import React, { Component } from 'react';
import styled from "styled-components";

export const Button=styled.button`
background-color:black;
color:white;
width:100%;
height:30px;
font-size:100%;
`;

export const Form=styled.form`
backgorund-color:grey;
width:100%;

`;

export const FormTitle=styled.label`
font-size:18px;
color:${(props)=>props.active?'black':'grey'};
margin:10px;
  `;
export const FormRow=styled.div`
display:flex;
width:100%;
height:40px;
align-items:center;
border-bottom:${(props)=>props.border?'1px solid white':''}; 
background-color:${(props)=>props.colored?'rgb(223,200,200)':'white'}
`;

export const FieldTitle=styled.label`
display:flex;
flex:1;
color:grey; 
margin:30px;
`;

export const WarningText=styled.div`
color:red;
margin:10px;
`;

export const StripeElement=styled.div`
display:block;
padding:10px;
background-color:white;
margin:10px;
`


export const Input=styled.input`
display:flex;
flex:2;
width:100%;
margin-right:20px;
`

export const Textarea=styled.textarea`
display:flex;
flex:2;
width:100%;
margin:20px;
`;

export const FormField=({
    title,placeHolder,id,type,noTitle
})=>{
    var result=[]
    switch(type){
        case 'remark':
        break;
        case 'textarea':
            result.push(
                <Textarea 
                row={4}
                cols={50}
                placeholder={placeHolder}
                id={id}
                />
            )
        break;
        case 'textinput':
            result.push(
                <Input placeholder={placeHolder}
                id={id}
                />
           )     
        break;
        case 'number':
        result.push(
            <Input placeholder={placeHolder}
            id={id}
            type="number"
            />
       )     
        break;
        case 'cost':
        result.push(
            <FieldTitle>
                USD {placeHolder}
            </FieldTitle>
        )
        break;
    }

    return(
    <FormRow>
    {!noTitle &&
    <FieldTitle>
        {title}
    </FieldTitle>
    }
    {
    result
    }
 
    </FormRow> 
    )
}