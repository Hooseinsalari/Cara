import http from "./httpService";

export const getOneProduct = (id) => {
  return http.get(`https://cara-back-end.onrender.com/api/product/${id}`);
};
