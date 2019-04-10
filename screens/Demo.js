import React, { Component } from 'react'
import { Text, View, Modal, Button, ActivityIndicator, FlatList } from 'react-native'

export default class Demo extends Component {
  state = {
    showModal: false,
    isLoading: true,
    heroes: []
  }

  componentDidMount () {
    fetch('https://api.opendota.com/api/heroStats')
      .then(response => response.json())
      .then(data => this.setState({
        heroes: data,
        isLoading: false
      }))
      .catch(e => this.setState({
        isLoading: false
      }))
  }
  
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    const {showModal, isLoading, heroes} = this.state
    return isLoading ? <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}><ActivityIndicator /></View> : (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        {/* <Text>{JSON.stringify(heroes)}</Text> */}
        <FlatList
          data={this.state.heroes}
          renderItem={({item}) => (<Text style= {{ padding: 20, fontSize: 100}} key={item.id}>{item.localized_name}</Text>)}
          initialNumToRender="10"
          />
        
        {showModal ? <Text> For Demo Purpose </Text>: <Text>False</Text>}
        <Button 
          title="modal"
          onPress={this.toggleModal}
          />
      <Modal
        animationType="slide"
        visible={showModal}
        transparent={true}
        onRequestClose={this.toggleModal}
        >
        <View style={{
          flex: 1, 
          justifyContent: "center", 
          alignItems: "center",
          backgroundColor: "rgba(200, 200, 200, 0.8)"
          }}>
          <Text>Halo kita di modal</Text>
          <Button 
            title="modal"
            onPress={this.toggleModal}
            />
        </View>
      </Modal>
      </View>
    )
  }
}
