import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
const axiosInstance = axios.create({
    baseURL: `${apiUrl}`,
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