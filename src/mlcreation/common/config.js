export const apiEndPoint = 'http://localhost:3001/';
//export const domain = 'http://localhost:3000/';
export const domain=process.env.PUBLIC_URL+'/';
export const debugBorder = '1px solid blue';

export const imagePath = domain+"image/";
export const productImagePath=domain+"image/products/"

export const apis = {
  createCustomOrder:{
    endpoint:apiEndPoint+"createCustomOrder",
    method:'POST'
  },
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
