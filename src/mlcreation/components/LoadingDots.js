import React, { Component } from "react";
import styled, { keyframes } from "styled-components";


const Wrapper=styled.div`
width:100%;
height:50px;
display:flex;
justify-content:center;
align-items:center;

`;
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 5px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
class LoadingDots extends Component {
  render() {
    var title = this.props.title
    return (
      <Wrapper>  
      <b>{title}</b>    
      <DotWrapper>
        <Dot delay="0s" />
        <Dot delay=".1s" />
        <Dot delay=".2s" />
      </DotWrapper>
      </Wrapper>
    )
  }
}
export default LoadingDots