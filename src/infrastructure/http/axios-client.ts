import axios from "axios";

const apiConfiguration = {
  baseURL: "/api",
  withCredentials: true,
};

export const axiosClient = axios.create(apiConfiguration);

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
