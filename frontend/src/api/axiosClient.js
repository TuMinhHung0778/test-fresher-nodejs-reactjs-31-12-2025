import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api", // đổi theo backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;


/**
 * CRUD Product

CRUD User

CRUD Order
Đều dùng chung
 */
