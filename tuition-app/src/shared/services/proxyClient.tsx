import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

/**
 * Base URL
 * Prefer environment variables when available
 */
const BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  process.env.API_BASE_URL ||
  'https://demoapps.zerone-consulting.com';

/**
 * Create Axios instance
 */
const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 * Attach auth token
 */
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

/**
 * Response Interceptor
 * Global error handling
 */
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        console.error('Unauthorized – token expired or invalid');
        // optional: logout / redirect
      }

      if (status === 500) {
        console.error('Server error');
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
