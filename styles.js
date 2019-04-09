import {StyleSheet, Dimensions} from 'react-native'

const {width, height} = Dimensions.get('screen')

export const todo = StyleSheet.create({
  satu: {
    flex: 1,
    backgroundColor: 'crimson',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dua: {
    flex: 8,
    backgroundColor: 'mistyrose',
    alignItems: 'center',
    paddingTop: height*0.05
  },
  tiga: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'skyblue'
  },
  input: {
    height: 30, 
    width: 200, 
    borderColor: 'black', 
    borderBottomWidth: 1
  }
})