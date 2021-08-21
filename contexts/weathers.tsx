import React, { createContext, useContext, FC } from 'react'

import { Weather } from '../components/home/types'
import useWeathers from '../hooks/use-weathers'

type Context = {
  weathers: Weather[]
  loading: boolean
  error
}

const WeathersContext = createContext<Context>(null)

export const WeathersProvider: FC = ({ children }) => {
  const { weathers, loading, error } = useWeathers()

  return (
    <WeathersContext.Provider value={{ weathers, loading, error }}>
      {children}
    </WeathersContext.Provider>
  )
}

export const useWeathersContext = (): Context => {
  return useContext(WeathersContext)
}
