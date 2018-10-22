import React,{Component} from 'react';
import {observer,inject} from "mobx-react";
import OrderHeaders from "./OrderHeaders";



@inject('store')
@observer
class OrderHeaderContainer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.store.Payment.refreshOrderNo();
    }

    render(){
        return(
            <OrderHeaders
                {...this.props}
            />
        );
    }

}


export default OrderHeaderContainer;