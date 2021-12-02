import { API_BASE_URL } from "../constants";

export const request = async (endpoint) => {
  const response = await (await fetch(API_BASE_URL + "/" + endpoint)).json();
  console.log(response);
  return response;
};
