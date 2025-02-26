export function setUser (state,user) {
    state.user.data = user;
}

export function setToken (state,token) {
    state.token = token;
    if(token){
        sessionStorage.setItem("TOKEN", token);
    }else {
        sessionStorage.removeItem("TOKEN");
    }
}