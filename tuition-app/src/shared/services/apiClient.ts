import axiosClient from './proxyClient';
import { AxiosRequestConfig } from 'axios';

/**
 * GET request
 */
export const getRequest = async <T>(
  apiMethod: string,
  params?: Record<string, unknown>,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await axiosClient.get<T>(apiMethod, {
    params,
    ...config,
  });
  return response.data;
};

/**
 * POST request
 */
export const postRequest = async <TResponse, TPayload = unknown>(
  apiMethod: string,
  payload: TPayload,
  config?: AxiosRequestConfig
): Promise<TResponse> => {
  const response = await axiosClient.post<TResponse>(apiMethod, payload, config);
  return response.data;
};

/**
 * PUT request
 */
export const putRequest = async <TResponse, TPayload = unknown>(
  apiMethod: string,
  payload: TPayload,
  config?: AxiosRequestConfig
): Promise<TResponse> => {
  const response = await axiosClient.put<TResponse>(apiMethod, payload, config);
  return response.data;
};

/**
 * PATCH request
 */
export const patchRequest = async <TResponse, TPayload = unknown>(
  apiMethod: string,
  payload?: TPayload,
  config?: AxiosRequestConfig
): Promise<TResponse> => {
  const response = await axiosClient.patch<TResponse>(apiMethod, payload, config);
  return response.data;
};

/**
 * DELETE request
 */
export const deleteRequest = async <TResponse, TPayload = unknown>(
  apiMethod: string,
  payload?: TPayload,
  config?: AxiosRequestConfig
): Promise<TResponse> => {
  const response = await axiosClient.delete<TResponse>(apiMethod, {
    data: payload,
    ...config,
  });
  return response.data;
};
