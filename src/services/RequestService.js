import { API_BASE_URL } from "../constants";

export const request = async (endpoint) => {
  const response = await (await fetch(API_BASE_URL + "/" + endpoint)).json();
  return response;
};

export const postRequest = async (endpoint, postObject) => {
  const response = await (
    await fetch(API_BASE_URL + "/" + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObject),
    })
  ).json();
  return response;
};
