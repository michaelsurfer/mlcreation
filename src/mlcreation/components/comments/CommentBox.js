import React, { Component ,Fragment} from 'react';
import styled from "styled-components";
//import productData from "../../asset/ProductList.json";
import {RatingStar} from "./RatingStar";
import productData from "../../asset/ProductList.json";
import ColorPicker from "../colorPicker/ColorPicker";
import {NavLink} from "react-router-dom";
import {ItemImage} from "../../components/ItemImage";
import * as c from "../../common/Css2";

const StyledDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;
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
background-color:${(props)=>props.colored?'rgb(225,200,201)':'white'}
`;
const CommentTextarea=styled.textarea`
width:90%;
height:100px;
`

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
            <StyledTd colored><TitleText>Product</TitleText></StyledTd>

            <StyledTd colored><TitleText>Product Name</TitleText></StyledTd>
            <StyledTd colored><TitleText>Rating</TitleText></StyledTd>

            {type=='all'?(
            <Fragment>    
            <StyledTd colored><TitleText>No of Comments</TitleText></StyledTd>
            <StyledTd colored></StyledTd>
            </Fragment>
            ):(
            <Fragment>    
            <StyledTd colored><TitleText>Comments</TitleText></StyledTd>
            <StyledTd colored><TitleText>Date</TitleText></StyledTd>
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

     

     if(type=='individual'){

     }else{
        color= selectedColor;
     }

     if(!color || color == ""){
        //use the first color in product json as default
        color = productData[productID].color[0];
     }   

     return(
        <tbody>
            <tr>
            <StyledTd>
            {(type=="makeComment")?(
                <StyledDiv>
                <ItemImage 
                width='100px'
                height='100px'
                productID={productID}
                color={color}
                index={1}
                size='contain'

                />
                <ColorPicker
                    productID={productID}
                    selectedColor={color}
                    colorArray={colorArray}
                    pickColorCallbackF={pickColorCallbackF}
                />
                </StyledDiv>
            ):(
                <a href={"/product/"+productID}>
                <ItemImage 
                    width='100px'
                    height='100px'
                    productID={productID}
                    color={color}
                    index={1}
                    size='contain'

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
                <RatingStar 
                noOfStar={noOfStar} callbackF={callbackF}
                interactive={true}

                />
                </StyledTd>
            ):(
                <StyledTd>
                <RatingStar noOfStar={noOfStar} 
                callbackF={callbackF}
                interactive={false}
                />
                
                </StyledTd>
            )}
     

            
            {(type=='all') &&  
                <Fragment>
                <StyledTd>              
                <c.Link to={"/comment/"+productID}>
                    {totalComment}
                </c.Link>
                </StyledTd>
                <StyledTd>
                    <c.Link
                    to={"/makeComment/"+productID}>
                    leave comment</c.Link>
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
                        <CommentTextarea 
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
