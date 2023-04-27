export interface WeatherModel {
  name: string
  id?: number
  cityName?: string
  condition: string
  temp: number
  windDeg: number
  windSpeed: number
  date: number
  leftStyle: number
  topStyle: number
}

export interface citys {
  gisborne?: WeatherModel
  wellington?: WeatherModel
  // auckland: WeatherModel
  // napier: WeatherModel
  // kaitaia: WeatherModel
  // taranaki: WeatherModel
  // taupo: WeatherModel
  // hamilton: WeatherModel
}
