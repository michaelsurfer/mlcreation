import React,{Component} from 'react';
import * as c from './Css.js';

export const TotalCostRow=({totalSpan,qtySpan,qty,cost})=>{
    var BgColor='rgb(236,221,220)';
    return(
        <tr>
            <td
                colSpan={qtySpan}
                style={{
                    'background-color':BgColor,
                    'text-align':'right',
                    'border':'1px solid grey',
                    'height':'50px'

                }}
            >
                Total :
            </td>
            <c.StyledTd color={BgColor}>{qty}</c.StyledTd>
            <c.StyledTd color={BgColor}>{cost}</c.StyledTd>
            <td  
                colspan={totalSpan-qtySpan-1}
                style={{
                'background-color':BgColor
                }}
            >
            </td>
        </tr>
    );
}

