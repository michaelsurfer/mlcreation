import React,{Component} from 'react';
import styled from "styled-components";
import {CommentBox} from "../components/comments/CommentBox";
import {CommentHeader} from "../components/comments/CommentBox";
import data from "../asset/ProductList.json"; 

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

class MakeCommentView extends Component{

constructor(props){
    super(props);

    this.state={
        rating:1,
        comment:"",
        selectedColor:this.props.color
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

}

render(){
    return(
        <Wrapper>
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
        </Wrapper>
    );
}

}

export default MakeCommentView;