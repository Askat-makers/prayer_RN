import axios from 'axios';
export const ApiRequest = {
  async post(api, body, config = {}) {
    // if (body) {
    const response = await axios.post(api, body, config);
    return response;
    // }
  },
  async get(api, config) {
    const response = await axios.get(api, config);
    return response;
  },
};
