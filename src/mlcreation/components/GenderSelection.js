import React, { Component , Fragment} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import {Link} from '../common/Css2';

const Wrapper=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:70vh;
border:1px solid;

`
const Row=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;
border:1px solid;
`

const Title=styled.label`
font-size:20pt;
margin-top:100px;
margin-bottom:100px;
border:1px solid;

`

const GenderBox=styled(Link)`
width:300px;
height:300px;
border:1px solid;
display:flex;
justify-content:center;
align-items:center;
margin:100px;
`

class GenderSelection extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var productID=this.props.productID
        return(
            <Wrapper>
                <Title>This product support both gender</Title>
                <Row>
                    <GenderBox
                    to={'/product/g/'+productID}
                    >FEMALE</GenderBox>
                    <GenderBox
                    to={'/product/m/'+productID}
                    >MALE</GenderBox>
                </Row>
            </Wrapper>
        )
    }
}

export default GenderSelection;;