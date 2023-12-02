import { servicesDi } from './service-di.js';
import { CityController } from '../../domain/city/city.controller.js';
import { externalServiceDi } from './external-service-di.js';


const controllersDIContainer = () => {
  console.log('controllersDIContainer')

  /** services */
  const cityService = servicesDi.cityService

  /** external services */
  const meteoService = externalServiceDi.meteoService

  /** controllers */
  const cityController = new CityController({ cityService, meteoService })

  return {
    cityController
  }
}

export const controllersDi = controllersDIContainer()