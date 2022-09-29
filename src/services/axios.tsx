import axios, { HeadersDefaults } from 'axios';

export interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export default axios.create({
  baseURL: "https://apmelshaddai-server.aldairgc.com",
});
