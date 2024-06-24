import apiClient from './apiClient';

export const getHotels = () => {
    return apiClient.get('/hotels');
};

export const getHotelsByQuery = (filters = {}) => {
    const query = new URLSearchParams();
    for (const key in filters) {
        if (Array.isArray(filters[key])) {
            filters[key].forEach(value => query.append(key, value));
        } else if (filters[key]) {
            query.append(key, filters[key]);
        }
    }
    const queryString = query.toString();
    return apiClient.get(`/hotels?${queryString }`);
};

export const getHotelById = (id) => {
    return apiClient.get(`/hotels/${id}`);
};