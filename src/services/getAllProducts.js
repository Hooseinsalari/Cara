import http from "./httpService"

export const getAllProducts = () => {
    return http.get("http://localhost:5000/api/product")
}