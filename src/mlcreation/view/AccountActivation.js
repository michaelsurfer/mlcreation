import React, { Component } from 'react';
import {apis} from '../common/config.js';
import * as c from '../common/Css2.js';
import GeneralDialog from '../components/dialog/GeneralDialog'; 
import {observer,inject} from "mobx-react";
import Loading from '../components/dialog/Loading'; 

const Wrapper=c.ColCenterDiv.extend`
background-color:${c.ColorSchema.skyBlue.color};
padding:20px;
height:400px;
`;


@inject('store')
@observer
class AccountActivation extends Component{

    constructor(props){
      super(props);
       this.closeDialog=this.closeDialog.bind(this);
    }

    componentDidMount(){
        var email = this.props.email
        var code = this.props.code
        this.props.store.Retailer.accountActivation(email,code)


    }
    closeDialog(){
          this.props.store.Retailer.closeDialog()
      }


     render(){
         return(
      <Wrapper>
        <Loading
          show={this.props.store.Retailer.loading}
        />
        <GeneralDialog
          show = {this.props.store.Retailer.showDialog}
          message = {this.props.store.Retailer.dialogMessage}
          buttonType='close'
          buttonText='CLOSE'
          callback={this.closeDialog}
          buttonLink='/'
        />
    
      </Wrapper>
         )
    }



}    

export default AccountActivation;