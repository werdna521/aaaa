// parses yyyy-mm-dd hh:mm:ss -> hh:mm
export const parseTime = (date: string): string => {
  const timeRegex = new RegExp(/\d\d:\d\d/i)
  return timeRegex.exec(date)?.[0]
}
