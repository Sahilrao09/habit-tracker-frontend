import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE_URL;

const API = axios.create({
  baseURL: `${API_BASE}`,
});

// 🚀 Automatically attach token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetchHabits = () => API.get("/habits");
export const createHabit = (habit) => API.post("/habits", habit);
export const updateHabit = (id, habit) => API.patch(`/habits/${id}`, habit);
export const deleteHabit = (id) => API.delete(`/habits/${id}`);
