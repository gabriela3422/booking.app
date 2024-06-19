import apiClient from './apiClient';

export const getHotels = () => {
    return apiClient.get('/hotels');
};

export const getHotelsByQuery = (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    return apiClient.get(`/hotels?${query}`);
};

export const getHotelById = (id) => {
    return apiClient.get(`/hotels/${id}`);
};