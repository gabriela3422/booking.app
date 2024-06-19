import apiClient from './apiClient';

export const getBenefits = () => {
    return apiClient.get('/benefits');
};