import axios from 'axios'

import { Weather } from '../components/home/types'
import { API_ROUTES } from '../constants/api-routes'

export const getWeatherById = async (id: string): Promise<Weather[]> => {
  const response = await axios.get(`${API_ROUTES.WEATHER}/${id}.json`)
  return response.data
}
