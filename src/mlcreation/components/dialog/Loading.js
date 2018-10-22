import React,{Component} from 'react';
import styled from "styled-components";
import * as c from "./css_dialog.js"; 




class Loading extends Component{

    constructor(props){
        super(props)
    }

    render(){
        var show = this.props.show
        return(
            <div>
                {show &&
                    <c.ModalWrapper>
                        <c.Modal>
                            <c.TitleText>Loading</c.TitleText>
                        </c.Modal>
                    </c.ModalWrapper>
                }
            </div>
        )
    }

}

export default Loading