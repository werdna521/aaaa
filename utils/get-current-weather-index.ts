export const getCurrentWeatherIndex = (): number => {
  const now = new Date()
  const hour = now.getHours()

  if (hour >= 0 && hour < 3) {
    return 0
  } else if (hour >= 3 && hour < 9) {
    return 1
  } else if (hour >= 9 && hour < 15) {
    return 2
  } else if (hour >= 15 && hour < 21) {
    return 3
  }

  return 4
}
