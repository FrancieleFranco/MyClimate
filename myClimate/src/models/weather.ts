export interface WeatherRequest {
  city: string;
  countryCode?: string;
}

export interface WeatherResponse {
  location: {
    city: string;
    country: string;
  };
  current: {
    temperature: number;
    humidity: number;
    windSpeed: number;
    description: string;
    icon: string;
  };
  forecast: WeatherForecast[];
}

export interface WeatherForecast {
  date: string;
  temperatureMin: number;
  temperatureMax: number;
  description: string;
  icon: string;
}
