import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail } from '../Detail'
import { Home } from '../Home'
import { Comic } from '../Home/_components/List'

const Stack = createNativeStackNavigator<NavigationParams>()

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
)

export type NavigationParams = {
  Home: undefined
  Detail: { comic: Comic }
}

export type RouteName = keyof NavigationParams
