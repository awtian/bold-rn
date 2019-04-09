import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation'
// SCREENS
import Todo from './screens/Todo'
import About from './screens/About'
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
  }
}, {
  initialRouteName: 'Todo'
})

export default createAppContainer(RootNavigation)