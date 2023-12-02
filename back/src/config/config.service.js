import dotenv from "dotenv";

dotenv.config();

export class ConfigService {
  constructor(){}

  getMeteoApiToken() {
    const meteoApiToken= process.env.API_TOKEN_METEO;
    console.log("meteoApiToken", meteoApiToken)
    return meteoApiToken;
  }
}