import axiosClient from "./axiosApi";

const postApi = {
    getAll: (params?: any) => {
        let url = '/post/getAllPost';
        return axiosClient.get(url, { params });
    },

    getId: (id: string | null | undefined) => {
        let url = `/post/get/${id}`;
        return axiosClient.get(url);
    },

    createPost: (data: Object) => {
        let url = '/post/create';
        return axiosClient.post(url, { data });
    },

    updatePost: (data: Object) => {
        let url = `/post/update`;
        return axiosClient.put(url, { data });
    },

    deletePost: (data?: any) => {
        let url = `/post/delete`;
        return axiosClient.post(url, { data });
    },

    getCategory: (params?: any) => {
        let url = `/category`;
        return axiosClient.get(url, { params });
    },
};

export default postApi;

