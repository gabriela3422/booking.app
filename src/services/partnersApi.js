// src/api/partnersApi.js

import apiClient from './apiClient';

export const getPartners = () => {
    return apiClient.get('/partners');
};