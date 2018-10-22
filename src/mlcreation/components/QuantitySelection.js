import React,{Component} from 'react';
import styled from "styled-components";


const Wrapper=styled.div`
width:${(props)=>props.width}
display:flex;
justify-content:space-between;
align-items:center;

`

const AdjustBox=styled.div`
width:20px;
height:20px;
display:flex;
justify-content:center;
align-items:center;
font-size:20px;
color:white;
background-color:black;
`

const QtyText=styled.div`
font-color:black;
font-size:15px;
`

class QuantitySelection extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <Wrapper width={this.props.width}>
            <AdjustBox
                onClick={()=>this.props.increaseQuantity(this.props.id)}
            >+</AdjustBox>
            <QtyText>
            
            <input value={this.props.qty} style={{'width':'20px'}}/>
            </QtyText>
            <AdjustBox
                onClick={()=>this.props.decreaseQuantity(this.props.id)}
            >-</AdjustBox>
        </Wrapper>
        )
    }

}

export default QuantitySelection