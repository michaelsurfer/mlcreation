import React, { Component } from 'react';
import styled from "styled-components";
import Transactions from '../components/Transactions';
import * as c from '../common/Css2.js';
import {observer,inject} from "mobx-react";
import {apis} from '../common/config.js';

@inject('store')
@observer
class TransactionView extends Component{
  constructor(props){
    super(props);
    this.state={
      transactionHistory:[],
      loaded:false
    }
  }
  componentDidMount(){
    var email = this.props.store.retailerData.email.value;
    //fetch transaction History
     fetch(apis.transactionHistory.endpoint+email)
    .then(response=>response.json())
    .then(data=>{

      console.log(data.data);
       this.setState({
         transactionHistory:data.data,
         loaded:true
       }
       );
    });
  }

  render(){
    var transactions=this.state.transactionHistory;
    return(
      <div>
      {(this.state.loaded) &&
        <Transactions transactions={transactions}/>
      }
      </div>
    );
  }

}
export default TransactionView
