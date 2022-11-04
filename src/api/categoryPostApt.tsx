import axiosClient from "./axiosApi";

const categoryPostApi = {
    getAll: (params?: any) => {
        let url = '/post/getAllPost';
        return axiosClient.get(url, { params });
    },
};

export default categoryPostApi;

