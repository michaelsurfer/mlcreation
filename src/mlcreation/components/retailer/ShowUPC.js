import React,{Component} from 'react';
import data from "../../asset/ProductUPC.json";

export const ShowUPC=({productID,color})=>{
 
    return(
        <label>
            {data[productID][color]}
        </label>
    );
}
