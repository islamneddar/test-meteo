import { API_URL } from '@/config/config';

export const cityService = () => {
  const endpoint = API_URL;
  const getAllCity = async () => {
    const response = await fetch(`${endpoint}/cities`);
    return await response.json();
  }

  const getAllCityByPagination = async ({ page, take }) => {
    const response = await fetch(`${endpoint}/cities?page=${page}&take=${take}`);
    return await response.json();
  }

  const getForecastForId = async (id) => {
    const response = await fetch(`${endpoint}/cities/${id}/forecast`);
    return await response.json();
  }

  return {
    getAllCity,
    getForecastForId,
    getAllCityByPagination
  }
}

