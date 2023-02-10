import { createContainer, InjectionMode } from 'awilix'
import { Container } from './types'

export const container = createContainer<Container>({
  injectionMode: InjectionMode.PROXY
})
