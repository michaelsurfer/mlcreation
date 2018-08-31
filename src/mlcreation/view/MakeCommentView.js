import React,{Component} from 'react';
import styled from "styled-components";
import {CommentBox} from "../components/comments/CommentBox";
import {CommentHeader} from "../components/comments/CommentBox";
import data from "../asset/ProductList.json"; 
import {apis} from '../common/config.js';
import Dialog from "../components/Dialog";
import {observer,inject} from "mobx-react";


const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
`;

const Table=styled.table`
border-collapse: collapse;
width:60%;
background-color:rgb(242,242,242);
border:1px solid grey;
`;

const SubmitButton = styled.button`
display:flex;
background-color:black;
color:white;
width:300px;
`;


@inject('store')
@observer
class MakeCommentView extends Component{

constructor(props){
    super(props);
     

    this.state={
        rating:1,
        comment:"",
        selectedColor:data[this.props.productID].color[0]
    };
    this.callbackF=this.callbackF.bind(this);
    this.updateCommentCallbackF=this.updateCommentCallbackF.bind(this);
    this.pickColorCallbackF=this.pickColorCallbackF.bind(this);

}
callbackF=(e)=>{
    var rating = e.target.id;
    this.setState({rating:rating});
}
updateCommentCallbackF=(e)=>{
    var comment = e.target.value;
    this.setState({comment:comment});
}
pickColorCallbackF=(e)=>{
     var selectedColor=e.target.id;
     console.log("pickColorCallbackF :"+selectedColor);

    this.setState({selectedColor:selectedColor});

}
submit=()=>{
    //verify data and popup when invalid
    console.log("Submit comment with below data");
    console.log("selected color:"+this.state.selectedColor);
    console.log("comments:"+this.state.comment);
    console.log("product Code:"+this.props.productID);
    console.log("rating:"+this.state.rating);
 
    //var params =this.props.productID+"/"+this.state.selectedColor+"/"+this.state.comment+"/"+this.state.rating;
    fetch(apis.leaveComment.endpoint,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
            
                productID:this.props.productID,
                comment:this.state.comment,
                rating:this.state.rating,
                color:this.state.selectedColor
            
        }),

    })
    .then((response)=>{
        //this.props.store.loading=false;
    
        if(!response.ok){
            response.text().then(function(text){
              throw Error(text);
            }).catch(error=>{
              console.log(error.message);
              //this.props.store.showDialog(error.message,true,false);
            });  
          }else{
            response.text().then(json=>{
                console.log(json)
               });
          }
      });

}

render(){
    var itemJson = data[this.props.productID];



    return(
        <Wrapper>
        <Dialog/>    
        {itemJson?(
        <div>
        <Table>   
        <CommentHeader/>     
        <CommentBox
            productID={this.props.productID}
            type="makeComment"
            comment={this.state.comment}
            callbackF={this.callbackF}
            updateCommentCallbackF={this.updateCommentCallbackF}
            noOfStar={this.state.rating}
            pickColorCallbackF={this.pickColorCallbackF}
            selectedColor={this.state.selectedColor}
            colorArray={data[this.props.productID].color}
        />
        </Table>
        <SubmitButton onClick={()=>this.submit()}>Submit</SubmitButton>
        </div>
        ):(
        <div>
            Item not found
        </div>    
        )}
 

        </Wrapper>
    );
}

}

export default MakeCommentView;