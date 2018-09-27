import ShipmentCost from "../../asset/ShipmentCost.json";
import React, {Fragment, Component } from 'react';
import styled from "styled-components";


const Table = styled.table`
border-collapse: collapse !important;
border:0px solid grey;
width:100%;
padding:0px 0px !important;
margin:0px !important;
border-spacing: 0px 0px;
`;
const OutterTd=styled.td`
border-collapse: collapse !important;
border:0px solid grey;
text-align: center; 
vertical-align: middle;
height:44px;
padding:0px 0px !important;
margin:0px !important;
`;

const StyledTh=styled.th`
border-collapse: collapse !important;
border:1px solid grey;
text-align: center; 
vertical-align: middle;
height:44px;
background-color:rgb(234,221,220);
padding:0px 0px !important;
margin:0px !important;
`;
const StyledTr=styled.tr`
border-collapse: collapse !important;
`;
const StyledTd=styled.td`
border-collapse: collapse !important;
border:1px solid grey;


text-align: center; 
vertical-align: middle;
height:44px;
padding:0px 0px !important;
margin:0px !important;
`;

const TableHeader=styled.div`
display:flex;
margin-bottom:25px;
width:100%
background-color:rgb(252,203,191);
height:60px;
align-items:center; 
justify-content:center;
border-bottom:1px solid grey;
`;

const CostPair=({kg})=>{
     var cost = "US$ "+ShipmentCost[kg];
    
    return(
        <Fragment>
            <StyledTd>
                {kg+" KG"}
            </StyledTd>
            <StyledTd>
                {cost}
            </StyledTd>
        </Fragment>
    )
}

const SubTable=({start,end})=>{
    var result=[];
    var i;
    for(i=start;i<=end;i++){
        result.push(
        <StyledTr>
            <CostPair kg={i}/>
        </StyledTr>
        );
    }
    return (
        <Table>
            <TitlePair/>
            {result}
        </Table>
    )
}
const Row=({w1,w2,w3})=>(
    <tr>
    <CostPair kg={w1}/>
    <CostPair kg={w2}/>
    <CostPair kg={w3}/>
    </tr>
)

const TitlePair=()=>(
    <Fragment>
    <StyledTh>Weight</StyledTh><StyledTh>Cost (USD)</StyledTh>
    </Fragment>
)
export const CostTable=()=>{


    return(
        <Table>
            <tr>
            <StyledTd colSpan={8}>
                <TableHeader>
                    <b>ML Creation Global Air Freight List</b>
                </TableHeader>
             </StyledTd>
            </tr>
            <tr>
            <StyledTh colSpan={8}>
                From 2 kg to 19.5kg
            </StyledTh>
            </tr>
             <tr>
            <OutterTd >    
            <SubTable start={2} end={10}/>
            </OutterTd>
            <OutterTd>
            <SubTable start={2.5} end={10.5}/>
            </OutterTd>   
            <OutterTd>
            <SubTable start={2} end={10}/>
            </OutterTd>   
            <OutterTd>
            <SubTable start={2} end={10}/>
            </OutterTd>   
            </tr>
            <StyledTh colSpan={8}>
                From 20 kg, USD 5.5 dollars per kg
            </StyledTh>
            <tr>
            <OutterTd>    
            <SubTable start={20} end={21}/>
            </OutterTd>
            <OutterTd>    
            <SubTable start={21} end={22}/>
            </OutterTd>
            <OutterTd>    
            <SubTable start={22} end={23}/>
            </OutterTd>
            <OutterTd>    
            <SubTable start={23} end={24}/>
            </OutterTd>
            </tr>
        </Table>
    );
}
