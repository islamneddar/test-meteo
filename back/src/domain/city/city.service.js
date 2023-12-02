export class CityService {
  constructor({database}) {
    this.database = database;
  }

  async getCities() {
    return await this.database.all("select * from city");
  }

  async getForecastForId(id) {
    return await this.database.all("select * from forecast where insee = ?", [id]);
  }

}