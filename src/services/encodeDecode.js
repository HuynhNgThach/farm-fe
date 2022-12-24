import request from "../utils/request";
import { API_PATH } from "../constants";

export async function doGetSupportMethod() {
  try {
    const resp = await request({
      method: "get",
      url: API_PATH.GET_SP_ENCODE,
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
}
export async function doEncode(data) {
  try {
    const resp = await request({
      method: "POST",
      data,
      url: API_PATH.ENCODE,
    });
    return resp;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
