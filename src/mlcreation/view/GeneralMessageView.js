import React, { Component } from 'react';
import styled from "styled-components";
import {Link} from "../common/Css2";

const Wrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:80vh;
background-color:white;
`;

const Text=styled.label`
margin-top:100px;
margin-bottom:100px;
font-size:20pt;
`;

export const GeneralMessageView=({message,link,linkTitle})=>{
    console.log("General Error handling "+message)
    return(
        <Wrapper>
            <Text>{message}</Text>
            <Link to={link}>
                {linkTitle}
            </Link>
        </Wrapper>
    )

}