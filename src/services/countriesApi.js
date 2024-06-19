import apiClient from './apiClient';

export const getCountries = () => {
    return apiClient.get('/countries');
};