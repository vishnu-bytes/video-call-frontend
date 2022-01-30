import axios from "axios";
import config from "../../../common/config";
import { getStorageItem } from "../local";

const baseURL = config.BASE_API ;

const base = async (options, token = true) => {
  const accessToken = await getStorageItem("accessToken");
  let headers = {
    Accept: "application/json",
  };
  if (token) headers["Authorization"] = ` Bearer ${accessToken}`;
  return axios({
    baseURL,
    headers,
    ...options,
  }).then((res) => res.data);
};

export const get = (url, params, token) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options, token);
};

export const patch = (url, data, token) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options, token);
};

export const post = (url, data, token) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options, token);
};

export const put = (url, data, token) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options, token);
};

export const del = (url, data, token) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options, token);
};
