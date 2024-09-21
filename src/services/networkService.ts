import axios from 'axios';
import AppConstants from 'constants/AppConstants';
import { textToQuery } from 'helpers';

const accessKey = process.env.REACT_APP_ACCESS_KEY as string;
const endpoint = process.env.REACT_APP_API_URL as string;

const {
  Photos,
  Page,
  PerPage,
  Search,
  OrderBy,
  Query,
} = AppConstants.api;

const NetworkService = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});

const getPhotos = async (page: number): Promise<any[]> => {
  try {
    const response = await NetworkService.get(`/${Photos}`, {
      params: {
        [Page]: page,
        [PerPage]: 13,
      },
    });
    return response.data;
  } catch (err) {
    return [];
  }
};

const getSearch = async (page: number, query: string, order: string = 'relevant'): Promise<any[]> => {
  try {
    const response = await NetworkService.get(`/${Search}/${Photos}`, {
      params: {
        [Page]: page,
        [PerPage]: 13,
        [Query]: textToQuery(query),
        [OrderBy]: order,
      },
    });
    return response.data.results;
  } catch (err) {
    return [];
  }
};

export {
  getPhotos,
  getSearch,
};
