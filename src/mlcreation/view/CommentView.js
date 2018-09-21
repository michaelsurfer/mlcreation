import React,{Component} from 'react';
import styled from "styled-components";
//import {CommentBox} from "../components/comments/CommentBox";
//import {CommentHeader} from "../components/comments/CommentBox";
import {CommentList} from "../components/comments/CommentList";
import * as c from '../common/Css2';
import {apis} from '../common/config.js';
import {observer,inject} from "mobx-react";
 

const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
border:0px solid;
min-height:600px;
`;



@inject('store')
@observer
class CommentView extends Component{
constructor(props){
    super(props);
    this.state={
      json:{},
      noComment:false
    };
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
          if(error.message='noComment'){
            this.setState({noComment:true})
          }
          //this.props.store.showDialog(error.message,true,false);
        }); 

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
          {this.state.noComment ?(
            <c.ColCenterDiv> 
            <p>There are no comment for this product yet</p>
            <c.Link to={"/makeComment/"+this.props.productID}>
            Add your comment now
            </c.Link>
            </c.ColCenterDiv>

          ):(
            <CommentList 
            type="individual"
            productID="ITS" 
            json={this.state.json}
            />
          )}
 

         </Wrapper>
    );
}



}

export default CommentView;