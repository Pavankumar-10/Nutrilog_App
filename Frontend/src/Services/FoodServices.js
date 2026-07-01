import axios from "axios";

const API_URL = "http://localhost:8080/api/food";

export const getFoodEntries = () => {
    return axios.get(API_URL);
};

export const addFood = (food) => {
    return axios.post(API_URL, food);
};

export const updateFood = (food) => {
    return axios.put(API_URL, food);
};

export const deleteFood = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const calculateNutrition = (data) => {
    return axios.post(
        `${API_URL}/calculate`,
        data
    );
};

export const saveFoodEntry = (food) => {
    return axios.post(
        "http://localhost:8080/api/food",
        food
    );
};

export const getFoodHistory = (userId) => {
    return axios.get(`${API_URL}/user/${userId}`);
};

export const getDashboard =
(userId) => { return axios.get( `http://localhost:8080/api/food/dashboard/${userId}` );
};

export const getFoodById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};