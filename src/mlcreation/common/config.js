export const domain = 'http://localhost:3001/';

export const apis = {
  activation:{
    endpoint:domain+"activation/",
    method:'GET'
  },
  retrievePassword:{
    endpoint:domain+"retrievePassword/",
    method:'GET'
  },
  contactUs:{
    endpoint:domain+"contactus/",
    method:'POST'
  },
  transactionHistory:{
    endpoint:domain+"getTransactions/",
    method:'GET'
    },
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
