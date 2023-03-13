import axios from 'axios';
import {DATA_API} from '@env';

export const getPaginatedEvents = (limit = 20, offset) => {
  return axios.get(`${DATA_API}`, {
    params: {
      limit: limit,
      offset: offset * limit,
      timezone: 'Europe/Paris',
    },
  });
};
