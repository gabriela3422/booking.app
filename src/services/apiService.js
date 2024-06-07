import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const apiClient = axios.create({
    baseURL: `${apiUrl}`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getHotels = () => {
    return apiClient.get('/hotels');
};

export const getHotelById = (id) => {
    return apiClient.get(`/hotels/${id}`);

};

const getCountries = () => {
    return apiClient.get('/countries');
};

const getTestimonials = () => {
    return apiClient.get('/testimonials');
};
const getPartners = () => {
    return apiClient.get('/partners');
};
const getBenefits = () => {
    return apiClient.get('/benefits');
};
const getCategories = () => {
    return apiClient.get('/categories');
};
export default {
    getCountries,
    getTestimonials,
    getPartners,
    getBenefits,
    getCategories
};