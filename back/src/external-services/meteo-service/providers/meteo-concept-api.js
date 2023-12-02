import { IWeatherService } from '../meteo-service-interface.js';
import axios from 'axios';
import weatherUtils from '../../../utils/weatherUtils.js';

export class MeteoConceptService extends IWeatherService {
  #endpoint = "https://api.meteo-concept.com/api"
  constructor({configService}) {
    super();
    this.configService = configService;
  }

  async getForecastByCityInsee({cityInsee}) {
    const res = await axios.get(`${this.#endpoint}/forecast/daily?token=${this.configService.getMeteoApiToken()}&insee=${cityInsee}`);
    return res.data.forecast.map((forecast) => {
      return {
        day : forecast.day,
        probRain : forecast.probarain,
        tmin: forecast.tmin,
        tmax: forecast.tmax,
        weather: forecast.weather,
      }
    });
  }
}