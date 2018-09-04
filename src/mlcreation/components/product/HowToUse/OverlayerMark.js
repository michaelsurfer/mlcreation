import React from 'react';
import styled from "styled-components";
import SB from '../../image/SB.png';
import { text } from 'body-parser';

const Wrapper=styled.div`
display:flex;
position:absolute;
width:100px;
height:${(props)=>props.height};
left:${(props)=>props.left};
top:${(props)=>props.top};
border-left:1px solid black;
z-index:2;
`;
const Remark=styled.label`
position:absolute;
left:${(props)=>props.left};
top:${(props)=>props.top};
 
`; 
export const OverlayerMark=({
    left,top,height,
    textTop,textLeft
})=>{
     return(
        <div>
        <Wrapper
        left={left}
        top={top}
        height={height}
        />
        <Remark
           left={textLeft}
           top={textTop}
        >TEXT</Remark>
        </div>
    );
}