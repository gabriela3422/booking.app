import apiClient from './apiClient';

export const getCategories = () => {
    return apiClient.get('/categories');
};