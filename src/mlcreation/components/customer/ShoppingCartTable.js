import styled from "styled-components";
import React,{Component,Fragment} from 'react';
import QuantitySelection from '../QuantitySelection';
import data from "../../asset/ProductList.json";
import * as c from "../../common/Css2";
import {ItemImage} from "../../components/ItemImage";
import {ColorBox} from "../colorPicker/ColorBox";
import {observer,inject} from "mobx-react";



const Wrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:70vh;
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
const DeleteButton=styled.button`

`

 
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
            Delete
        </StyledCell>
        <StyledCell >
            Price
        </StyledCell>
        <MarginCell/>
    </StyledRow>
    );
}
const Item=({id,productCode,color,qty,totalCost,removeFromCart,increaseQuantity,decreaseQuantity})=>{
    console.log(productCode);
    console.log(color);
    var cost = qty * data[productCode].MSRP;
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
            <QuantitySelection
                width='100px'
                qty={qty}
                id={id}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
            />
            
            </StyledCell>
            <StyledCell bottom>
            <DeleteButton
                onClick={()=>removeFromCart(id)}
            >Delete</DeleteButton>
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
        
        <StyledCell/>
        <StyledCell/>
        <StyledCell>
            SUBTOTAL:
        </StyledCell>
        <StyledCell>
            {totalQty}
        </StyledCell>
        <StyledCell/>

        <StyledCell>
            USD {totalProductCost}
        </StyledCell>
 
        </StyledRow>
        <StyledRow color='white' shorter edge bottom>
        <StyledCell/>
        <StyledCell/>
        <StyledCell>
            SHIPPING:
        </StyledCell>
        <StyledCell>
            {totalQty} x 8
        </StyledCell>
        <StyledCell/>

        <StyledCell>
            USD {totalShipmentCost}
        </StyledCell>
        </StyledRow>
        <StyledRow color='rgb(239,238,242)' bottom>
        <StyledCell/>        <StyledCell/>

        <StyledCell>
            TOTAL:
        </StyledCell>
        <StyledCell/>

        <StyledCell/>
        <StyledCell>
            USD {finalCost}
        </StyledCell>
        </StyledRow>
        </Fragment>
   ); 
}

const ItemList=({itemList,removeFromCart,increaseQuantity,decreaseQuantity})=>{
    var result=[];
    for(var id in itemList){
        console.log(id);
        console.log(itemList[id].name);
        result.push (
            <Item
                id={id}
                productCode={itemList[id].name}
                qty={itemList[id].qty}
                color={itemList[id].color}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
            />
        )
    }
    return result;
}


@inject('store')
@observer
class ShoppingCartTable extends Component{
    constructor(props){
        super(props)        
        this.removeFromCart=this.removeFromCart.bind(this);
        this.increaseQuantity=this.increaseQuantity.bind(this);
        this.decreaseQuantity=this.decreaseQuantity.bind(this);


    }

    removeFromCart(id){
        console.log("remove from cart "+id)
        this.props.store.removeFromCart(id)
    }

    increaseQuantity(id){
        console.log("increaseQuantity :"+id)
        this.props.store.Cart.increaseFromCart(id)

    }
    decreaseQuantity(id){
        console.log("decreaseQuantity :"+id)
        this.props.store.Cart.decreaseFromCart(id)

    }

    render(){
        var cartData = this.props.cartData
        var totalProductCost = this.props.totalProductCost
        var totalQty = this.props.totalQty
        var totalShipmentCost = this.props.totalShipmentCost
        var finalCost = this.props.finalCost
 
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
                    removeFromCart={this.removeFromCart}
                    increaseQuantity={this.increaseQuantity}
                    decreaseQuantity={this.decreaseQuantity}

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
}

 


export default ShoppingCartTable;