import axios from "../axios.js";

export function login({commit},data) {
    return axios.post("login", data)
        .then(response => {
            commit("setUser",data.user);
            commit("setToken", data.token);
            return response;
    })
}


export function logout({commit}) {
    return axios.post("logout").
    then(response => {
        commit("setUser", null);
        commit("setToken", null);
        return response;
    })
}