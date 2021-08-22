import { useEffect, useState } from 'react'

import { Weather } from '../components/home/types'
import { getWeatherById } from '../services'

type Returns = {
  weathers: Weather[]
  loading: boolean
  error
}

const useWeathers = (weatherId = '501580'): Returns => {
  const [weathers, setWeather] = useState<Weather[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getWeatherById(weatherId)
      .then((data) => {
        setWeather(data)
      })
      .catch(setError)
      .finally(() => {
        setLoading(false)
      })
  }, [weatherId])

  return {
    weathers,
    loading,
    error,
  }
}

export default useWeathers
