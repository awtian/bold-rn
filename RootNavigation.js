import {createStackNavigator, createAppContainer, createBottomTabNavigator, create} from 'react-navigation'
// SCREENS
import Todo from './screens/Todo'
import About from './screens/About'
import Demo from './screens/Demo'
import Secret from './screens/Secret'

const TodoNav = createStackNavigator({
  Home: {
    screen: Todo
  },
  Secret: {
    screen: Secret
  }
})

const RootNavigation = createBottomTabNavigator({
  Todo: {
    screen: TodoNav
  },
  About: {
    screen: About
  },
  Demo: {
    screen: Demo
  },
}, {
  initialRouteName: 'Demo'
})

export default createAppContainer(RootNavigation)