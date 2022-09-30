import axios from 'axios';
import { store } from '../app/store';


export const BASE_URL = "https://apmelshaddai-server.aldairgc.com";

export function instance() {
  const { isLoggedIn, token } = store.getState().auth;

  const inst = axios.create({
    baseURL: "https://apmelshaddai-server.aldairgc.com",
  });

  if (isLoggedIn) inst.defaults.headers.common["Authorization"] = token;
  console.log(isLoggedIn)
  return inst;
}

export default instance();
