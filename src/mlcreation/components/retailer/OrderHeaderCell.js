import {observer,inject} from "mobx-react";
import React,{Component} from 'react';
import * as c from './Css.js';

const colSpanJson={
    
    takeOrder:{
        firstHalf:6,
        secondHalf:8,
        full:14
    },
    

    confirm:{
        firstHalf:4,
        secondHalf:5,
        full:9
    },
    invoice:{
        firstHalf:2,
        secondHalf:2,
        full:4,
        firstQuarter:1,
        secondQuarter:3
    }
}

 
@inject('store')
@observer
class OrderHeaderCell extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var _colspan;
        var textAlign=this.props.textAlign;
        var fontSize=this.props.fontSize;
        var fontFamily=this.props.fontFamily;
        var color=this.props.color;
        var verticalAlign=this.props.verticalAlign;
        var type=this.props.type;
        var width;
        
        if(this.props.colspan=='firstHalf'){
            width='50%';
        }else if(this.props.colspan=="secondHalf"){
            width='50%';
        }else if(this.props.colspan=="full"){
            width='100%';
        }else if(this.props.colspan=="firstQuarter"){
            width='25%';
         }else if(this.props.colspan=="secondQuarter"){
            width='75%';
         }
        
 
        _colspan=colSpanJson[type][this.props.colspan];

        var tdStyle;
        if(this.props.firstCell){
            tdStyle={
                'background-color':color,
                'border':'1px solid grey',
                'vertical-align':verticalAlign,
                'text-align':textAlign,
                'padding':'5px',
                'width':width
            } 
        }else{
            tdStyle={
                'background-color':color,
                'border':'1px solid grey',
                'vertical-align':verticalAlign,
                'text-align':textAlign,
                'padding':'5px',
             }
        }
   

        return(        
        <td colspan={_colspan} 
         style={tdStyle}>
        <c.StyledLabel
        size={fontSize}
        family={fontFamily}
        >
        {this.props.children}
        </c.StyledLabel>    

  
        </td>);
    }

}

export default OrderHeaderCell;