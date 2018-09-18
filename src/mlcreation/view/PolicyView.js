import React, { Component } from 'react';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {CostTable} from "../components/shipment/CostTable.js";

const OutterWrapper=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
background-color:${c.ThemeColor.general.policyBG};
 `;

const Wrapper=styled.div`
white-space:pre-wrap;
width:70%;
border:0px solid red;
`;
 
const PatentFooter=styled.div`
width:100%;
height:59px;
background-color:rgb(252,203,191);
align-items:center; 
justify-content:center;
display:flex;
margin-top:50px;
margin-bottom:50px;
border-bottom:1px solid black;
`;
const TableWrapper=styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
border:0px solid blue;

`;
const Title=styled.p`
margin-top:50px;
font-weight:bold;
`;

const Desc=styled.p`
font-weight:${(props)=>props.bold?'bold':''}
`;
 
const List=styled.ul`
padding-left: 15px;
list-style-position: outside;
`;

const ListItem=styled.li`
    margin-top:10px;
    line-height: 2;
    list-style-position: outside;

`

export const PolicyView=({type})=>{
 
if(type=='retailer'){
return(
    <OutterWrapper>
    <Wrapper>
        
    <Title>Take Order:</Title>
    
    <Desc>
    You can place and pay an order directly on our website by your credit card.
    </Desc>
    <Desc>
    The total amount of the order payment included the air freight, the air freight depends on the weight and volume of your order.
    </Desc>
    
    <Desc>
    The weight and delivery time of the order will be listed in the order. After paying the bill, we will send your order receipt to your mailbox immediately.
    </Desc>
    
    <Title>
    Delivery Time:
    </Title>    

    <Desc>
    After your payment, we will deliver your order products directly to your designated delivery address within 5 working days, order delivery time for remote areas will be 7-10 working days.
    </Desc>

    <Title>
    Air Freight:
    </Title>
     
    <Desc>
    The total weight is 20 kilograms or more than 20 kilograms of orders, the global air freight is USD5.5 dollars per kilogram. 
    <br/>
    The total weight from 2 to 19 kilograms of orders, the global air freight is as follows: (見圖表)
    </Desc>
    <TableWrapper>
    <CostTable/>
    </TableWrapper>
    <Title>
    1-Year Warranty & Conditions
    </Title> 

    <Desc>
    ML Creation products are of the highest quality and come with a 1-year worldwide manufacturing warranty.
    </Desc>

    <Desc>
    Our warranty is only valid for customers who have purchased thru authorized retailers. 
    </Desc>

    <Desc>
    If the product is discovered faulty, it should be returned with the proof of purchase from a ML Creation Authorized Retailer within the warranty period.
    </Desc>

    <Desc>>
    Once the fault is confirmed we will replace the product free of charge. If you purchased your product on our web shop we already have your proof of purchase on file.
    </Desc>
    
    <Title>
    Please Note:
    </Title>
    
    <List>
    <li>ML Creation Company Ltd. products are intended for adults only.</li>
    <ListItem>We cannot accept non-defective exchanges on items that have been opened.</ListItem>
    <ListItem>Pleasure objects cannot be returned unless they are defective.</ListItem>
    <ListItem>Shipping charges will only be refunded in cases where our error caused the return.</ListItem>
    <ListItem>The warranty covers working parts that affect the function of the pleasure object. It does NOT cover cosmetic deterioration caused by fair wear and tear or damage caused by accident, misuse or neglect. Any attempt to open or take apart the pleasure object (or its accessories) will void the warranty.</ListItem>
    <ListItem>Please keep your original purchase receipt as evidence that the date of your claim falls within the warranty period.</ListItem>
    <ListItem>If upon receiving your delivery you find that the box has been damaged or opened, or content is missing, please take a photograph of the packaging with your buying receipt and send the picture to us. Once you inform us and send us the photograph, we will take up the issue directly with our shipping company or express deliver company and pursue compensation.</ListItem>
    </List>

    <Desc bold>
    You can contact us by email (susanna@mlcreationco.com) or telephone 
    (+852 97383616) for all returns and exchanges or any questions with your ML Creation product.
    </Desc>
    
    <Title>How to Return?</Title>
    <Desc>All defective products falling under the company’s 1 year warranty policy must be returned with proof of purchase and date clearly marked from retailer’s register (may not be written in).</Desc>
    <Desc>All products must be returned in a zip lock bag with return address clearly marked on return package.</Desc>
    <Desc>Customers are responsible for shipping costs to manufacturer. ML Creation is not responsible for any lost or stolen products.</Desc> 
    <Desc>After we’ve received your product, we’ll undergo testing to determine if it’s defective. Please note, this process can take up to 72 hours from the time the product is received.</Desc>
    <Desc>If we determine that the product is defective, we will cover the cost of shipping a new product.</Desc>
    <Title>Return Address:</Title> 
    <Desc>Unit H, 8/F，BLK31, 8 Park Road, Ma Wan NT. Hong Kong</Desc>
        
    </Wrapper>
    </OutterWrapper>
    );
}else{
    return(
        <OutterWrapper>
        <Wrapper>
            
        <Title>Take Order:</Title>
        
        <Desc>
        You can place and pay an order directly on our website by your credit card.
        </Desc>
        <Desc>
        The total amount of the order payment included the air freight, the air freight is USD8 dollars for each product.
        </Desc>
        
        
        <Title>
        Delivery Time:
        </Title>    
    
        <Desc>
        After your payment, we will deliver your order products directly to your designated delivery address within 5 working days, for remote areas will be 7-10 working days.
        </Desc>

        <Title>
        1-Year Warranty & Conditions
        </Title> 
    
        <Desc>
        ML Creation products are of the highest quality and come with a 1-year worldwide manufacturing warranty.
        </Desc>
    
        <Desc>
        Our warranty is only valid for customers who have purchased thru authorized retailers. 
        </Desc>
    
        <Desc>
        If the product is discovered faulty, it should be returned with the proof of purchase from a ML Creation Authorized Retailer within the warranty period.
        </Desc>
    
        <Desc>>
        Once the fault is confirmed we will replace the product free of charge. If you purchased your product on our web shop we already have your proof of purchase on file.
        </Desc>
        
        <Title>
        Please Note:
        </Title>
        
        <List>
        <li>ML Creation Company Ltd. products are intended for adults only.</li>
        <ListItem>We cannot accept non-defective exchanges on items that have been opened.</ListItem>
        <ListItem>Pleasure objects cannot be returned unless they are defective.</ListItem>
        <ListItem>Shipping charges will only be refunded in cases where our error caused the return.</ListItem>
        <ListItem>The warranty covers working parts that affect the function of the pleasure object. It does NOT cover cosmetic deterioration caused by fair wear and tear or damage caused by accident, misuse or neglect. Any attempt to open or take apart the pleasure object (or its accessories) will void the warranty.</ListItem>
        <ListItem>Please keep your original purchase receipt as evidence that the date of your claim falls within the warranty period.</ListItem>
        <ListItem>If upon receiving your delivery you find that the box has been damaged or opened, or content is missing, please take a photograph of the packaging with your buying receipt and send the picture to us. Once you inform us and send us the photograph, we will take up the issue directly with our shipping company or express deliver company and pursue compensation.</ListItem>
        </List>
    
        <Desc bold>
        You can contact us by email (susanna@mlcreationco.com) or telephone 
        (+852 97383616) for all returns and exchanges or any questions with your ML Creation product.
        </Desc>
        
        <Title>How to Return?</Title>
        <Desc>All defective products falling under the company’s 1 year warranty policy must be returned with proof of purchase and date clearly marked from retailer’s register (may not be written in).</Desc>
        <Desc>All products must be returned in a zip lock bag with return address clearly marked on return package.</Desc>
        <Desc>Customers are responsible for shipping costs to manufacturer. ML Creation is not responsible for any lost or stolen products.</Desc> 
        <Desc>After we’ve received your product, we’ll undergo testing to determine if it’s defective. Please note, this process can take up to 72 hours from the time the product is received.</Desc>
        <Desc>If we determine that the product is defective, we will cover the cost of shipping a new product.</Desc>
        <Title>Return Address:</Title> 
        <Desc>Unit H, 8/F，BLK31, 8 Park Road, Ma Wan NT. Hong Kong</Desc>
        <PatentFooter>
            All our products' design are patented. All our products have CE(EMC),RoHS,& FCC international standards certification.
        </PatentFooter>
        </Wrapper>
        </OutterWrapper>
        );


}
}


 