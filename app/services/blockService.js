import apiClient from './apiClient';

export const fetchBlocks = async () => {
  const response = await apiClient.get('/blocks');
  return response.data;
};
