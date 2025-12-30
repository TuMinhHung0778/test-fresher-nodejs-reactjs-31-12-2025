import axiosClient from "./axiosClient";

export const productApi = {
  getAll: () => axiosClient.get("/products"),
  getById: (id) => axiosClient.get(`/products/${id}`),
  create: (data) => axiosClient.post("/products", data),
  update: (id, data) => axiosClient.put(`/products/${id}`, data),
  delete: (id) => axiosClient.delete(`/products/${id}`),
};

// 📌 Đây là nơi DUY NHẤT gọi backend
// 📌 đổi API_URL là xong
// 👉 Đề nào cũng giống nhau, chỉ đổi /products
