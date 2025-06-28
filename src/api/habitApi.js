import axios from "axios";

const API = axios.create({
  baseURL: "https://habit-tracker-backend-x7ed.onrender.com/",
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
