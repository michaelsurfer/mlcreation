import React, {Component} from 'react';
import styled from "styled-components";

const Star=styled.div`
width:20px;
height:20px;
background-color:${(props)=>props.on?'red':'white'};
padding:0px;
border:1px solid;
`;

const Wrapper=styled.div`
width:auto;
display:flex;
justify-content:center;
align-items:center;
height:20px;
`;


export const RatingStar = ({noOfStar,callbackF}) =>{
    var result=[];
         for(var i=1;i<6;i++){
             
            if(i>noOfStar){
                result.push(<Star id={i} onClick={callbackF}/>);
            }else{
                result.push(<Star id={i} on onClick={callbackF}/>);
            }
        }

    return(
        <Wrapper>
            {result}
        </Wrapper>
     );    
};
