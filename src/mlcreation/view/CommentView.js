import React,{Component} from 'react';
import styled from "styled-components";
//import {CommentBox} from "../components/comments/CommentBox";
//import {CommentHeader} from "../components/comments/CommentBox";
import {CommentList} from "../components/comments/CommentList";

import {apis} from '../common/config.js';
import {observer,inject} from "mobx-react";
 

const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
border:1px solid;
`;



@inject('store')
@observer
class CommentView extends Component{
constructor(props){
    super(props);
    this.state={json:{}};
}

componentDidMount(){
  this.props.store.loading=true;
  fetch(apis.getComments.endpoint+this.props.productID)
  .then((response)=>{
    this.props.store.loading=false;

    if(!response.ok){
        response.text().then(function(text){
          throw Error(text);
        }).catch(error=>{
          console.log(error.message);
          this.props.store.showDialog(error.message,true,false);});  
      }else{
        response.json().then(json=>{
            console.log(json)
            this.setState({json:json});
          });;

      }
  });
}


render(){
     return(
        <Wrapper>
         <CommentList 
      type="individual"
      productID="ITS" 
      json={this.state.json}
      />
         </Wrapper>
    );
}



}

export default CommentView;