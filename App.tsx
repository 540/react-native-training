import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { localizer } from './src/localizer'
import { DiProvider } from 'ui/_context/diContext'
import { StackNavigator } from 'ui/_navigation/StackNavigator'
import { modules } from '_di/modules'
import { container } from '_di/container'

localizer.init()
const queryClient = new QueryClient()
const diContainer = container.register({ ...modules })

const App = () => (
  <DiProvider container={diContainer.cradle}>
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  </DiProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
