import React,{Component} from 'react';
import {observer,inject} from "mobx-react";
import * as c from "./css_dialog.js"; 
import {Redirect} from "react-router";


@inject('store')
@observer
class SelectGenderDialog extends Component{
constructor(props){
  super(props);
  this.state={
      redirect:false,
      gender:""
    }
}

redirect(gender){
    console.log("called");
    this.setState({
        redirect:true,
        gender:gender
    });
}

render(){
     var show = this.props.store.showSelectGenderDialog.show;
     var productID = this.props.store.showSelectGenderDialog.productID;
    if(show && this.state.redirect){
        this.setState({redirect:false});
    return(<Redirect to={"/product/"+this.state.gender+"/"+productID} />
    )    
    }


    return(
        <div>
        {show &&   
        <c.ModalWrapper>
            <c.Modal>
                <c.TitleText>This product support both gender</c.TitleText>
                <c.ButtonDiv>
                <c.Button onClick={()=>this.redirect('m')}>
                Male
                </c.Button>
                <c.Button onClick={()=>this.redirect('f')}>
                Female
                </c.Button>
                </c.ButtonDiv>
            </c.Modal>
 
        </c.ModalWrapper>
        }
        </div>
    );
}

}

export default SelectGenderDialog;