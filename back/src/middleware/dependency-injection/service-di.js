import database from '../../db/database.js';
import { CityService } from '../../domain/city/city.service.js';

const servicesDIContainer = ()  => {
  console.log('servicesDIContainer')

  const cityService = new CityService({ database: database });

  return {
    cityService
  }
}

export const servicesDi = servicesDIContainer();