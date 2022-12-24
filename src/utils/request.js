import axios from "axios";
//import { ERROR_MESS } from "../constants";
function doRedirect() {}

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // url = base url + request url
  //withCredentials: true, // send cookies when cross-domain requests
  timeout: 3000, // request timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// response interceptor
service.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      if (response.status === 204 || response.status === 205) {
        return null;
      }
      if (response.data.returnCode === -401) {
        return doRedirect();
      }
      return response.data;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  },
  (error) => {
    console.log("error", { error }); // for debug

    //const err = new Error(ERROR_MESS.ERROR);
    throw error;
  }
);

export default service;
