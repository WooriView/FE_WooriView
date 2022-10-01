/* eslint-disable no-param-reassign */

const onRequest = (config) => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};
const onRequestError = (error) => Promise.reject(error);
// console.error(`[request error] [${JSON.stringify(error)}]`);

const onResponse = (response) => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};
const onResponseError = (error) => Promise.reject(error);
// console.error(`[response error] [${JSON.stringify(error)}]`);
export default function setupInterceptorsTo(axiosInstance) {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}
