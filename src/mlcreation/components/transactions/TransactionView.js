import React, { Component,Fragment } from 'react';
import styled from "styled-components";
import productData from '../../asset/ProductList';
import colorCode from '../../asset/ColorCode';
import {apis} from '../../common/config.js';

const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:100%;
height:80vh;
justify-content:center;
align-items:center;
`
const Table=styled.table`

border-collapse: collapse;
width:70%;
`
const Row=styled.tr`
`
const Td=styled.td`
border:1px solid grey;
text-align:${(props)=>props.center?'center':''};
background-color:${(props)=>props.colored?'rgb(222,200,200)':'white'};
`
 

const Header=({orderNo,finalCost,firstName,lastName,address,email,phone,date})=>{
    return(
        <Fragment>
        <Row >
            <Td colSpan={3}>
            Customer Name: {firstName} {lastName}
            </Td>
        </Row> 
        <Row >
            <Td colSpan={3}>
            Delivery Address: {address}
            </Td>
        </Row>   
        <Row >
            <Td colSpan={3}>
            Email: {email}
            </Td>
        </Row>  
        <Row>
            <Td colSpan={3}>
            Phone: {phone}
            </Td>
        </Row> 
        <Row>
            <Td colSpan={3}>
            Order Number: {orderNo}
             </Td>
        </Row>
        <Row>
            <Td colSpan={3}>
            Total : {finalCost} USD
            </Td>
        </Row>
        <Row>
            <Td colSpan={3}>
            Date of Payment : {date}
            </Td>
        </Row>
        <Row>
            <Td center colored>Item Name</Td>
            <Td center colored>Color</Td>
            <Td center colored>Qty</Td>
        </Row>
        </Fragment>
    )
}
const Transaction=({data})=>{
    var productID=data.name
    var color=data.color    
    var qty=data.qty
    var colorName=colorCode[color].name
    var itemName=productData[productID].itemName
    return(
        <Row>
            <Td center>{itemName}</Td>
            <Td center>{colorName}</Td>
            <Td center>{qty}</Td>
        </Row>
    )
}
class TransactionView extends Component{
    constructor(props){
        super(props)
        this.state={data:'',loaded:false}
    }
    componentDidMount(){
        var uuid=this.props.uuid
        var type=this.props.type
        fetch(apis.getTransaction.endpoint+type+"/"+uuid)
        .then((response)=>{
            if(!response.ok){
                console.log('server error')
            }else{
                response.json().then(json=>{
                    var data = json;
                    this.setState({
                        data:data,
                        loaded:true
                    })
                })
            }
        })
    }
    render(){
        if(!this.state.loaded){
            return(<p>Loading</p>)
        }else{
            var data=this.state.data
            console.log(data)

            var orderList=data.orderList
            var result=[]
            for(var item in orderList){
                 result.push(
                    <Table>
                    <Header
                    orderNo={data.orderNo}
                    finalCost={data.finalCost}
                    firstName={data.info.first}
                    lastName={data.info.last}
                    email={data.info.email}
                    address={data.info.address}
                    phone={data.info.phone}
                    date={data.date}
                    /> 
                    <Transaction data={orderList[item]}/>
                    </Table>
                )
                
            }
            return(
             <Wrapper>
                 <p>Transaction</p>
                {result}
            
            </Wrapper>
            )
        }

    }
}
export default TransactionView;