import React,{Component} from 'react';
import styled from "styled-components";
 

const Wrapper=styled.div`
display:flex;
width:100%;
flex-direction:row;
`;

const RemarkLabel=styled.div`
display:flex;
border-right:1px solid grey;
height:60px;
width:100px;
justify-content:center;
align-items:center;
`;

const InputBox=styled.input`
width:100%;
background: transparent;
border: none;
`;

export const RemarkRow=({totalSpan})=>{
    var BgColor='rgb(236,221,220)';
    return(
        <tr>
            <td
                colSpan={totalSpan}
                style={{
                    'background-color':BgColor,
                    'text-align':'left',
                    'border':'1px solid grey',
                    'height':'60px'
                }}
            >
            <Wrapper>
                <RemarkLabel>Remark : </RemarkLabel>
                <InputBox/>
            </Wrapper>    
            </td>
        </tr>
    );
}

