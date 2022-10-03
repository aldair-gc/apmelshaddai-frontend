import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from '../app/store';

const inst = axios.create({
  baseURL: "https://apmelshaddai-server.aldairgc.com",
});

inst.interceptors.request.use(
  (config: any) => {
    // const token = localStorage.getItem("token");
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

inst.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    toast.error("There was a problem. Login required.")
    console.log("AXIOS ERROR: response", error)
    return Promise.reject(error);
  }
);


export default inst;
