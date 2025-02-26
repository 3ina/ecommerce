import axios from "../axios.js";

export function login({commit},data) {
    return axios.post("login", data)
        .then(response => {
            commit("setUser",data.user);
            commit("setToken", data.token);
            return response;
    })
}