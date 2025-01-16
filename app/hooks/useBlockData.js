import { useState, useEffect } from 'react';
import { fetchBlocks } from '../services/blockService';

export const useBlockData = () => {
  const [blocks, setBlocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBlocks = async () => {
      try {
        setLoading(true);
        const data = await fetchBlocks();
        setBlocks(data);
      } catch (err) {
        const msg = err.response.data.message
        setError(msg|| 'Failed to fetch blocks');
      } finally {
        setLoading(false);
      }
    };
    getBlocks();
  }, []);

  return {
    blocks,
    loading,
    error
  };
};
