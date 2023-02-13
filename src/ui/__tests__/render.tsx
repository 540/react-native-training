import { AwilixContainer } from 'awilix'
import { Container } from '_di/types'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { ReactNode } from 'react'
import { DiProvider } from 'ui/_context/diContext'
import { NavigationContainer } from '@react-navigation/native'
import { container } from '_di/container'
import { NameAndRegistrationPair } from 'awilix/lib/container'
import { render as baseRender } from '@testing-library/react-native'
import { asValue } from '_di/resolvers'

export const render = <T,>(component: React.ReactElement<T>, testModules: NameAndRegistrationPair<Container>) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: false
      }
    }
  })
  const testContainer = container.register({ translate: asValue(testTranslate), ...testModules })

  return baseRender(component, { wrapper: wrapper(testContainer, queryClient) })
}

const wrapper =
  (container: AwilixContainer<Container>, queryClient: QueryClient) =>
  ({ children }: { children: ReactNode }) =>
    (
      <DiProvider container={container.cradle}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </NavigationContainer>
      </DiProvider>
    )

const testTranslate = (key, options = {}) =>
  `t-${key}#${Object.keys(options)
    .map((objectKey: string) => `${objectKey}:${options[objectKey]}`)
    .join(',')}`
