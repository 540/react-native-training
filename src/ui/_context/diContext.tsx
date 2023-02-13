import { Container } from '_di/types'
import { createContext, ReactNode, useContext, useRef } from 'react'
import { container } from '_di/container'

const emptyContainer = container.register({})

export const DiContext = createContext<Container>(emptyContainer.cradle)

export const DiProvider = ({ children, container }: { children: ReactNode; container: Container }) => {
  const containerRef = useRef(container)

  return <DiContext.Provider value={containerRef.current}>{children}</DiContext.Provider>
}

export const useContainer = () => useContext(DiContext)
