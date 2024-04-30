import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
});

const apiService = {
    async get(endpoint, params = {}) {
        try {
            const response = await axiosInstance.get(endpoint, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

};
export default apiService;