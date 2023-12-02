import statusResponse from '../../common/constant/status-response.js';

export class CityController {
  constructor({ cityService, meteoService }) {
    this.cityService = cityService;
    this.meteoService = meteoService;
  }

  async getCities(req, res, next){
    try{
      const cities = await this.cityService.getCities();
      res.status(statusResponse.STATUS_OK).json(cities);
    }catch (error) {
      console.log("error", error)
      next(error)
    }
  }

  async getForecastForACity(req, res, next){
    try{
      const { id } = req.params;

      if (!id) {
        return res.status(statusResponse.BAD_REQUEST).send({
          error: "Missing id",
        });
      }

      let forecast = await this.cityService.getForecastForId(id);
      if(!forecast || forecast.length === 0){
        forecast = await this.meteoService.getForecastByCityInsee({cityInsee : id });
      }
      res.status(statusResponse.STATUS_OK).json(forecast);
    }catch (error) {
      console.log("error", error)
      next(error)
    }

  }
}