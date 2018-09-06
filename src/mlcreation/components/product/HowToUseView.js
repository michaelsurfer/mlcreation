import React, { Component } from 'react';
import styled from "styled-components";
import {RightLayoutA} from "./HowToUse/RightLayoutA";
import {LeftLayoutA} from "./HowToUse/LeftLayoutA";
import {ShareLowerLayout} from "./HowToUse/ShareLowerLayout";
import {RightLayoutB} from "./HowToUse/RightLayoutB";
import {RightLayoutC} from "./HowToUse/RightLayoutC";
import {ThemeColor} from "../../common/Css2.js";

const OutterWrapper=styled.div`
display:flex;
width:100%;
flex-direction:column;
background-color:${(props)=>props.color};
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
    productID,color,RLayout,LLayout,
    gender='g'
})=>{
    var LeftLayoutType='A';
    var backgroundcolor =ThemeColor[gender].how2Use; 

    return(
        <OutterWrapper
            color={backgroundcolor}
        >
            
             <Row>
                
                <Cell>
                <TitleDiv>
                    <Title>
                     </Title>
                </TitleDiv>    

                {LLayout == 'A' &&
                <LeftLayoutA
                productID={productID}
                color={color}
                />       
                }
                </Cell>
                <Cell>    
                <TitleDiv>

                    <Title>
                     </Title>
                </TitleDiv>    

                {RLayout == 'A' &&
                <RightLayoutA
                productID={productID}
                color={color}
                />
                 }

                {RLayout == 'B' &&
                <RightLayoutB
                productID={productID}
                color={color}
                />
                 }
                {RLayout == 'C' &&
                <RightLayoutC
                productID={productID}
                color={color}
                />
                 }

                </Cell>
                
            </Row>
            
            
                
            <ShareLowerLayout
                productID={productID}
                color={color}
            />
            
        </OutterWrapper>
    );

}