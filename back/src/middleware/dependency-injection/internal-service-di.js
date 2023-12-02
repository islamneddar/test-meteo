import { ConfigService } from '../../config/config.service.js';

const internalServiceDiContainer = ( ) => {
  const configService = new ConfigService();

  return {
    configService
  }
}

export const internalServiceDi = internalServiceDiContainer();