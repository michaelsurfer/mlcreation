import React, { Component } from 'react';
import styled from "styled-components";
import productData from "../../asset/ProductList.json";



const Wrapper=styled.div`
display:flex;
width:100%;
background-color:white;
height:300px;
`;
const CommentText=styled.label`
font-size:15px;
`;
const ProductName=styled.label`
font-size:25px;
`;

export const CommentBox = ({productID,comment}) => {
    return(
        <Wrapper>
            <ProductName>
                {productData[productID].itemName}
            </ProductName>
            <CommentText>
                {comment}
            </CommentText>
        </Wrapper>
    );
}
