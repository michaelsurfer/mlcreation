export const apiEndPoint = 'http://localhost:3001/';
export const domain = 'http://localhost:3000/';

export const imagePath = domain+"image/";

export const apis = {

  getAllComments:{
    endpoint:apiEndPoint+"getAllComments",
    method:'GET'
  },
  getComments:{
    endpoint:apiEndPoint+"getComments/",
    method:'GET'
  },
  leaveComment:{
    endpoint:apiEndPoint+"leaveComment/",
    method:'POST'
  },
  activation:{
    endpoint:apiEndPoint+"activation/",
    method:'GET'
  },
  retrievePassword:{
    endpoint:apiEndPoint+"retrievePassword/",
    method:'GET'
  },
  contactUs:{
    endpoint:apiEndPoint+"contactus/",
    method:'POST'
  },
  transactionHistory:{
    endpoint:apiEndPoint+"getTransactions/",
    method:'GET'
    },
  payment:{
    endpoint:apiEndPoint+"payment/",
    method:'POST'
  },
  createOrder:{
    endpoint:apiEndPoint+"createOrder",
    method:'POST'
  },
  checkOrder:{
    endpoint:apiEndPoint+"checkOrder/",
    method:'GET'
  },
  login:{
    endpoint:apiEndPoint+"login/",
    method:'POST'
  },
  getNextOrderNo:{
    endpoint:apiEndPoint+"getNextOrderNo",
    method:'GET'
  },
  checkEmail:{
    endpoint:apiEndPoint+"checkEmail",
    method:'GET'
  },
  register:{
    endpoint:apiEndPoint+"register",
    method:'POST'
  }
}
