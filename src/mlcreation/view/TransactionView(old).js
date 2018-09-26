import React, { Component } from 'react';
import styled from "styled-components";
import Transactions from '../components/Transactions';
import * as c from '../common/Css2.js';
import {observer,inject} from "mobx-react";
import {apis} from '../common/config.js';
import RetailerBar from '../navigation/RetailerBar';

@inject('store')
@observer
class TransactionView extends Component{
  constructor(props){
    super(props);
    this.state={
      transactionHistory:[],
      isEmpty:true,
      loaded:false
    }
  }
  componentDidMount(){
    var email = this.props.store.retailerData.email.value;
    //fetch transaction History
     fetch(apis.transactionHistory.endpoint+email)
    .then(response=>response.json())
    .then(data=>{

      if(data.state == 200){
        this.setState({transactionHistory:data.data,loaded:true,isEmpty:false});
        }else{
        this.setState({loaded:true});
        }

      })
    }
  

  render(){
    var transactions=this.state.transactionHistory;
    console.log(transactions);
    return(
      <div>
      <RetailerBar/>
      {(this.state.loaded) &&
        <Transactions transactions={transactions} isEmpty={this.state.isEmpty}/>
      }
      </div>
    );
  }

}
export default TransactionView
