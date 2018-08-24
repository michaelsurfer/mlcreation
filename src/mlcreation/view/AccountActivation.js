import React, { Component } from 'react';
import {apis} from '../common/config.js';
import * as c from '../common/Css2.js';


const Wrapper=c.ColCenterDiv.extend`
background-color:${c.ColorSchema.skyBlue.color};
padding:20px;
height:400px;
`;



class AccountActivation extends Component{

    constructor(props){
      super(props);
      this.state={
          loaded:false,
          verified:false,
          error:""
      };  
    }

    componentDidMount(){
        var params = this.props.email+"/"+this.props.code;
        fetch(apis.activation.endpoint+params)
        .then((response)=>{
            if(!response.ok){
                response.text().then((text)=>{
                throw Error(text);}
            ).catch(error=>{
                this.setState({
                    loaded:true,
                    verified:false,
                    error:error.message
                });
            })
            }else{
                this.setState({
                    loaded:true,
                    verified:true
                });
            }
        });
    }
     render(){
         console.log(this.state);
        if(this.state.loaded){
            if(this.state.verified){
                return(
                <Wrapper>
                <label>Account Verified</label>
                <c.Link to="/YourAccount">Login Now</c.Link>
                </Wrapper>
                );
            }else{
                return(
                <Wrapper>
                <label>Cannot activate your account</label>
                <label>Reason : {this.state.error}</label>
                </Wrapper>
                );
            }
        }else{
            return(
            <Wrapper>
            <label>Loading</label>
            </Wrapper>
            );  
        }
   
    }



}    

export default AccountActivation;