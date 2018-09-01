import React, { Component } from 'react';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {apis} from '../common/config.js';
import ShoppingCartTable from './ShoppingCartTable';

const InnerWrapper=styled.div`
width:80%;
padding:20px;
`;
const Wrapper=styled.div`
width:100%;
background-color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;
class Transactions extends Component{
  constructor(props){
    super(props);
  }


  renderTable(history)
  {
    var result=[];
    //var history = this.state.transactionHistory;
       history.map((item,i)=>{
        result.push(
           <div>
           <p>Order No {item.orderNo}</p>
           <ShoppingCartTable type='history' history={item.orderList}/>
           </div>
        );
      })

    return result;
  }

  render(){
    var history = this.props.transactions;
    var isEmpty = this.props.isEmpty;
    return(
      <Wrapper>
      <InnerWrapper>
        {isEmpty ? (
          <p>No Transaction</p>
        ):(
          <div>{this.renderTable(history)}</div>
        )}
       </InnerWrapper>
      </Wrapper>
    );
  }


}


export default Transactions;
