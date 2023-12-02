import { IWeatherService } from './meteo-service-interface.js';

export class MeteoService extends IWeatherService{
  #provider
  constructor({provider}) {
    super();
    this.#provider = provider;
  }

  async getForecastByCityInsee({ cityInsee }) {
    return await this.#provider.getForecastByCityInsee({ cityInsee });
  }

}