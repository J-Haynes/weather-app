export function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function returnDate() {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return `${new Date().toLocaleTimeString('en-US')} ${String(
    new Date().toLocaleString('en-us', options)
  )}`
}

export function formatDate(date: string) {
  const theDate = new Date(date)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return `${theDate.toLocaleTimeString('en-US')} ${String(
    theDate.toLocaleString('en-us', options)
  )}`
}
