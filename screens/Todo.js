import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import {todo as s} from '../styles'
import {connect} from 'react-redux'

class Todo extends Component {
  static navigationOptions = {
    title: 'Bold Fox Todo',
    headerStyle: {
      backgroundColor: 'crimson',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  state = {
    todos: ['Bangun', 'Mandi', "Hacktiv8"],
    newTodo: ''
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }

  render() {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View style={s.dua}>
          {this.state.todos.map((todo, i) => (
            <Text key={todo+i}>🦊 {todo}</Text>
          ))}
          <TextInput 
            style={s.input} 
            value={this.state.newTodo}
            onChangeText={(newTodo) => this.setState({newTodo})}
            />

        </View>
        <View style={s.tiga}>
            <Button 
              title='hehehe'
              onPress={this.addTodo}
            />
            <Button 
              title='?!?!?'
              onPress={() => this.props.navigation.navigate('About')}
            />
            <Button 
              title='ke secret'
              onPress={() => this.props.navigation.navigate('Secret')}
            />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  text: state
})

export default connect(mapStateToProps)(Todo)