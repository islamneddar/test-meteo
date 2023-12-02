export class IWeatherService {
  /**
   * Forecast = { day : number,
   *         probRain : number,
   *         tmin: number,
   *         tmax: number,}
   * @return {Promise<Forecast>}
   * @param cityInsee
   */
  getForecastByCityInsee({cityInsee}) {
    throw new Error('IWeatherService.getForecastByCity() must be implemented');
  }
}