import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const getUsers = () => {
    return axios.get(API_URL);
};

export const addUser = (user) => {
    return axios.post(API_URL, user);
};

export const updateUser = (user) => {
    return axios.put(API_URL, user);
};

export const deleteUser = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
export const loginUser = (user) => {
    return axios.post(
        `${API_URL}/login`,
        user
    );
};
export const getUserById = (id) => {

    return axios.get(`${API_URL}/${id}`);

};