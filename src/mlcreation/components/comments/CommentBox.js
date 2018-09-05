import React, { Component ,Fragment} from 'react';
import styled from "styled-components";
//import productData from "../../asset/ProductList.json";
import {RatingStar} from "./RatingStar";
import productData from "../../asset/ProductList.json";
import ColorPicker from "../colorPicker/ColorPicker";
import {NavLink} from "react-router-dom";
import {ItemImage} from "../../components/ItemImage";


const TitleText=styled.label`
font-size:20px;
`;
const CommentText=styled.label`
font-size:15px;
`;
const ProductName=styled.label`
font-size:15px;
`;

const StyledTd=styled.td`
text-align:center;
vertical-align:middle;
border:1px solid grey;
overflow:hidden;
`;

const CommentInput=styled.input`
width:100%;
max-width:100%;
display:block;
margin:0;
padding:0;
background:transparent;
`;


/*
const callbackF=(e)=>{
    console.log(e.target.id);
}
*/
export const CommentHeader =({type})=>{
    return(
        <tbody>
            <tr>
            <StyledTd><TitleText>Item</TitleText></StyledTd>

            <StyledTd><TitleText>Name</TitleText></StyledTd>
            <StyledTd><TitleText>Rating</TitleText></StyledTd>

            {type=='all'?(
            <Fragment>    
            <StyledTd><TitleText>No of Comments</TitleText></StyledTd>
            <StyledTd></StyledTd>
            </Fragment>
            ):(
            <Fragment>    
            <StyledTd><TitleText>Comments</TitleText></StyledTd>
            <StyledTd><TitleText>Date</TitleText></StyledTd>
            </Fragment>
            )}   
            
            </tr>
        </tbody>
    );
}

export const CommentBox = ({
    type, //ALL or individual
    productID,color,comment,noOfStar,date,totalComment,
    callbackF,updateCommentCallbackF,
    colorArray,pickColorCallbackF,selectedColor
}) => {

     var color = selectedColor;
     if(!color || color == ""){
        //use the first color in product json as default
        color = productData[productID].color[0];
     }   

     return(
        <tbody>
            <tr>
            <StyledTd>
            {(type=="makeComment")?(
                <div>
                <ItemImage 
                width='100px'
                height='100px'
                productID={productID}
                color={color}
                />
                <ColorPicker
                    productID={productID}
                    selectedColor={color}
                    colorArray={colorArray}
                    pickColorCallbackF={pickColorCallbackF}
                />
                </div>
            ):(
                <a href={"/product/"+productID}>
                <ItemImage 
                    width='100px'
                    height='100px'
                    productID={productID}
                    color={color}
                    index={1}
                />
                </a>
            )}

            </StyledTd>

             <StyledTd>
            {(type=='all')?(
                <ProductName>
                {productID}
                </ProductName>

            ):(           
                <ProductName>
                {productData[productID].itemName}
                </ProductName>
            )}    

             </StyledTd>
            {(type=="makeComment")?(
                <StyledTd>
                <RatingStar noOfStar={noOfStar} callbackF={callbackF}/>
                </StyledTd>
            ):(
                <StyledTd>
                <RatingStar noOfStar={noOfStar} callbackF={callbackF}/>
                </StyledTd>
            )}
     

            
            {(type=='all') &&  
                <Fragment>
                <StyledTd>              
                <CommentText>
                    {totalComment}
                </CommentText>
                </StyledTd>
                <StyledTd>
                    <NavLink
                    to={"/makeComment/"+productID}>
                    leave comment</NavLink>
                </StyledTd>
                </Fragment>
            }

            {(type=='individual') &&
                <Fragment>                
                <StyledTd>
                <CommentText>
                    {comment}
                </CommentText>
                </StyledTd>
                <StyledTd>
                    {date}
                </StyledTd>
                </Fragment>
            }

            {(type=="makeComment") &&
                <Fragment>
                    <StyledTd>
                        <CommentInput 
                        placeholder='enter your comments here'
                        value={comment}
                        onChange={updateCommentCallbackF}    
                        />
                    </StyledTd>
                    <StyledTd>
                        date
                    </StyledTd>
                    
                </Fragment>
            }

            
          </tr>   
         </tbody>
    );
}
