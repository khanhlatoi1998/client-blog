import axiosClient from "./axiosApi";

const authApi = {
    register: (data: Object) => {
        let url = '/register';
        return axiosClient.post(url, { data });
    },

    login: (data: Object) => {
        let url = "/login";
        return axiosClient.post(url, { data });
    },

    checkExist: (data: any) => {
        let url = '/check-exist';
        return axiosClient.post(url, { data });
    },
};

export default authApi;