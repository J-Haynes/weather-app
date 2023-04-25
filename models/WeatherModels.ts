export interface WeatherModel {
  name?: string
  condition: string
  temp: number
  windDirection: number
  windSpeed: number
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
