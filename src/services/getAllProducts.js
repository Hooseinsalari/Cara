import http from "./httpService";

export const getAllProducts = () => {
  return http.get("https://cara-back-end.onrender.com/api/product");
};
