import React,{Component} from 'react';
import styled from "styled-components";
import {CommentBox} from "./CommentBox";
import {CommentHeader} from "./CommentBox";

const Wrapper=styled.div`
display:flex;
width:100%;
background-color:white;
justify-content:center;
align-items:center;
height:300px;
border:1px solid red;

`;

const Table=styled.table`
width:500px;
border-collapse: collapse;
 `;

export const CommentList=({type,productID,json})=>{
/*
type: all
json :
{
    "AB":{"totalComments":4,"avgRating":4},
    "ABC":{"totalComments":3,"avgRating":3}}
}

type:individual
json :
{
"f681063d-42bc-4ac8-b07d-c4036ab546bb":{"comment":"thisisgreat","color":"R","rating":"2","time":"time"},
"bd6255d3-4a28-4c06-b655-2472fc1366d5":{"comment":"thisisgreat","color":"R","rating":"3","time":"time"},
"c6324507-cff1-4b6d-9727-2a6086dc05ec":{"comment":"thisisgreat","color":"R","rating":"5","time":"time"}}
}


*/
var result=[];

if(type=='all'){
    for(var item in json){
        result.push(
          <CommentBox
            type='all'
            productID={item}
            totalComment={json[item].totalComments}
            noOfStar={json[item].avgRating}
        />
         );
    }
}else{
    for(var item in json){
        console.log(item);
        result.push(
          <CommentBox
            type='individual'
            productID={productID}
            color={json[item].color}
            comment={json[item].comment}
            noOfStar={json[item].rating}
        />
         );
    }

}        

return (
    <Wrapper>
    <Table>
    <CommentHeader type={type}/>    
    {result}
    </Table>
    </Wrapper>
    );
}


