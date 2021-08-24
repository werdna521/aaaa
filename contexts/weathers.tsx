import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  FC,
} from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { Weather } from '../components/home/types'
import useWeathers from '../hooks/use-weathers'
import { getLocationId } from '../lib/async-storage'

type Context = {
  weathers: Weather[]
  weatherId: string
  loading: boolean
  error
}

const WeathersContext = createContext<Context>(null)

export const WeathersProvider: FC = ({ children }) => {
  const [weatherId, setWeatherId] = useState('501580')
  const { weathers, loading, error } = useWeathers(weatherId)

  useFocusEffect(
    useCallback(() => {
      getLocationId()
        .then(setWeatherId)
        .catch(() => {
          setWeatherId('501580')
        })
    }, []),
  )

  return (
    <WeathersContext.Provider value={{ weathers, loading, error, weatherId }}>
      {children}
    </WeathersContext.Provider>
  )
}

export const useWeathersContext = (): Context => {
  return useContext(WeathersContext)
}
