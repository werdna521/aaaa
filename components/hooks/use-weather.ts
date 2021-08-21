import { useEffect, useState } from 'react'

import { Weather } from '../home/types'
import { getWeatherById } from '../../services'

type Returns = {
  weather: Weather
  loading: boolean
  error
}

const useWeather = (): Returns => {
  const [weather, setWeather] = useState<Weather>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getWeatherById('501580')
      .then((data) => {
        setWeather(data?.[0])
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    weather,
    loading,
    error,
  }
}

export default useWeather
