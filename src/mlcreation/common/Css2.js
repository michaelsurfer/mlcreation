import styled from "styled-components";
import {NavLink} from "react-router-dom";


var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var border = '0px dashed';

export const Link=styled(NavLink)`
text-decoration:none;
color:${(props)=>props.white?'white':'black'};
padding:5px;
font-size:20px;
margin-left:10px;
margin-right:10px;
font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
`;
 
export const Line=styled.div`
height:18px;
width:100%;
margin-top:0px;
border-top:0px solid;
border-bottom:2px solid;
`;
export const ThemeColor={
g:{
  top:'rgb(223,200,200)',
  header:'rgb(222,200,200)',
  product:'rgb(255,255,255)',
  how2Use:'rgb(235,222,221)',
  how2UseImg:'rgb(222,200,200)'

},
m:{
  top:'rgb(5,100,137)',
  header:'rgb(5,100,137)',
  product:'rgb(235,239,241)',
  how2Use:'rgb(214,215,217)',
  how2UseImg:'rgb(201,202,204)'
},
general:{
  top:'black',
  policyBG : 'rgb(238,238,242)',
  orange: 'rgb(253,159,159)',
  lightPink : 'rgb(223,200,200)'
}
};
export const ColorSchema={
  m:{color:'rgb(42,99,135)'},
  g:{color:'rgb(251,160,132)'},
  general:{color:'rgb(92,190,214)'},
  titlePink:{color:'rgb(246,205,193)'},
  titleBlue:{color:'rgb(119,214,228)'},
  tdBlue:{color:'rgb(222,238,243)'},
  headerBlue:{color:'rgb(190,220,231)'},
  skyBlue:{color:'rgb(98,190,215)'},
  grey:{color:'rgb(239,238,242)'}
};

export const Form=styled.form`
width:100%;
`;
export const Table=styled.table`
border-collapse: collapse;
border:0px solid grey;
width:100%;
`;
export const Tr=styled.tr`
border-bottom:${(props)=>props.bottom?'1px solid grey':'0px'};
border-top:${(props)=>props.top?'1px solid grey':'0px'};

 `;
export const Th=styled.th`
text-align: center;
vertical-align:middle;
padding:15px;

`;
export const Td=styled.td`
text-align: center;
vertical-align:middle;
height:${(props)=>props.height};
padding:15px;
 
`;
export const Input=styled.input`
width:90%;
`;

export const RegistrationFormTitle=styled.label`
color:grey;
font-size:large;
`;

export const RegistrationFormText=styled.label`
color:black;
font-size:15px;
white-space:nowrap;
margin-left:5px;
font-family:'Helvetica';

`;

export const ButtonDiv=styled.div`
width:100%;
display:flex;
justify-content:${(props)=>props.center ? 'center' : 'space-between'};
`;

export const BasicDiv=styled.div`
display:flex;
border:${border};
border-color:${colors[Math.floor(Math.random() * colors.length)]};
 `;
export const ColPureDiv=BasicDiv.extend`
flex-direction:column;
`;
export const RowPureDiv=BasicDiv.extend`
flex-direction:row;
`;
export const AutoFullRow=BasicDiv.extend`
width:100%;
flex-direction:row;
`;
export const AutoFullCol=BasicDiv.extend`
width:100%;
flex-direction:column;
`;
export const EmptySpace=styled.div`
display:flex;
height:${(props)=>props.height}
`;
export const FullPureDiv=BasicDiv.extend`
width:100%;
flex-direction:${(props)=>props.direction};
  `;
export const ColCenterDiv=ColPureDiv.extend`
justify-content:center;
align-items:center;

`;
export const RowCenterDiv=RowPureDiv.extend`
justify-content:center;
align-items:center;
`;
