import React,{Component} from 'react';
import styled from "styled-components";
import data from "../asset/ProductList.json";
import itemImg from '../image/item2.png';



const ColorSchema={
  title:{color:'rgb(246,205,193)'},
  titleBlue:{color:'rgb(119,214,228)'},
  footerBlue:{color:'rgb(190,220,231)'},
  price:{color:'rgb(222,238,243)'},
  product:{color:'rgb(247,247,172)'},

};
const Table=styled.table`
border-collapse: collapse;
border:1px solid grey;

`;


const StyledImg=styled.img`
  width:99;
`;

const ConfirmButton=styled.button`
background-color:rgb(240,160,143);
padding:10px;
`;


const StyledTh=styled.td`
  background-color:${(props)=>props.color ? (ColorSchema[props.color].color):'white'};
  border:1px solid grey;
  font-size:15px;
  margin:0px;
`

const StyledButtonBar=styled.div`
   display:flex;
  justify-content:space-between;
 `

class ProductTable extends Component{
  constructor(props)
  {
    super(props);
    this.state={productData:[],show:true,showConfirmForm:false}
  }

  componentDidMount()
  {
    var newCart=[];

     //check whether session data exist
    var sessionData = JSON.parse(sessionStorage.getItem("retailerOrder"));
    if(!sessionData){
      data.map((item,i)=>{
        var json=item;
        json.qty=0;
        newCart.push(json);
      });
    }else{
      newCart=sessionData;
    }
    console.log(newCart);
    this.setState({productData:newCart});
  }
  resetAllItem(){
    const cart = this.state.productData;
    cart.map((item,i)=>{

            cart[i].qty = 0;

    });
    this.setState({productData:cart});
  }
  resetItem(id){
    const cart = this.state.productData;
    cart.map((item,i)=>{
          if(item.id == id){
            cart[i].qty = 0;
            return;
          }
    });
    this.setState({productData:cart});
  }

  getTotalQty(){
    var total=0;
    this.state.productData.map((d,i)=>{
      total=total+parseInt(d.qty);
    });
    return total;
  }
  getTotalCost(){
    var total=0;
    this.state.productData.map((d,i)=>{
      total=total+parseInt(d.qty)*parseInt(d.retailPrice);
    });
    return total;

  }

  updateItem(e,id){
    var qty = e.target.value;
    var newCart=this.state.productData;

    newCart.map((item,i)=>{
      if(id == item.id){
        if(qty){newCart[i].qty = qty;}
       }
    });

    this.setState({productData:newCart});
    }


  confirmOrder(){
    var data = JSON.stringify(this.state.productData);
    sessionStorage.setItem("retailerOrder", data);
    this.setState({showConfirmForm:true})
  }


  renderOrderForm(){
    var table=this.state.productData.map((d,i)=>
    <tr key={i}>
    <StyledTh color='title'>{d.refNo}</StyledTh>
    <StyledTh color='title'>{d.itemName}</StyledTh>
    <StyledTh color='title'>{d.color}</StyledTh>
    <StyledTh color='title'>{d.description}</StyledTh>
    <StyledTh color='title'>{d.UPC}</StyledTh>
    <StyledTh color='title'>$ {d.retailPrice}</StyledTh>
    <StyledTh color='title'>{d.qty}</StyledTh>
    <StyledTh color='title'>$ {d.qty * d.retailPrice}</StyledTh>
     </tr>
    );

    return(
      <table>
      <tr>
      <StyledTh color='title'>Ref No</StyledTh>
      <StyledTh color='title'>Item Name</StyledTh>
      <StyledTh color='title'>Color</StyledTh>
      <StyledTh color='title'>Description</StyledTh>
      <StyledTh color='title'>UPC</StyledTh>
      <StyledTh color='title'>Retailer Price</StyledTh>
      <StyledTh color='title'>Qty</StyledTh>
      <StyledTh color='title'>Total</StyledTh>
      </tr>
      {table}

      <tr>
      <td colspan="10">
      <StyledButtonBar>
      <button onClick={()=>this.setState({showConfirmForm:false})}>Back</button>
      <button onClick={()=>this.confirmOrder()}>Payment</button>
      </StyledButtonBar>
      </td>
      </tr>
      </table>
    );

  }

