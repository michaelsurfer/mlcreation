import App from './App';
import React,{Component} from 'react';
import {Provider} from 'mobx-react';
//import Store from './mlcreation/common/Store2';
import stores from './mlcreation/stores'

export default class Root extends Component{
  render(){
    return(
      <Provider store={{...stores}}>
        <App/>
      </Provider>
    );
  }

}
