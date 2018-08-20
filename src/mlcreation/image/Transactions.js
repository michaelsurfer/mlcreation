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
     if(history && history.length>0){
      history.map((item,i)=>{
        result.push(
          <p>item</p>
        );
      })
    }
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
