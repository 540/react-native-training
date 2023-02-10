import { Container } from '_di/types'
import { createContext, ReactNode, useContext, useRef } from 'react'
import { registerEmptyModules } from '_di/registerModules'
import { container } from '_di/container'

const emptyContainer = registerEmptyModules()

export const DiContext = createContext<Container>(emptyContainer.cradle)

export const DiProvider = (props: { children: ReactNode; container: Container }) => {
  const containerRef = useRef(container.cradle)

  return <DiContext.Provider value={containerRef.current}>{props.children}</DiContext.Provider>
}

export const useContainer = () => useContext(DiContext)
