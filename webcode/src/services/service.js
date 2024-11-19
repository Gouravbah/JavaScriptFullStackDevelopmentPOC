import http from "./axiosCall";

const dataCall = () => {
    return http.get("/users", {
    });
};

const service = {
    dataCall,
};

export default service;