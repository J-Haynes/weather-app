export function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function returnDate() {
  return String(new Date())
}
