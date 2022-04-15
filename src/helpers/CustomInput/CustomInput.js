import React, { useRef, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { LockImage } from './styled'
import { TextCustom } from '../../screens/styled'
import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'


const CustomInput = ({ placeholder, label, handleChange, title, validation }) => {

  return (
    <View>
      <TextCustom> {title} </TextCustom>
      <TextInput style={[styles.input]}
        placeholder={placeholder}
        onChangeText={handleChange}
      />
      {validation ? null : <TextCustom color="red">{label ?? null}</TextCustom>} 
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: theme.color.secondary2,
    fontSize: theme.font.m,
    paddingLeft: theme.spacing.xs
  },
  input: {
    borderWidth: 2,
    borderColor: theme.color.primary2,
    paddingLeft: theme.spacing.m,
    borderRadius: 5,
    backgroundColor: theme.color.secondary,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 12,
    justifyContent: 'center',
    marginLeft: 22,
    marginRight: 20
  },
  inputError: {
    color: theme.color.danger
  }
})

export default CustomInput