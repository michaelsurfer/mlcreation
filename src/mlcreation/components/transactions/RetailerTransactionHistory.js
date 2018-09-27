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
 

const Header=()=>{
    return(
        <Fragment>
        <Row >
            <Td center>
            Transaction Amount
            </Td>
            <Td center>
            Transaction Date
            </Td>
            <Td center>
                Detail
            </Td>
        </Row> 
        
        </Fragment>
    )
}
const Transaction=({uuid,totalCost,date})=>{
    var link = "/viewTransaction/retailer/"+uuid
    return(
        <Row>
            <Td center>{totalCost} USD</Td>
            <Td center>{date}</Td>
            <Td center><a target='blank' href={link}>VIEW</a></Td>
        </Row>
    )
}
class RetailerTransactionHistory extends Component{
    constructor(props){
        super(props)
        this.state={data:'',loaded:false}
    }
    componentDidMount(){
        var email=this.props.email
        fetch(apis.getAllTransactions.endpoint+email)
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
            var data=this.state.data.data
            console.log(data)
            if(data){
            var transactionArray=data.transactions
            var result=[]
            transactionArray.forEach(element => {
                var totalCost=element.totalCost
                var date=element.date
                var uuid=element.uuid
                result.push(
                    <Transaction 
                        uuid={uuid}
                        totalCost={totalCost}
                        date={date}
                    />
                )
            });                 
            }

            if(!data){
                return(
                <Wrapper>
                    No Transaction data yet
                </Wrapper>
                    )
            }
            return(
             <Wrapper>
                 <p>Transactions</p>
                 <Table>
                 <Header/>
                 {result}
                 </Table>
            </Wrapper>
            )
        }

    }
}
export default RetailerTransactionHistory;