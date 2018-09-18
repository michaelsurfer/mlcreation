import {StripePayment} from '../../stripe/StripePayment';
import React,{Component} from 'react';
import styled from "styled-components";
import {observer,inject} from "mobx-react";
import PaymentModalView from "./PaymentModalView";
 
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
background:white;
width:500px;
height:600px;;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`;

@inject('store')
@observer
class PaymentModal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <ModalWrapper display={this.props.store.showPaymentModal}>
        <Modal>
        <PaymentModalView/>
        </Modal>
        </ModalWrapper>
        )
    }
    render2(){
        return(

            <ModalWrapper display={this.props.store.showPaymentModal}>

            <Modal>
            
            <StripePayment
                total={100}
                shipmentCost={30}
                orderNo="order no"
                firstName="Michael"
                lastName="Wong"
                address="This is an address"
                phone="+852 12345678"
                email="test@test.com"
            />
            
            </Modal>
            </ModalWrapper>

        );
    }

}



export default PaymentModal;

