import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

const api = axios.create({
  baseURL: API_URL,
});

// Configuration for headers with token
// api.interceptors.request.use(config => {
//newConfig.headers.authorization = `Bearer ${AuthenticationState.sessionToken}`;
//newConfig.headers.accepts = 'application/json; charset=utf-8';
//return newConfig;
// });

export default api;
