import React, { Component } from 'react';
import styled from "styled-components";

const Wrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:500px;
background-color:grey;
`;
export const GeneralErrorView=({message})=>{
    console.log("General Error handling "+message)
    return(
        <Wrapper>
            {message}
        </Wrapper>
    )

}