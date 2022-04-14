import { StyleSheet } from 'react-native'
import theme from '../../themes/lights'

const styles = StyleSheet.create({
  title: {
    color: theme.color.secondary2,
    fontSize: theme.font.m,
    paddingLeft: theme.spacing.xs
  },
  input: {
    borderWidth: 0.5,
    borderColor: theme.color.secondary1,
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

export default styles
