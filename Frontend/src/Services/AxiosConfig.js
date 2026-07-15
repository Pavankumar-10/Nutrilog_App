import axios from "axios";

axios.interceptors.request.use(

    (config) => {

        console.log("Interceptor Executed");

        const token = localStorage.getItem("token");

        console.log("Token =", token);

        if (token) {

            config.headers.Authorization = `Bearer ${token}`;

            console.log("Authorization Header Added");
        }

        return config;

    },

    (error) => Promise.reject(error)

);

export default axios;