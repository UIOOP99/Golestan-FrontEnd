import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export function setAxiosAuthorizationHeader(token) {
  setInstanceHeader("Authorization", token);
}

function setInstanceHeader(key, value) {
  if (value) {
    instance.defaults.headers.common[key] = value;
  } else {
    delete instance.defaults.headers.common[key];
  }
}

export default instance;
