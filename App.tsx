import { QueryClient, QueryClientProvider } from 'react-query'
import { Root } from './src/Root'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Root />
  </QueryClientProvider>
)

// eslint-disable-next-line import/no-default-export
export default App
