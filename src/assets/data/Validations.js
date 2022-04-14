const inputValidations = {
    string: {
      regex: /[^A-Za-z0-9 ]+/,
      min: 5,
      max: 50
    },
    phone: {
      regex: /[^0-9]+/,
      min: 10,
      max: 15
    },
    email: {
      regex:
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      min: 5,
      max: 50,
      not: true
    },
    containerNumber: {
      regex: /[^A-Za-z0-9]+/,
      min: 11,
      max: 11
    }
  }
  
  export default inputValidations
  