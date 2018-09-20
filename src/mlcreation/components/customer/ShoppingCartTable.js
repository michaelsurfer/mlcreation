import styled from "styled-components";
import React,{Component,Fragment} from 'react';
import data from "../../asset/ProductList.json";
import * as c from "../../common/Css2";
import {ItemImage} from "../../components/ItemImage";
import {ColorBox} from "../colorPicker/ColorBox";
import {observer,inject} from "mobx-react";



const Wrapper=styled.div`
display:flex;
width:100%;
flex-direction:column;
`;
const StyledRow=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color:${(props)=>props.color};
border:0px solid blue;
width:100%;
border-bottom:${(props)=>props.bottom?'1px solid grey':''}
border-top:${(props)=>props.top?'1px solid grey':''};
border-right:${(props)=>props.edge?'1px solid grey':''};
border-left:${(props)=>props.edge?'1px solid grey':''};
height:${(props)=>props.shorter?'40px':'60px'};
`;
const StyledCell=styled.div`
display:flex;
justify-content:center;
align-items:center;
min-width:20px;
border-bottom:${(props)=>props.border?'1px solid grey':'0px'}
font-size:12pt;
width:20%;
border-top:${(props)=>props.top?'1px solid grey':''};
border-right:${(props)=>props.edge?'1px solid grey':''};
border-left:${(props)=>props.edge?'1px solid grey':''};
border-bottom:${(props)=>props.bottom?'1px solid grey':''};
height:99%;
 
`;
const MarginCell=styled.div`
width:20px;
border:0px solid black;

`;


 
const Titles=()=>{
    return(
    <StyledRow
        color={c.ThemeColor.general.lightPink}
        bottom edge top
    >
        <MarginCell/>
        <StyledCell >
            Item
        </StyledCell>
        <StyledCell >
            Item Name
        </StyledCell>        
        <StyledCell >
            Color
        </StyledCell>        
        <StyledCell >
            Qty
        </StyledCell>
        <StyledCell >
            Price
        </StyledCell>
        <MarginCell/>
    </StyledRow>
    );
}
const Item=({productCode,color,qty,totalCost})=>{
    console.log(productCode);
    console.log(color);
    var cost = qty * data[productCode].MAP;
    return(
        <StyledRow color='white' edge>
            <MarginCell/>
            <StyledCell bottom>
            <ItemImage 
                width='50px'
                height='50px'
                productID={productCode}
                color={color}
                index={1}
                size='contain'

            />            
            </StyledCell>
            <StyledCell bottom>
            {data[productCode].itemName}
            </StyledCell>
            <StyledCell bottom>
            <ColorBox
                productID={productCode}
                colorCode={color}
                selected={false}
                size='15px'
            />
            </StyledCell>
            <StyledCell bottom>
            {qty}
            </StyledCell>
            <StyledCell bottom>
            USD {cost}
            </StyledCell>
            <MarginCell/>
        </StyledRow>
    );
}   

const TotalCost=({totalProductCost,totalQty,totalShipmentCost,finalCost})=>{


   return(
        <Fragment>
        
        <StyledRow color='white' shorter edge>
        
        <StyledCell/><StyledCell/>
        <StyledCell>
            SUBTOTAL:
        </StyledCell>
        <StyledCell>
            {totalQty}
        </StyledCell>
        <StyledCell>
            USD {totalProductCost}
        </StyledCell>
        </StyledRow>
        <StyledRow color='white' shorter edge bottom>
        <StyledCell/><StyledCell/>
        <StyledCell>
            SHIPPING:
        </StyledCell>
        <StyledCell>
            {totalQty} x 8
        </StyledCell>
        <StyledCell>
            USD {totalShipmentCost}
        </StyledCell>
        </StyledRow>
        <StyledRow color='rgb(239,238,242)' bottom>
        <StyledCell/><StyledCell/>
        <StyledCell>
            TOTAL:
        </StyledCell>
        <StyledCell/>
        <StyledCell>
            USD {finalCost}
        </StyledCell>
        </StyledRow>
        </Fragment>
   ); 
}

const ItemList=({itemList})=>{
    var result=[];
    for(var id in itemList){
        console.log(id);
        console.log(itemList[id].name);
        result.push (
            <Item
                productCode={itemList[id].name}
                qty={itemList[id].qty}
                color={itemList[id].color}
            />
        )
    }
    return result;
}
export const ShoppingCartTable=({cartData,totalProductCost,totalQty,totalShipmentCost,finalCost})=>{

    return(
        <Wrapper>
            
            {(totalQty==0)?(
            <Fragment>    
                <c.ColCenterDiv>
                    Your cart is empty
                </c.ColCenterDiv>
            </Fragment>    
            ):(
            <Fragment>  
            <Titles/>  
            <ItemList
                itemList={cartData}
            />
            
            <TotalCost
                totalProductCost={totalProductCost}
                totalQty={totalQty}
                totalShipmentCost={totalShipmentCost}
                finalCost={finalCost}
            />
 

            </Fragment>
            )}
   
        </Wrapper>
    );

}

