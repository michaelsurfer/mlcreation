import styled from "styled-components";


export const ModalWrapper=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.6);
display:${(props)=>props.display};
`;

export const Modal=styled.div`
position:fixed;
background:rgb(239,238,242);
width:40%;
height:20%;
top:30%;
left:50%;
transform: translate(-50%,-50%);
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;

export const ButtonDiv=styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const TitleText=styled.label`
    font-size:large;
    padding:30px;
`;

export const Button=styled.button`
    
`;