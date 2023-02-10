import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail } from 'ui/Detail'
import { Home } from 'ui/Home'
import { NavigationParams } from 'ui/_navigation/model'

const Stack = createNativeStackNavigator<NavigationParams>()

export const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
)
