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

  async getCitiesByPagination({ page, take }) {
    console.log(typeof page, typeof take, page, take)
    const offset = (page - 1) * take;
    return await this.database.all("select * from city LIMIT $limit OFFSET $offset", {
      $limit: take,
      $offset: offset
    });
  }

  async getCitiesCount() {
    return await this.database.get("select count(*) from city");
  }
}