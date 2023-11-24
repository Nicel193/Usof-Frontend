import axios from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3001/api/`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default $api;