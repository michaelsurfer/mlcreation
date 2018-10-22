import React,{Component} from 'react';
import Dialog from './Dialog';
import {observer,inject} from "mobx-react";
import GeneralDialog from './GeneralDialog';


@inject('store')
@observer
class DialogContainer extends Component{
    
    constructor(props){
        super(props)
        this.closeDialog=this.closeDialog.bind(this);

    }

    closeDialog(){
        this.props.store.Retailer.closeDialog()
        this.props.store.Dialog.closeDialog()
      }

    render(){
        let RetailerStoreDialogConfig = this.props.store.Retailer.dialogConfig
        let DialogStoreDialogConfig = this.props.store.Dialog.dialogConfig
        return(
            <div>
            <GeneralDialog 
            config={RetailerStoreDialogConfig}
            callback = {this.closeDialog}
            />
            <GeneralDialog 
            config={DialogStoreDialogConfig}
            callback = {this.closeDialog}

            />



            </div>
        )
    }

}

export default DialogContainer