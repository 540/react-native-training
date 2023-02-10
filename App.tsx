import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { localizer } from './src/localizer'
import { registerModules } from '_di/registerModules'
import { DiProvider } from 'ui/_context/diContext'
import { StackNavigator } from 'ui/_navigation/StackNavigator'

localizer.init()
const queryClient = new QueryClient()
const container = registerModules()

const App = () => (
  <DiProvider container={container.cradle}>
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  </DiProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
