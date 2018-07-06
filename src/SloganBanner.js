import styled from "styled-components";
import React, { Component } from 'react';


const StyledBanner=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
background-color:${(props)=>props.him ? '#000':'rgb(251,160,132)'};
`;

const StyledTitle=styled.p`
font-size:${(props)=>props.big ? 'x-large' : 'small'}

 `;

const SloganBanner = (gender) => {
return(
<StyledBanner gender>
<StyledTitle big>ML Creation</StyledTitle>
<StyledTitle>COOL.....THAT'S WHY HOT</StyledTitle>

</StyledBanner>
);
}




export default SloganBanner;
