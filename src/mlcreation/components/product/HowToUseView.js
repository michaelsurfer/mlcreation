import React, { Component } from 'react';
import styled from "styled-components";
import {RightLayoutA} from "./HowToUse/RightLayoutA";
import {LeftLayoutA} from "./HowToUse/LeftLayoutA";
import {ShareLowerLayout} from "./HowToUse/ShareLowerLayout";


const OutterWrapper=styled.div`
display:flex;
width:100%;
flex-direction:column;

`;

const Row=styled.div`
display:flex;
flex-direction:row;
width:100%;
`;

const Cell=styled.div`
display:flex;
flex-direction:column;
width:100%;
`;

const TitleDiv=styled.div`
width:100%;
background-color:rgb(253,169,141);
text-align:center;
`;
const Title=styled.label`
font-size:21pt;
font-weight:bold;
`;

export const HowToUseView=({
    productID,color
})=>{
    var LeftLayoutType='A';
    var RightLayoutType='A';

    return(
        <OutterWrapper>
            
             <Row>
                
                <Cell>
                <TitleDiv>
                    <Title>
                        Button Functions
                    </Title>
                </TitleDiv>    

                {LeftLayoutType == 'A' &&
                <LeftLayoutA
                productID={productID}
                color={color}
                />       
                }
                </Cell>
                <Cell>    
                <TitleDiv>
                    <Title>
                    How to Charge it
                    </Title>
                </TitleDiv>    

                {RightLayoutType == 'A' &&
                <RightLayoutA
                productID={productID}
                color={color}
                />
                 }
                </Cell>
                
            </Row>
            
            
                
            <ShareLowerLayout/>
            
        </OutterWrapper>
    );

}