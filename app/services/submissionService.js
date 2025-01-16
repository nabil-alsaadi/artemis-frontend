import apiClient from './apiClient';

export const submitBlocks = async (blockIds) => {
  const response = await apiClient.post('/submissions', { blockIds });
  return response.data;
};
