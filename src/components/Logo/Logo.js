import React from 'react'
import {Text, TextInput, Button, View} from 'react-native'
import { CustomImage } from '../../screens/styled'

export default function Logo () {
    return (
        <CustomImage
        height={'80px'}
        width={'200px'}
        source={require('../../assets/PaqueteAtomic/Logo.png')}
      />
    )
  }