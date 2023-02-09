import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './Home'

const Stack = createNativeStackNavigator<NavigationParams>()

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
)

export type NavigationParams = {
  Home: undefined
}

export type RouteName = keyof NavigationParams
