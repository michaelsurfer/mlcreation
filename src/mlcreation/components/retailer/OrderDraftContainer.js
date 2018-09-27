import React,{Component} from 'react';
import {observer,inject} from "mobx-react";
import {OrderDraftHeader} from './TableGroup/OrderDraftHeader';
import {OrderDraftBody} from './TableGroup/OrderDraftBody';

import styled from "styled-components";

const Wrapper=styled.div`
width:80%;
`

@inject('store')
@observer
class OrderDraftContainer extends Component{


    render(){
        return(
            <Wrapper>
                <OrderDraftHeader/>
                <OrderDraftBody/>
            </Wrapper>
        );
    }


}

export default OrderDraftContainer