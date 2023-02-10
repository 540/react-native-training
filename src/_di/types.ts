import { modules } from './modules'

export type Module = typeof modules

export type Container = {
  [P in keyof Module]: ReturnType<Module[P]['resolve']>
}
