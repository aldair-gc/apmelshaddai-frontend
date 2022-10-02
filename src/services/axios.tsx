import axios from 'axios';
import { toast } from 'react-toastify';
import { logout } from '../app/auth/authSlice';
import { store } from '../app/store';

const inst = axios.create({
  baseURL: "https://apmelshaddai-server.aldairgc.com",
});

inst.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log("axios auth error")
      // store.dispatch(logout());
      // config.headers.Authorization = ``;
      // localStorage.setItem("token", "");
      // window.location = "/login";
    }
    return config;
  }
)

inst.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    toast.error("There was a problem. Login required.")
    return Promise.reject(error);
  }
);


export default inst;
