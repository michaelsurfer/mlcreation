import styled from "styled-components";
import React,{Component} from 'react';
import {observer,inject} from "mobx-react";
 

const ModalWrapper=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
display:${(props)=>props.display};
`;

const Modal=styled.div`
position:fixed;
background:rgb(239,238,242);
width:40%;
height:20%;
top:30%;
left:50%;
transform: translate(-50%,-50%);
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;

const ButtonDiv=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Button=styled.button`
    
`;

const TitleText=styled.label`
    font-size:large;
    padding:30px;
`;

@inject('store')
@observer
class Dialog extends Component{
constructor(props){
  super(props);
}


renderButton(){
    var showCloseButton = this.props.store.generalDialog.closeButton.show;
    var showActionButton = this.props.store.generalDialog.actionButton.show;
    var result = [];
    if(showCloseButton){
        result.push(<Button onClick={()=>this.props.store.closeDialog()}>Close</Button>);
    };
    if(showActionButton){
        result.push(<Button onClick={()=>this.props.callbackF}>Next</Button>);
    };
    return(
      <ButtonDiv>
          {result}
      </ButtonDiv>  
    );
}
render(){
    var show = this.props.store.generalDialog.show;
    var message = this.props.store.generalDialog.message;
 
    return(
        <div>
        {this.props.store.generalDialog.show &&   
        <ModalWrapper>
            <Modal>
                <TitleText>{message}</TitleText>
                {this.renderButton()}     
            </Modal>
        </ModalWrapper>
        }
        </div>
    );
}

}

export default Dialog;