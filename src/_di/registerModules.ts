import { container } from './container'
import { modules } from './modules'
import { Container } from './types'
import { AwilixContainer } from 'awilix'

export const registerModules = () => container.register({ ...modules })
export const registerEmptyModules = () => container.register({ ...modules }) as AwilixContainer<Container>
