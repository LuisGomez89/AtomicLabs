import React from 'react'
import {ValidationContainer, ValidationText} from './styled'

const inputValidations = (name, apellido) => {
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
    containerNumber: {
      regex: /[^A-Za-z0-9]+/,
      min: 11,
      max: 11
    }
  }
  
  export default inputValidations
  