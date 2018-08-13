export const domain = 'http://localhost:3001/';

export const apis = {

  payment:{
    endpoint:domain+"payment/",
    method:'POST'
  },
  createOrder:{
    endpoint:domain+"createOrder",
    method:'POST'
  },
  checkOrder:{
    endpoint:domain+"checkOrder/",
    method:'GET'
  },
  login:{
    endpoint:domain+"login/",
    method:'POST'
  },
  getNextOrderNo:{
    endpoint:domain+"getNextOrderNo",
    method:'GET'
  },
  checkEmail:{
    endpoint:domain+"checkEmail",
    method:'GET'
  },
  register:{
    endpoint:domain+"register",
    method:'POST'
  }
}
