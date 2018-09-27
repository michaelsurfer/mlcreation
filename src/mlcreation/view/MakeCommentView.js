import React,{Component,Fragment} from 'react';
import styled from "styled-components";
import {CommentBox} from "../components/comments/CommentBox";
import {CommentHeader} from "../components/comments/CommentBox";
import data from "../asset/ProductList.json"; 
import {apis} from '../common/config.js';
import Dialog from "../components/dialog/Dialog";
import {observer,inject} from "mobx-react";
import {GeneralMessageView} from "./GeneralMessageView";
 
const Wrapper=styled.div`
display:flex;
flex-direction:column;
width:100%;
height:500px;
justify-content:center;
align-items:center;
`;

const Table=styled.table`
border-collapse: collapse;
width:70%;
background-color:rgb(242,242,242);
border:1px solid grey;
`;

const SubmitButton = styled.button`

background-color:black;
color:${(props)=>props.disabled?'grey':'white'}
width:70%;
font-size:20px;
text-align: center;
vertical-align: middle;
margin-top:30px;
`;


@inject('store')
@observer
class MakeCommentView extends Component{

constructor(props){
    super(props);
     

    this.state={
        rating:1,
        comment:"",
        selectedColor:data[this.props.productID].color[0],
        showThanksMessage:false
    };
    this.callbackF=this.callbackF.bind(this);
    this.updateCommentCallbackF=this.updateCommentCallbackF.bind(this);
    this.pickColorCallbackF=this.pickColorCallbackF.bind(this);

}
callbackF=(e)=>{
    console.log("callbackF");
    console.log(e.rating)
    //var rating = e.target.id;
    var rating = e.rating
    this.setState({rating:rating});
}
updateCommentCallbackF=(e)=>{
    console.log("updateCommentCallbackF");

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
                this.setState({showThanksMessage:true})
               });
          }
      });

}

render(){
    var itemJson = data[this.props.productID];

    if(this.state.showThanksMessage){
        return (
            <Wrapper>
                <GeneralMessageView
                    message='Thanks for your comment !'
                    link='/'
                    linkTitle='Back to Home'
                />
            </Wrapper>
        )
    }

    return(
        <Wrapper>
        <Dialog/>    
        {itemJson?(
        <Fragment>   
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
        <tr>
    
        </tr>
 
        </Table>
        {this.state.comment == '' ?(
            <SubmitButton disabled>Submit</SubmitButton>
        ):(
            <SubmitButton onClick={()=>this.submit()}>Submit</SubmitButton>

        )}
         </Fragment>    
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