import http from "./httpService";

export const loginUsers = (data) => {
  return http.post("/user/login", data);
};
