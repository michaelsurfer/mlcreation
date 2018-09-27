import React,{Component} from 'react';
import {observer,inject} from "mobx-react";
import * as c from "./css_dialog.js"; 
 

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
        result.push(<c.Button onClick={()=>this.props.store.closeDialog()}>Close</c.Button>);
    };
    if(showActionButton){
        result.push(<c.Button onClick={()=>this.props.callbackF}>Next</c.Button>);
    };
    return(
      <c.ButtonDiv>
          {result}
      </c.ButtonDiv>  
    );
}
render(){
    var show = this.props.store.generalDialog.show;
    var message = this.props.store.generalDialog.message;
 
    return(
        <div>
        {this.props.store.generalDialog.show &&   
        <c.ModalWrapper>
            <c.Modal>
                <c.TitleText>{message}</c.TitleText>
                {this.renderButton()}     
            </c.Modal>
        </c.ModalWrapper>
        }
        </div>
    );
}

}

export default Dialog;