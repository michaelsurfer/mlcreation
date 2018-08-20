import React, { Component } from 'react';
import styled from "styled-components";
import * as c from '../common/Css2.js';
import {apis} from '../common/config.js';


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
          <p>{item.orderNo}</p>
        );
      })

    return result;
  }

  render(){
    var history = this.props.transactions;
    return(
      <div>
        {this.renderTable(history)}
      </div>
    );
  }


}


export default Transactions;
