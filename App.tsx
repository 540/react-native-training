import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { localizer } from './src/localizer'
import { StackNavigator } from './src/StackNavigator'

const queryClient = new QueryClient()
localizer.init()

const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <StackNavigator />
    </QueryClientProvider>
  </NavigationContainer>
)

// eslint-disable-next-line import/no-default-export
export default App
