import { servicesDi } from './service-di.js';
import { CityController } from '../../domain/city/city.controller.js';
import { MeteoConceptService } from '../../external-services/meteo-service/providers/meteo-concept-api.js';
import { internalServiceDi } from './internal-service-di.js';
import { MeteoService } from '../../external-services/meteo-service/meteo-service.js';

const externalServiceDiContainer = () => {
  console.log('externalServiceDiContainer')
  /** internal services */
  const configService = internalServiceDi.configService

  const provider = new MeteoConceptService({ configService })

  const meteoService = new MeteoService({ provider })

  return {
    meteoService
  }
}

export const externalServiceDi = externalServiceDiContainer()