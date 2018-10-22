import React,{Component} from 'react';
import styled from "styled-components";
import * as c from "./css_dialog.js"; 




class GeneralDialog extends Component{

    constructor(props){
        super(props)
    }

    renderButton(type,text,link,callback){
        if(type == 'close'){
            return (
                <c.Button onClick={callback}>
                    {text}
                </c.Button>
            )
        }else if(type == 'link'){
            return(
                <c.Button>
                    <a href={link} >
                    {text}
                    </a>
                </c.Button>
            )
        }
    }

    render(){
        let config = this.props.config
        let show = config.show
        let message = config.message
        let type = config.buttonType
        let text = config.buttonText
        let link = config.buttonLink
        let callback = this.props.callback

        return(
            <div>
                {show &&
                    <c.ModalWrapper>
                        <c.Modal>
                            <c.TitleText>{message}</c.TitleText>
                            <c.ButtonDiv>
                            {this.renderButton(type,text,link,callback)}     
                            </c.ButtonDiv>  
                        </c.Modal>
                    </c.ModalWrapper>
                }
            </div>
        )
    }

}

export default GeneralDialog