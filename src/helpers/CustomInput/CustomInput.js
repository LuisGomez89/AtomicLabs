import React, { useRef, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import theme from '../../themes/lights'
import styles from './styles'

const LOG = {
  error: {
    empty: 'Empty field',
    min: 'Its too short',
    max: 'Its too long',
    regex: 'Doesnt match the format'
  }
}

const initError = (isOk, visible, message) => {
  const defaultVisible = false
  const defaultMessage = 'error '
  const defaultIsOk = false
  return {
    isOk: isOk || defaultIsOk,
    visible: visible || defaultVisible,
    message: message || defaultMessage
  }
}

const checkRegex = (text, validation) => {
  if (validation.regex === undefined) {
    return false
  } else if (
    validation.not
      ? !text.match(validation.regex)
      : text.match(validation.regex)
  ) {
    return true
  }
  return false
}

const isEmpty = (text, validation) => {
  return validation.required && text === ''
}

const TriggerValidation = (text, error, validation) => {
  if (isEmpty(text, validation)) {
    error.current = initError(false, true, LOG.error.empty)
  } else if (text.length < validation.min) {
    error.current = initError(false, true, LOG.error.min)
  } else if (text.length > validation.max) {
    error.current = initError(false, true, LOG.error.max)
  } else if (checkRegex(text, validation)) {
    error.current = initError(false, true, LOG.error.regex)
  } else {
    error.current = initError(true, false)
  }
}


const CustomInput = ({ height, type, title, label, setValue, setOk, validation, placeholder }) => {
  const error = useRef(initError())
  const isPassword = type === 'password'
  const [visible, setVisible] = useState(true)

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={[styles.input, { height: height }]}
        secureTextEntry={isPassword ? visible : false}
        placeholder={placeholder}
        onChangeText={text => {
          if (validation) {
            TriggerValidation(text, error, validation)
            setValue(text)
            setOk(error.current.isOk)
          }
        }} />
        {(type === 'password')
          ? <ShowUnshowEye
        visible={visible}
        setVisible={setVisible}
        style={{ position: 'absolute', right: 10, top: 30 }} />
          : undefined}
      {error.current.visible
        ? <Text style={styles.inputError}>*{error.current.message}</Text>
        : null}
      <Text>{label ?? null}</Text>
    </View>
  )
}

export default CustomInput