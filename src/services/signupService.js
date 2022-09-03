import http from "./httpService";

export const signupUsers = (data) => {
  return http.post("/user/register", data);
};
