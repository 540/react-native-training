import { QueryClient, QueryClientProvider } from 'react-query'
import { localizer } from './src/localizer'
import { registerModules } from '_di/registerModules'
import { DiProvider } from 'ui/_context/diContext'
import { StackNavigator } from 'ui/_navigation/StackNavigator'
import { ThemeProvider } from 'ui/_context/themeContext'
import { NavigationContainer } from 'ui/_navigation/NavigationContainer'

localizer.init()
const queryClient = new QueryClient()
const container = registerModules()

const App = () => (
  <DiProvider container={container.cradle}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  </DiProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
