import axios from 'axios'
import { useEffect, useState } from 'react'

import { Weather } from '../home/types'

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
    axios
      .get('https://ibnux.github.io/BMKG-importer/cuaca/501580.json')
      .then(async ({ data }) => {
        setWeather(data?.[0])
      })
      .catch((err) => {
        setError(err)
      })
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
