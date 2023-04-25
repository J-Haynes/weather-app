export interface WeatherModel {
  name: string
  condition: string
  temp: number
  windDirection: number
  windSpeed: number
}

export interface citys {
  gisborne: WeatherModel
  auckland: WeatherModel
  wellington: WeatherModel
  napier: WeatherModel
  kaitaia: WeatherModel
  taranaki: WeatherModel
  taupo: WeatherModel
  hamilton: WeatherModel
}
