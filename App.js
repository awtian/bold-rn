import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './screens/Todo'
import RootNav from './RootNavigation'
import {Provider} from 'react-redux'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* <View style={s.container}> */}
          <RootNav />
        {/* </View> */}
      </Provider>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