  renderMobileTable()
  {
    var table=this.state.productData.map((d,i)=>
      <tr key={i}>
      <StyledTh color='product'>{d.itemName}</StyledTh>
      <StyledTh color='product'><StyledImg src={itemImg}/></StyledTh>
      <StyledTh color='product'>{d.UPC}</StyledTh>
      <StyledTh color='product'>$ {d.retailPrice}</StyledTh>
      <StyledTh color='product'><input type="number" value={d.qty} min={0} onChange={(e)=>this.updateItem(e,d.id)}/>  </StyledTh>
      <StyledTh color='product'>$ {d.qty * d.retailPrice}</StyledTh>
      <StyledTh color='product'><button onClick={()=>this.resetItem(d.id)}>del</button></StyledTh>
      </tr>
    );
    return(
      <Table>


      <tr>
      <td colspan="3" style={{
        'background-color':'rgb(190,220,231)',
        'border':'1px solid black'
      }}>
      Supplier:
      </td>
      <td colspan="4" style={{
        'background-color':'rgb(190,220,231)',
        'border':'1px solid black'

      }}>
      Ship To:
        </td>
      </tr>
            <tr>
            <td colspan="3" style={{
               'border':'1px solid black',
               'padding':'5px'
            }}>
            ML Creation Co., Limited (Hong Kong)<br/>
            Company Registration Cert No.: 61575741-000-06017-9
            </td>
            <td colspan="4" style={{
               'border':'1px solid black'

            }}>            </td>
            </tr>
            <tr>
            <td colspan="3" style={{
              'background-color':'rgb(190,220,231)',
              'border':'1px solid black'
            }}>
            ML Creation Order No.:
            </td>
            <td colspan="4" style={{
              'background-color':'rgb(190,220,231)',
              'border':'1px solid black'

            }}>
            Order Data:
            </td>
            </tr>





      <tr>
      <StyledTh color='title'>Item Name</StyledTh>
      <StyledTh color='title'>Image</StyledTh>
      <StyledTh color='title'>UPC</StyledTh>
      <StyledTh color='title'>Retailer Price</StyledTh>
      <StyledTh color='title'>Qty</StyledTh>
      <StyledTh color='title'>Total</StyledTh>
      <StyledTh color='title'>Delete</StyledTh>
      </tr>
      {table}
      <tr>
      <td colspan="3">

      </td>

      <StyledTh>Total</StyledTh>
      <StyledTh>{this.getTotalQty()}</StyledTh>
      <StyledTh>{this.getTotalCost()}</StyledTh>
      <StyledTh></StyledTh>

       </tr>

            <tr>
            <td colspan="7">
            <StyledButtonBar>
            <button onClick={()=>this.resetAllItem()}>Reset</button>
            <ConfirmButton onClick={()=>this.confirmOrder()}>Submit order draft</ConfirmButton>
            </StyledButtonBar>
            </td>
            </tr>
      </Table>
    );
  }


  renderTable()
  {

    var table=this.state.productData.map((d,i)=>
      <tr key={i}>
      <StyledTh color='product'>{d.refNo}</StyledTh>
      <StyledTh color='product'>{d.itemName}</StyledTh>
      <StyledTh color='product'>{d.color}</StyledTh>

      <StyledTh color='product'><StyledImg src={itemImg}/></StyledTh>
       <StyledTh color='product'>{d.UPC}</StyledTh>
      <StyledTh color='product'>$ {d.retailPrice}</StyledTh>
      <StyledTh color='product'><input type="number" value={d.qty} min={0} onChange={(e)=>this.updateItem(e,d.id)}/>  </StyledTh>
      <StyledTh color='product'>$ {d.qty * d.retailPrice}</StyledTh>
      <StyledTh color='product'><button onClick={()=>this.resetItem(d.id)}>del</button></StyledTh>

      <StyledTh color='price'></StyledTh>
      <StyledTh color='price'></StyledTh>

      </tr>
    );
    return(
      <Table>
      <tr>
      <td colspan="5" style={{
        'background-color':'rgb(190,220,231)',
        'border':'1px solid black'
      }}>
      Supplier:
      </td>
      <td colspan="6" style={{
        'background-color':'rgb(190,220,231)',
        'border':'1px solid black'

      }}>
      Ship To:
        </td>
      </tr>
            <tr>
            <td colspan="5" style={{
               'border':'1px solid black',
               'padding':'5px'
            }}>
            ML Creation Co., Limited (Hong Kong)<br/>
            Company Registration Cert No.: 61575741-000-06017-9
            </td>
            <td colspan="6" style={{
               'border':'1px solid black'

            }}>            </td>
            </tr>
            <tr>
            <td colspan="5" style={{
              'background-color':'rgb(190,220,231)',
              'border':'1px solid black'
            }}>
            ML Creation Order No.:
            </td>
            <td colspan="6" style={{
              'background-color':'rgb(190,220,231)',
              'border':'1px solid black'

            }}>
            Order Data:
            </td>
            </tr>


      <tr>
      <StyledTh color='title'>W-S Ref. No.</StyledTh>
      <StyledTh color='title'>Item Name</StyledTh>
      <StyledTh color='title'>Color</StyledTh>
      <StyledTh color='title'>Item Picture</StyledTh>
      <StyledTh color='title'>UPC</StyledTh>
      <StyledTh color='title'>Unit Price (USD)</StyledTh>
      <StyledTh color='title'>Qty</StyledTh>
      <StyledTh color='title'>Total</StyledTh>
      <StyledTh color='title'>Delete</StyledTh>
      <StyledTh color='titleBlue'>MSRP</StyledTh>
      <StyledTh color='titleBlue'>MAP</StyledTh>
      </tr>
      {table}
      <tr>
      <td colspan="5" style={{'background-color':'rgb(190,220,231)'}}>
      </td>

      <StyledTh color='footerBlue'>Total</StyledTh>
      <StyledTh color='footerBlue'>{this.getTotalQty()}</StyledTh>
      <StyledTh color='footerBlue'>{this.getTotalCost()}</StyledTh>
      <StyledTh color='footerBlue'></StyledTh>
      <StyledTh color='footerBlue'></StyledTh>
      <StyledTh color='footerBlue'></StyledTh>
        </tr>

            <tr>
            <td colspan="12"
            style={{
              'background-color':ColorSchema['footerBlue'].color
            }}
            >
            <StyledButtonBar>
            <button onClick={()=>this.resetAllItem()}>Reset</button>
            <ConfirmButton onClick={()=>this.confirmOrder()}>Submit order draft</ConfirmButton>
            </StyledButtonBar>
            </td>
            </tr>
      </Table>
    );
  }


  render(){
    var form;
    if(!this.state.showConfirmForm){
      if(this.props.mobile){
      form=this.renderMobileTable();
    }else{
      form=this.renderTable();

    }
    }else{
      form=this.renderOrderForm();
    }

    return(
      <div style={{'display':'flex','justify-content':'center','width':'100%'}}>
      {form}
      </div>

    );
  }



}


export default ProductTable;
