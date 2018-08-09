export const domain = 'http://localhost:3001/';

export const apis = {

  payment:{
    endpoint:domain+"payment/",
    method:'POST'
  },

  createOrder:{
    endpoint:domain+"createOrder/",
    method:'POST'
  },

  checkOrder:{
    endpoint:domain+"checkOrder/",
    method:'GET'
  }

}
